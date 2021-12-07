/* eslint-disable no-debugger */
/* eslint-disable jsdoc/require-jsdoc */
const NO_NEWSLETTER_FILE = "nay";
const YES_NEWSLETTER_FILE = "yay";
const IDK_NEWSLETTER_FILE = "way";
import { Cluster } from "puppeteer-cluster";
import fs from "fs";
import puppeteer from "puppeteer-extra" ;
// import StealthPlugin from "puppeteer-extra-plugin-stealth";
// puppeteer.use( StealthPlugin() );

let browser;
let page;

var allSearchedURLs = [ ...( [ NO_NEWSLETTER_FILE, YES_NEWSLETTER_FILE, IDK_NEWSLETTER_FILE ].map( 
  ele => { return fs.readFileSync( `${ele}.txt`, { flag:"a+", encoding:"utf8" } ).split( "\n" ); } 
) ).flat() ];
console.log( allSearchedURLs );
const minimal_args = [
  "--autoplay-policy=user-gesture-required",
  "--disable-background-networking",
  "--disable-background-timer-throttling",
  "--disable-backgrounding-occluded-windows",
  "--disable-breakpad",
  "--disable-client-side-phishing-detection",
  "--disable-component-update",
  "--disable-default-apps",
  "--disable-dev-shm-usage",
  "--disable-domain-reliability",
  "--disable-extensions",
  "--disable-features=AudioServiceOutOfProcess",
  "--disable-hang-monitor",
  "--disable-ipc-flooding-protection",
  "--disable-notifications",
  "--disable-offer-store-unmasked-wallet-cards",
  "--disable-popup-blocking",
  "--disable-print-preview",
  "--disable-prompt-on-repost",
  "--disable-renderer-backgrounding",
  "--disable-setuid-sandbox",
  "--disable-speech-api",
  "--disable-sync",
  "--hide-scrollbars",
  "--ignore-gpu-blacklist",
  "--metrics-recording-only",
  "--mute-audio",
  "--no-default-browser-check",
  "--no-first-run",
  "--no-pings",
  "--no-sandbox",
  "--no-zygote",
  "--password-store=basic",
  "--use-gl=swiftshader",
  "--use-mock-keychain",
];
async function autoScroll( page ){
  await page.evaluate( async() => {
    await new Promise( ( resolve, reject ) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval( () => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy( 0, distance );
        totalHeight += distance;

        if ( totalHeight >= scrollHeight ){
          clearInterval( timer );
          resolve();
        }
      }, 100 );
    } );
  } );
}
function logURL( url, status ){
  fs.writeFileSync( `${status}.txt`, url );
  allSearchedURLs.push( url );
}
/**
 *
 */
// async function start(){
//   browser = await puppeteer.launch( { headless: false, ignoreHTTPSErrors: false, userDataDir: "./tmp", args: [ "--no-sandbox", "--disable-web-security", "--disable-features=IsolateOrigins,site-per-process" ] } );
//   page = ( await browser.pages() )[ 0 ];


( async() => {
  const cluster = await Cluster.launch( {
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    puppeteer,
    maxConcurrency: 3,
    puppeteerOptions:{ headless:false, args:minimal_args }
  } );  
  async function convert( { page, data } ) {
    await page.setRequestInterception( true );
    page.on( "request", request => {
      if ( [ "image", "stylesheet" ].includes( request.resourceType() ) ) request.abort();
      else request.continue();
    } );
    const { url } = data;
    await page.goto( url, { waitUntil: "networkidle0" } );

    // await Promise.any( page.waitForTimeout( 10000 ), page.waitForSelector( "input" ) );
    await autoScroll( page );
    // locate the newsletter prompt
    var inp = await page.evaluate( () => {
      return Array.from( document.querySelectorAll( "input" ) ).map( ( e, i ) => {
        if ( e.placeholder.toLowerCase().includes( "email" ) || e.type == "email" )
          return e.outerHTML;
        else 
          return "nay";
      } ).filter( e => e !== "nay" );
    } );
    // process the newsletter
    if ( inp.length == 0 ) logURL( url, NO_NEWSLETTER_FILE );
    else logURL( url, YES_NEWSLETTER_FILE );
    
    console.log( url, inp );
  }

  async function searchGoogle( { page, data } ) {
    await page.setRequestInterception( true );
    page.on( "request", request => {
      if ( [ "image", "stylesheet" ].includes( request.resourceType() ) ) request.abort();
      else request.continue();
    } );
    const { searchTerm, offset } = data;
    await page.goto(
      `https://www.google.com/search?q=${searchTerm}&start=${offset * 10}`,
      { waitUntil: "domcontentloaded" }
    );

    // Extract the links and titles of the search result page
    ( await page.evaluate( () => {
      return [ ...document.querySelectorAll( ".g > div > div > div > a" ) ]
        .map( el => ( { url: el.href, name: el.innerText } ) );
    } ) ).forEach( ( { url, name }, i ) => {
      // Put them into the cluster queue with the task "extractTitle"
      // console.log( `  Adding ${ name } to queue` );
      cluster.queue( {
        url      }, convert );
    } );
  }
  async function searchPublicWWW( { page, data } ) {
    await page.setRequestInterception( true );
    page.on( "request", request => {
      if ( [ "image", "stylesheet" ].includes( request.resourceType() ) ) request.abort();
      else request.continue();
    } );
    const { searchTerm, offset } = data;
    await page.goto(
      `https://publicwww.com/websites/${encodeURIComponent( searchTerm )}/${offset + 1}`,
      { waitUntil: "domcontentloaded" }
    );

    // Extract the links and titles of the search result page
    ( await page.evaluate( () => {
      return [ ...document.querySelectorAll( "td > a" ) ]
        .map( el => ( { url: el.href, name: el.innerText } ) );
    } ) ).forEach( ( { url, name }, i ) => {
      cluster.queue( {
        url      }, convert );
    } );
  }


  async function findNewsletters( { page, data } ) {
    const { searchTerm, offset, website } = data;
    await page.goto(
      "https://www.google.com/search?q=" + searchTerm + "&start=" + offset,
      { waitUntil: "domcontentloaded" }
    );

    console.log( "Extracting Google results for offset=" + offset );

    // Extract the links and titles of the search result page
    ( await page.evaluate( () => {
      return [ ...document.querySelectorAll( "#ires .g .rc > .r a" ) ]
        .map( el => ( { url: el.href, name: el.innerText } ) );
    } ) ).forEach( ( { url, name }, i ) => {
      // Put them into the cluster queue with the task "extractTitle"
      console.log( `  Adding ${ name } to queue` );
      cluster.queue( {
        url,
        position: ( offset + i + 1 )
      }, convert );
    } );
  }

  cluster.queue( { searchTerm: "\"Sign Up\" AND \"Newsletter\"", offset: 0 }, searchGoogle );
  cluster.queue( { searchTerm: "\"Sign Up\" AND \"Newsletter\"", offset: 1 }, searchGoogle );
  // cluster.queue( { url:"https://www.scientificamerican.com/page/newsletter-sign-up/" }, convert );

  // cluster.queue( { searchTerm: "puppeteer-cluster", offset: 0 }, search );
  // cluster.queue( { searchTerm: "puppeteer-cluster", offset: 1 }, search );

  await cluster.idle();
  await cluster.close();
  debugger;
} )();