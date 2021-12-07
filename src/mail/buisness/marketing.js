import fetch from "node-fetch";

export default ( async email => {
  var response = await fetch( "https://marketing.wordstream.com/index.php/leadCapture/save2", {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "myref_1=https%3A%2F%2Fwww.google.com%2F; mycmp=none; mysrc=none; tstamp=1638840245006; navp=%20%3E%20; BIGipServersjiweb-nginx-app_https=!APJPqs3objHMW5+PurFYsUVmfdh2KMM4iH5PBI5z1xmPnxAjWX5Ezw+CZwrtoiKvW+3IF5Ue1S4XAIQ=; __cf_bm=DGltxXAn7p4LcQ4hvtkzzl_uXU2m5qdh.HoJrcl1I.s-1638840243-0-ATpez5PAy1crKZ9OYFP5El1pZ54Z9hj7jcStPziak5DnN6HCrc8rGIkdxm+EKV2yRyDM65J3q+fusUYXcfl0Gfo=",
      "Referer": "https://marketing.wordstream.com/WSNewsletterWebPPCNewsletter.html?cid=Web_Any_BlogSidebar_PPC_Newsletter_Newsletter",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "Email=jhfxzxdfghjk2%40gmail.com&Lead_Type__c=WS%20Newsletter%20Subscription&SFDCCampaignID=Web_Any_BlogSidebar_PPC_Newsletter_Newsletter&SFDCCampaignStatus=Responded&formid=14970&lpId=74939&subId=30&munchkinId=622-BHC-517&lpurl=%2F%2Fmarketing.wordstream.com%2FWSNewsletterWebPPCNewsletter.html%3Fcr%3D%7Bcreative%7D%26kw%3D%7Bkeyword%7D&cr=&kw=&q=&reCaptchaResponse=03AGdBq243HtidFii3Lk0M0Hd2u3EP5Kxi0kskkMhIj92gCbz6oVbtjQGGPuTmKQTQhF_2dYS2xhvyHyHHRPlrJ70MhMIB_ot4NWCA1XEnq0pXmjNQKsdOGZFpcEaNCzu4bYT6NajyzY46B28a0jcQHXC11u2jEjmjwKKv0JBU86_x9u-X-CCx66kxzhrNK5A3AwAmo8-qaiCE1u67gCYaoUVBajQJkf0m4PBZ_2hBGA5F6YOlUmzdg0_PyWF3ZMJF0l1VUoU0G83umgK95QXKIFw1yd4Tcq18LXAe79WG6YOMF0qpHGfbWgOC4Dzw5FEtftZ-H0lPCZhRGo3_X48Og_wE_JGsZmXK49mX7hpLLS8dFYCqiMIBSx_9Yd2BOdxmjeneZNcObuHQXcUpIfV-o7b70kuFXKis7NilQTuwvEhiX2KqSZMF_Bt0tjrXRfW4M971hj05sjYm45S1TE5dwIZ-ctcoYUsRjdf01CvV0WT-CelVX6bFb1JELV4aE06p9oA9cxkrlxYzLI6Ml5-Q_jBDvC2SyQz0lQ&_mkt_trk=&formVid=14970&_mktoReferrer=https%3A%2F%2Fmarketing.wordstream.com%2FWSNewsletterWebPPCNewsletter.html%3Fcid%3DWeb_Any_BlogSidebar_PPC_Newsletter_Newsletter&checksumFields=Email%2CLead_Type__c%2CSFDCCampaignID%2CSFDCCampaignStatus%2Cformid%2ClpId%2CsubId%2CmunchkinId%2Clpurl%2Ccr%2Ckw%2Cq%2CreCaptchaResponse%2C_mkt_trk%2CformVid%2C_mktoReferrer&checksum=fad19cc6adf45b8d1cd9bfce246707fbfaa79c5256edf712c2bf6ff89231f7be",
    "method": "POST"
  } );
  const body = await response.json();
  return ( ( body.status == "200" ) ? true : body );
} );