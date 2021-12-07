import fetch from "node-fetch";

export default ( async email => {
  var response = await fetch( "https://www.scientology.org/form/subscribe.action", {
    "headers": {
      "accept": "text/html, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
      "sec-ch-ua-mobile": "?0",
      // "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "cid=3d5f5213836ea068b9f34ae1; fp=4150590974b82e69ac925370565dd104; geolocated=%7B%22status%22%3A%22success%22%2C%22estimated_location%22%3A%7B%22country_code%22%3A%22US%22%2C%22region_code%22%3A%22WI%22%2C%22city%22%3A%22%22%2C%22postal_code%22%3A%22%22%2C%22latitude%22%3A44.9863%2C%22longitude%22%3A-92.7278%2C%22area_code%22%3A0%7D%2C%22items%22%3A%7B%22id%22%3A%22tcd%22%2C%22mail%22%3A%22twincities%40scientology.net%22%2C%22type%22%3A%22clvorg%22%2C%22csiorgstatus%22%3A%22ideal%22%2C%22csiorgimage%22%3A%22%2Fimagecache%2Fcropfit%40w%3D300%40cr%3D9%2C0%2C2991%2C1994%40qa%3D85%2Fdata%2Fwww.scientology.org%2Ffiles%2Ftwin-cities%2FChurch-of-Scientology-Twin-Cities-Minnesota-Exterior-Dusk_1SY0935.jpg%22%2C%22full_name%22%3A%22Church%20of%20Scientology%20of%20Twin%20Cities%22%2C%22description%22%3A%22Twin%20Cities%22%2C%22address1%22%3A%22505%20Wabasha%20Street%20North%22%2C%22city%22%3A%22Saint%20Paul%22%2C%22state_province%22%3A%22MN%22%2C%22postal_code%22%3A%2255102%22%2C%22country_code%22%3A%22US%22%2C%22locale%22%3A%22en_US%22%2C%22cont%22%3A%22wus%22%2C%22latitude%22%3A44.9492%2C%22longitude%22%3A-93.0978%2C%22default_zoom%22%3A%22%22%2C%22phone%22%3A%22(651)%20298-8888%22%2C%22website%22%3A%22http%3A%2F%2Fwww.scientology-twincities.org%2F%22%2C%22dianeticsseminarprice%22%3A%22%22%2C%22peprice%22%3A%22%22%2C%22website_status%22%3A%22legacy%22%2C%22currency%22%3A%22USD%22%2C%22display_data%22%3A%22%22%2C%22csidayo%22%3A%22%22%2C%22csifdno%22%3A%22tcf%22%2C%22dianetics_seminar%22%3A%22%22%2C%22csistorename%22%3A%22%22%2C%22seo_code%22%3A%22twin-cities%22%2C%22celebritycentre%22%3A%220%22%2C%22parento%22%3A%22%22%2C%22location_desc_override%22%3A%22%22%2C%22objectclass%22%3A%22top%22%2C%22determined%22%3A%22ByDefaultRules%22%2C%22context_url%22%3A%22%22%7D%7D; personId=undefined; email=cidjup@mailpoof.com; formres={%22captcha%22:%22V@3fsasdfasdfAAdgf9J*%22%2C%22reach%22:%22true%22%2C%22locale%22:%22en%22%2C%22email%22:%22cidjup@mailpoof.com%22%2C%22g-recaptcha-response%22:%2203AGdBq24qUiKpCpybV3CrwRXqtvy1U0Al3auQ1xLmMr9CBkmkTSEe0eWu0MZpffIrXgF2kLbbtK0ngvFWGojYi8woNQRlFwrKOklvueRmRHPSruZmETeoKfcQMyFgBBVqzlyIojRjhehtVfYRASGzyCLZLZ2lwY4Ov_V9xGpG-n_DN89vWbvXPhIgq1oBIpjQt4hy1n8FA7xiIiwMiUPML2TNX9Kz_5FrAHy8s34Frqi4rn3mrO_4RELPeBStV-oTr1d2WupTVRXjqQtg-dSDm855olGt1pQuYKfWLlCY2Z2abOxo8m2-99d8dXOqIqcAWidVLhFI7a2uE5eKuEku_7lZoibpNnPPMyFKin-9JuovAvi6RxZcxkc6J89FXv8PX5nKItECRJ7EDLry6feWiDvOGVur_svevtJKrKQA9LccEhJEFQ5iRK5gTrgZRQmUdk0oQR64JE7o5lwMBX7Y4nPE4ruUg7m0XMhanfcECCREWygLxFqJ2H8%22}",
      "Referer": "https://www.scientology.org/subscribe/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": `captcha=V%403fsasdfasdfAAdgf9J*&reach=true&locale=en&email=${encodeURIComponent( email )}&g-recaptcha-response=03AGdBq24qUiKpCpybV3CrwRXqtvy1U0Al3auQ1xLmMr9CBkmkTSEe0eWu0MZpffIrXgF2kLbbtK0ngvFWGojYi8woNQRlFwrKOklvueRmRHPSruZmETeoKfcQMyFgBBVqzlyIojRjhehtVfYRASGzyCLZLZ2lwY4Ov_V9xGpG-n_DN89vWbvXPhIgq1oBIpjQt4hy1n8FA7xiIiwMiUPML2TNX9Kz_5FrAHy8s34Frqi4rn3mrO_4RELPeBStV-oTr1d2WupTVRXjqQtg-dSDm855olGt1pQuYKfWLlCY2Z2abOxo8m2-99d8dXOqIqcAWidVLhFI7a2uE5eKuEku_7lZoibpNnPPMyFKin-9JuovAvi6RxZcxkc6J89FXv8PX5nKItECRJ7EDLry6feWiDvOGVur_svevtJKrKQA9LccEhJEFQ5iRK5gTrgZRQmUdk0oQR64JE7o5lwMBX7Y4nPE4ruUg7m0XMhanfcECCREWygLxFqJ2H8&orgData=%7B%22latitude%22%3A44.9863%2C%22longitude%22%3A-92.7278%2C%22cont_from_org%22%3A%22wus%22%2C%22address_data_from_geolocation%22%3A%7B%22area_code%22%3A0%2C%22city%22%3A%22%22%2C%22country_code%22%3A%22US%22%2C%22postal_code%22%3A%22%22%2C%22region_code%22%3A%22WI%22%7D%2C%22org_id%22%3A%22tcd%22%7D`,
    "method": "POST"
  } );
  const body = await response.text();
  return ( ( body == "SUCCESS" ) ? true : body );
} );