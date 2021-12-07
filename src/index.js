/* eslint-disable no-debugger */
var email = "muineu@mailpoof.com";
// https://mailpoof.com/mailbox/muineu@mailpoof.com
// https://www.reddit.com/r/IllegalLifeProTips/comments/m7roq9/ilpt_want_to_annoy_someone_sign_them_up_for_these/
// https://www.adam4adam.com/


// import puppeteer from "puppeteer-extra";
// import StealthPlugin from "puppeteer-extra-plugin-stealth";
// import AdblockerPlugin from "puppeteer-extra-plugin-adblocker";
// puppeteer.use( StealthPlugin() );
// puppeteer.use( AdblockerPlugin() );
// import { Cluster } from "puppeteer-cluster";



// // puppeteer usage as normal
// puppeteer.launch( { headless: true } ).then( async browser => {
//   console.log( "Running tests.." );
//   const page = await browser.newPage();
//   await page.goto( "https://bot.sannysoft.com" );
//   await page.waitForTimeout( 5000 );
//   await page.screenshot( { path: "testresult.png", fullPage: true } );
//   await browser.close();
//   console.log( "All done, check the screenshot. ✨" );
// } );

// ( async() => {
//   const cluster = await Cluster.launch( {
//     concurrency: Cluster.CONCURRENCY_CONTEXT,
//     puppeteer,
//     maxConcurrency: 2,
//     puppeteerOptions: {
//       headless: false,
//     },
//   } );    
//   await cluster.task( async( { page, data: url } ) => {
//     await page.goto( url );
//     const screen = await page.screenshot();
//     // Store screenshot, do something else
//   } );

//   cluster.queue( "http://www.google.com/" );
//   cluster.queue( "http://www.wikipedia.org/" );
//   // many more pages

//   await cluster.idle();
//   await cluster.close();
// } )();

/**
 *
 */
async function run(){
  console.log( await ( ( await import( `./mail/${debugArray[ 0 ]}.js` ) ).default )( email ) );
  debugger;
}

// https://github.com/thomasdondorf/puppeteer-cluster
// https://github.com/thomasdondorf/puppeteer-cluster/issues/228
var debugArray = [ "religion/scientology" ];
run();