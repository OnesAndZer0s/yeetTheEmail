import fetch from "node-fetch";

export default ( async email => {
  var response = await fetch( "https://www.kohls.com/myaccount/sale_alert_signup", {
    "headers": {
      "authority":"www.kohls.com",
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
      "x-sec-clge-req-type": "ajax",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "origin": "https://www.kohls.com",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "referer": "https://www.kohls.com/homepage/sale_alert_signup.jsp",
      "cookie": "akacd_www-kohls-com-mosaic-p2=2177452799~rv=8~id=95dee8eaa9556681b14859791989a459; _dyid_server=Dynamic Yield; store_location=55101; AKA_RV2=35; AKA_CNC2=True; K_favstore=55125|55|WOODBURY-MN|geo|sephora; X-SESSIONID=c21efd82-8420-42d3-b889-e97c08c25857; bm_sz=1F53DDD0AEAE77A5252579944B39D4A8~YAAQTaRGaIKqUSx9AQAAlQUhMw2l6aKR83UIBRl9yXXi/AG2w3GRMByMyBjrIXb7m/tuisrf8qZEqaytR3CuUbF+ZrV+d5WNzHlnxJMsxM/3LsCsjqb11dTspOSTz6DE5SK4WbKKSADQC3wjFzV2tM6gTfGvb8kzcgyLcQxs6ajjecSJ0w/qXW/uZMM/WGY9W95HuZJyernF7URQo4v1Zc3HPmBXinKHRUwGd1uZSwzjkJCLppumKfF/R9lC4prZno1wtS1FuRCW2Na+6f1RrbbAkurFQ50bkw+go5d2ZIwS098/q6AqIKwUZxFddLK4u/Khhknv/kdGTJZmHYp8rSZpcc28NDFY1xkhwUevzUxZMOaWDjwEHLHsiBnoU+XtSeGX7d1dmHnOHLgZ2vMKd5c=~4539449~4469569; ak_bmsc=F63E13141125516038D8AE764800686D~000000000000000000000000000000~YAAQTaRGaIGqUSx9AQAAlQUhMw282+hfbFQtW2nRgzj/L0GLVF9jKSk1BCDzZGC/1FQY/Ompbv/8zpPHGuOER6Xe7ZFcVY8TYVEG6jhU9sV8wjgp/UW0PIjfpBwiRs7W8LPW9nF3Ie1WVrqvahILx4Alva7+VwOMolHUiMDM98mLPBF7uGLVsuZsPq7ASIM45Fk2Y9uhOUeMrMgfzGui/hTGjxFgADG/avMWgI54EFW+9TF9cMJQjUDabQddTgBDHmdH7ysMUhtRdfPVifkwKDZEtGju2H8ug3OR5n2iOovc9zDDhzTaSiUzshol8lfCqj2Y9OI08UUBD+xYuwJE+BIif9LN/kprJMeOOHyYCQPi4mOA0FKvyufWg36uNHRudvj2KH1ObPTO8A==; VisitorId=c21efd82-8420-42d3-b889-e97c08c25857; check=true; mbox=session#c7ad8a89578f4e67ab43b35bd41395a0#1637242204; mosaic=gcpg; AMCVS_F0EF5E09512D2CD20A490D4D%40AdobeOrg=1; s_cc=true; s_stv=non-search; saleemail=test%40tet.com; bm_mi=C7D2D8A792DDCA0F1CB6989EEF11A93C~91jIKhbRv6x4fh+8pkY67YCKz0t1HX2ygV+ckab0LybxwLXMBB0MXEsRVPXkOO5TJEC8aX1MFJkI5GwVgRvhD29wpa2yv9hs2yO6q8Cu8zLmke72Le48kLsT7X2JeI62Z6VUByBoGqgKkyTmt/aT/ty3oZ4TKZbNHAM8hCcS6nP/0hZofxt9DIpltAEerCvYjPJdaudnSpgQZx/OrKr7N7rTo8XrVKCwA1N16UMk/oaEsUJt5Z7OahRJPEvh5VDLmIve+oXiJpZPwsQPQCKxpw==; bm_sv=D67560705BF14B68890C7E81538BD393~NV8t+OFbGqIHdQRjCU9nSFRYKOU3kYDwT50lJX0GJelxT/Dgf21wzkkWax2ArgRj3315eKG4OlLCmwBW1HRAah7EYJwsr6HRvY0+u/yxE8d6XaFwv1206tWoGn1RY3+NlCqClBLFGMfBghuzaX/qWY4SiszNXlAaelepeO5Zoho=; akavpau_www=1637240675~id=4b731b76e51dbe78fa4492a63c82c1b8; correlation-id=:WEB::618971d0-486f-11ec-b794-4bede142c333::1637240375669::us-central1-f::cprodn-green-accservice-prod-tzsz::69.147.192.133::ACC::session::22.0.2-20211029.225034-1161::null::ANONYMOUS::null::null::c21efd82-8420-42d3-b889-e97c08c25857::null; productnum=10; gpv_v9=sale_alert_signup; AMCV_F0EF5E09512D2CD20A490D4D%40AdobeOrg=-1712354808%7CMCIDTS%7C18950%7CMCMID%7C50483557781410769356081057544457994320%7CMCAID%7CNONE%7CMCOPTOUT-1637247577s%7CNONE%7CvVersion%7C4.3.0; CavSF=cavnvComplete,,1:0:0,,0|,,,,,,,,,,,,,; CavNVC=-0--1-2; _abck=23D6756E882D309C502BD523F7A29EBF~-1~YAAQPqRGaF0ozy19AQAALggiMwYVaMJyo9T3fwB3nFGL7CVfCWQLxjf7lD1FkdpV7BEScTDf1/opyOk6ZwW2LDuEwQDbKLLM7Yrv4itRNdjcWIEO3FEFuC9h6Bair4hDUfy4svUk8xJHPwmLUjv0Deft39CfpfvzibhhIJ6AcVtglzs7DDTav9JcZZY5w6ZK1qbMCWaLFXtOd4Ildp8kfQQ3GYjuFiGW13PGhRCMBcNQjDs1eTFFxHZWjLC3g+WFEgax+AwtrOm1Vn8Y2V91xuBBPySoZ/9Cr9HFgs9JmuV8K5ku5jM2pBPzk3CPpNHg9w3TPQtnTrJxXr319tCFixMG8x+UDOeC6dHXhb3azfeQF+Lc7c/HL3tnXu2ltssZ79gBs06JGd86a63ujHh4wcWTvn/KDTSildHdUgvNlD0dSh7P6PRRxZpXSddGy3b+AA1YGBFMbL+7j6yvMilh3HpQrjkama7vSLhqsums2NBtNdDgADl4A4fr0/MG~-1~-1~1637244001; s_sq=kohlscomprod%3D%2526pid%253Dsale_alert_signup%2526pidt%253D1%2526oid%253D%25250A%252520%252520%252520%252520%252520%252520%252520%252520%252520%252520%252520%252520%2526oidt%253D3%2526ot%253DSUBMIT"
    },
    // "referrer": "https://www.kohls.com/homepage/sale_alert_signup.jsp",
    // "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `enterEmail=${encodeURIComponent( email )}&emailConfirm=${encodeURIComponent( email )}`,
    "method": "POST",
  // "mode": "cors"
  } );
  const body = await response.json();
  return ( ( body.status == "200" ) ? true : body );
} );