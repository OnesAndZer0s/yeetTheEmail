/* eslint-disable no-debugger */
/* eslint-disable jsdoc/require-jsdoc */
const NO_NEWSLETTER_FILE = "nay",
      YES_NEWSLETTER_FILE = "yay",
      IDK_NEWSLETTER_FILE = "way";

import { Cluster } from "puppeteer-cluster";
import fs from "fs";
import puppeteer from "puppeteer-extra";
// import StealthPlugin from "puppeteer-extra-plugin-stealth";
// puppeteer.use( StealthPlugin() );

var allSearchedURLs = [
  ...( [ NO_NEWSLETTER_FILE, YES_NEWSLETTER_FILE, IDK_NEWSLETTER_FILE ].map( ele => { 
    return fs.readFileSync( `${ele}.txt`, {
      flag: "a+",
      encoding: "utf8" 
    } ).split( "\n" ); } ) ).flat() 
];

console.log( allSearchedURLs );
const minimal_args = [ "--autoplay-policy=user-gesture-required", "--disable-background-networking", "--disable-background-timer-throttling", "--disable-backgrounding-occluded-windows", "--disable-breakpad", "--disable-client-side-phishing-detection", "--disable-component-update", "--disable-default-apps", "--disable-dev-shm-usage", "--disable-domain-reliability", "--disable-extensions", "--disable-features=AudioServiceOutOfProcess", "--disable-hang-monitor", "--disable-ipc-flooding-protection", "--disable-notifications", "--disable-offer-store-unmasked-wallet-cards", "--disable-popup-blocking", "--disable-print-preview", "--disable-prompt-on-repost", "--disable-renderer-backgrounding", "--disable-setuid-sandbox", "--disable-speech-api", "--disable-sync", "--hide-scrollbars", "--ignore-gpu-blacklist", "--metrics-recording-only", "--mute-audio", "--no-default-browser-check", "--no-first-run", "--no-pings", "--no-sandbox", "--no-zygote", "--password-store=basic", "--use-gl=swiftshader", "--use-mock-keychain", ];

async function autoScroll( page ) {
  await page.evaluate( async() => {
    await new Promise( ( resolve, reject ) => {
      var totalHeight = 0,
          distance = 500,
          timer = setInterval( () => {
            var scrollHeight = document.body.scrollHeight;

            window.scrollBy( 0, distance );
            totalHeight += distance;
            if ( totalHeight >= scrollHeight ) {
              clearInterval( timer );
              resolve();
            } }, 100 );
    } );
  } );
}

function logURL( url, status ) {
  if ( fs.readFileSync( `${status}.txt` ).includes( url ) ) return;
  fs.appendFileSync( `${status}.txt`, `${url}\n` );
  allSearchedURLs.push( url );
}

( async() => {
  const cluster = await Cluster.launch( {
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    puppeteer,
    maxConcurrency: 3,
    puppeteerOptions: {
      headless: false,
      args: minimal_args 
    }
  } );

  async function convert( { page, data } ) {
    try {
      // await page.setRequestInterception( true );
      // page.on( "request", request => {
      // if ( [ "image", "stylesheet" ].includes( request.resourceType() ) ) request.abort();
      // else request.continue();
      // } );
      var { url } = data;

      await page.goto( url, { waitUntil: "networkidle0" } );
      await autoScroll( page );

      // synthesize page data to find possible email newsletter links or email inputs
      var returnObject = await page.evaluate( () => {
        return {
        
          links: ( Array.from( document.querySelectorAll( "a" ) ).filter( ele => {
            return ele.href.toLowerCase().includes( "email" );
          } ) ),

          emailInputFields: [ ...new Set( ( Array.from( document.querySelectorAll( "input" ) ).flatMap( e => {
            if ( e.placeholder.toLowerCase().includes( "email" ) || e.type == "email" )
              return e.outerHTML;
            return [];
          } ) ) ) ]

        };
      } );

      // process the newsletter
      if ( returnObject.emailInputFields.length == 0 ) logURL( url, NO_NEWSLETTER_FILE );
      else {
        console.log( url, returnObject.emailInputFields );
        returnObject.forEach( emailInputFields => {

        
        } );


        logURL( url, YES_NEWSLETTER_FILE );
      }
      returnObject.links.forEach( url => {
        cluster.queue( { url }, convert );
      } );


    } catch ( e ){ console.log( e ); }  }

  async function searchGoogle( { page, data } ) {
    await page.setRequestInterception( true );
    page.on( "request", request => {
      if ( [ "image", "stylesheet" ].includes( request.resourceType() ) ) request.abort();
      else request.continue();
    } );
    const { searchTerm, offset } = data;

    await page.goto( `https://www.google.com/search?q=${searchTerm}&start=${offset * 10}`, { waitUntil: "domcontentloaded" } );

    // Extract links
    ( await page.evaluate( () => {
      return [ ...document.querySelectorAll( ".g > div > div > div > a" ) ]
        .map( el => el.href );
    } ) ).filter( e => {
      return !allSearchedURLs.includes( e );
    } ).forEach( url => {
      cluster.queue( { url }, convert );
    } );
  }
  async function searchPublicWWW( { page, data } ) {
    await page.setRequestInterception( true );
    page.on( "request", request => {
      if ( [ "image", "stylesheet" ].includes( request.resourceType() ) ) request.abort();
      else request.continue();
    } );
    const {
      searchTerm,
      offset 
    } = data;

    await page.goto( `https://publicwww.com/websites/${encodeURIComponent( searchTerm )}/${offset + 1}`, { waitUntil: "domcontentloaded" } );

    // Extract links
    ( await page.evaluate( () => {
      return [ ...document.querySelectorAll( "td > a" ) ]
        .map( el => el.href );
    } ) ).filter( e => {
      return !allSearchedURLs.includes( e );
    } ).forEach( url => {
      cluster.queue( { url }, convert );
    } );
  }


  async function findNewsletters( { page, data } ) {
    const { searchTerm, offset, website } = data;

    await page.goto( "https://www.google.com/search?q=" + searchTerm + "&start=" + offset, { waitUntil: "domcontentloaded" } );
    console.log( "Extracting Google results for offset=" + offset );

    // Extract the links and titles of the search result page
    ( await page.evaluate( () => {
      return [ ...document.querySelectorAll( "#ires .g .rc > .r a" ) ].map( el => ( {
        url: el.href,
        name: el.innerText 
      } ) );
    } ) ).forEach( ( {
      url,
      name 
    }, i ) => {
      // Put them into the cluster queue with the task "extractTitle"
      console.log( `  Adding ${ name } to queue` );
      cluster.queue( {
        url,
        position: ( offset + i + 1 ) 
      }, convert );
    } );
  }

  function customQueue( data, offsetLength = 1, functionDef ) {
    for ( var i = 0; i < offsetLength; i++ )
      cluster.queue( {
        ...data,
        offset: i 
      }, functionDef );
  }


  // if add "-" is is like NOT operator
  // page contains input with type email





  // flow
  // find <form> or <input[type=email]>
  // if <input[type=email]> is in form, then just find the submit part
  // newsletter - mailing list - 

  // customQueue( { searchTerm: "\"Sign Up\" AND \"Newsletter\"" }, 1, searchGoogle );
  cluster.queue( { url:"https://www.thumbpunks.com/" }, convert );

  // cluster.queue( { searchTerm: "puppeteer-cluster", offset: 0 }, search );
  // cluster.queue( { searchTerm: "puppeteer-cluster", offset: 1 }, search );

  await cluster.idle();
  await cluster.close();
  debugger;
} )();