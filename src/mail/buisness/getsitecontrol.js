import fetch from "node-fetch";

export default ( async email => {
  var response = await fetch( "https://pop1.getsitecontrol.com/api/v1/events?ts=1638839762666&sid=5f649d2105158cdd&t=1638839649.f4bb465c398034a87801398bcfa6ce29.c479f8008fc1c1c6f3c6ec9b18fd7b51&s=167c97f66e4635070139f4bf70dca391", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "text/plain;charset=UTF-8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "no-cors",
      "sec-fetch-site": "same-site",
      "cookie": "_ga=GA1.2.1062846841.1638839653; _gid=GA1.2.142417364.1638839653; _gat_UA-47578717-1=1",
      "Referer": "https://getsitecontrol.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"userId\":\"5f649d21053c046c\",\"sessionId\":\"5f649d2105158cdd\",\"siteId\":\"od4e6wk5\",\"date\":1638839767072,\"visit\":{\"utm\":{\"medium\":\"search\",\"source\":\"Google\",\"method\":\"referrer\"},\"source\":\"https://www.google.com/\",\"referrer\":\"https://www.google.com/\",\"pageNumber\":2,\"sessionNumber\":1,\"location\":\"https://getsitecontrol.com/blog/7-great-email-newsletter-signup-examples/\",\"language\":\"en\",\"displayWidth\":1920,\"displayHeight\":1080,\"external\":{}},\"context\":{},\"placement\":\"website\",\"events\":[{\"data\":{\"text\":\"eee\",\"email\":\"ee@ee\"},\"type\":\"submit\",\"widgetId\":40424}]}",
    "method": "POST"
  } );
  const body = await response.json();
  return ( ( body.status == "200" ) ? true : body );
} );