import fetch from "node-fetch";

export default ( async email => {
  var response = await fetch( "https://activation.healthline.com/api/activate/site", {
    "headers": {
      "accept": "application/json",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "cookie": "blab=e4d532f0-30be-4003-a7d8-8c8a192e8aa9; _pubcid=64e27498-5a03-423d-b3c7-b21ac64dd7e7; _adb=a2kwval1q0tnWvqy2Tew; adblrt=n5; tglr_anon_id=894c5137-571f-4e88-b322-8aaa6750b414; tglr_http_only=894c5137-571f-4e88-b322-8aaa6750b414; tglr_hash_id=2e61e2d067e6a82034787f206974032efde0098fa17e24a0c54007f76b7df37f; chsn_cnsnt=tglr_ref%2Ctglr_req%2Ctglr_sess_id%2Ctglr_sess_count%2Ctglr_anon_id%2Ctglr_tenant_id%2Ctglr_virtual_ref%2Ctglr_transit_id%2Cchsn_dcsn_cache%2Cpmpdid%2Cpmpredirected%2Cpmpredir%2Cfuseid%2Ccohsn_xs_id%2Cchsn_auth_id%2ChashID%2CetagID%2CreinforcedID%2ChttpOnlyID%2CfpID%2CflID%2Ctglr_smpl%2Ctglr_reinforce%2Ctglr_gpc_sess_id%2Ctglr_hash_id; tglr_tenant_id=src_1Tqf7BF96WTbG5QbUndHWIgKoFo; pmpdid=167f0ff7-cb5a-47f1-8156-88c043f455f8; tglr_sess_id=1596b25a-40bc-4467-a1ad-3981fa9291bb; tglr_sess_count=2; tglr_req=https://www.healthline.com/newsletter-signup; tglr_ref=https://www.google.com/; tglr_smpl=0; apsessionid=9b255259-0a04-48e9-a55f-f88af089cb11; usprivacy=1YNY",
      "Referer": "https://www.healthline.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"site\":\"hl\",\"email\":\"muineu@mailpoof.com\",\"lists\":[\"Nutrition\",\"Wellness Wire\",\"Women's Wellness\",\"Parenthood Week-by-Week\",\"Men's Health\",\"Parenthood Offers\",\"CAM\",\"Daily News\",\"Coronavirus Alerts\",\"Senior Health\",\"ADHD\",\"Loneliness Challenge\",\"Gut Check Challenge\",\"Sleep Challenge\",\"AFib\",\"Medicare Series - Find the Right Plan\",\"Move Your Body Challenge\",\"Allergies\",\"Anxiety\",\"COPD\",\"Bipolar\",\"Breast Cancer\",\"Fibromyalgia\",\"Endometriosis\",\"Diabetes Type 2\",\"Depression\",\"Heart Health\",\"Multiple Sclerosis\",\"IBD\",\"Osteoarthritis\",\"Menopause\",\"Psoriasis\",\"Migraine\",\"Rheumatoid Arthritis\"],\"recaptcha\":\"03AGdBq26mbFX0AOyS8d6Ai1j1tgqO7Z5GgcNBoVmO0Ovf4I6iKQlp_hGqX7WC85RfUp7U0uHreh-Kbiju-MqpSiWxoAlPxxTtyD_CMnGHbxtzU2gAgyfaQPGKPEJja808FA0s9AEY2TRDH-hXq9DbWmA7DJYUv6ckmw9fxG32FbmYel8vfDv8D63ho8OTK1MNNJv7vnRCyYes2G5Mme5LRQbTJBjdaIsBwL8uaf8pC5DFAeE20iAXVj7Y6o2mTeBH5sOGrdCXMOxIS2M9VTht4gAQ5Dl58uL6cZ2x7xcI4cNqG_ruubGW0NWrScC2djjH1PH1isLZ7MUZ3axr2A2f65SdV_YXsah4cufUyAipjfu0YxwhYHHLWt9Q5njCQ2X7SYRo8PMO0NUUfYI7oO5ITyYuRfhNO7EZxWlfYE_jg86DkU0wqbQ9R6FEl1o1GDP-DbkTyPLOmUAdSkdVXDbOVWdm3EssCaHm_kXI_02UheQ6CnxlWw0wuawVCZu0Pb1OpIRtF9fvLz8VT1Kh5SsI1qQdebIWp6fSMA\",\"path\":\"/homepage\",\"attributes\":{\"due_date\":\"2022-01-02\",\"childs_birth_date\":\"2020-01-14\"},\"identifiers\":{\"K1\":\"otherhealthsystems\",\"source\":\"Newsletter Listing\",\"categories\":\"\",\"tags\":\"\",\"correlationId\":\"1a84fcab-eee3-4667-b96c-ab6df4501ae2\"}}",
    "method": "POST"
  } );
  const body = await response.text();
  return ( ( body == "SUCCESS" ) ? true : body );
} );