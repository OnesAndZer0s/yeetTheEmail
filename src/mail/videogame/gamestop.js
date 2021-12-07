import fetch from "node-fetch";

export default ( async email => {
  var response = await fetch( "https://fe3c15707564057a771775.pub.s10.sfmc-content.com/4hfc4qw1ipo", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    "referrer": "https://newsletter.gamestop.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `submitted=submitted&email=${encodeURIComponent( email )}`,
    "method": "POST",
    "mode": "cors"
  } );
  return ( ( response.status == "200" ) ? true : response );
} );