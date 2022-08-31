/* ═══════════════════════════════════════════════════════ //
=> If you want to recode, reupload,
=> or copy the codes/script,
=> pls give credit,
=> no credit? i will take action immediately.
==> Copyright (C) 2022 Dark_Ezio.
==> Licensed under the  MIT License;
===> you may not use this file except in compliance with the License.
=> Thank you to Lord Buddha, Family and Myself.
=> Whats Bot - Dark_Ezio.
// ════════════════════════════ */

// const { getBuffer } = require("./Function");
const ezio = require("../events");
const got = require("got");
const tts = require("google-tts-api");

async function TTS(text, lang = "en") {
  let result = new String();
  if (text.length <= 200) {
    result = tts.getAudioUrl(text, { lang, slow: false });
  } else result = new Error("Text is to long. can not convert your text");
  return result;
}

// const thumbs = async (text, isbuffer = false) => {
//   let flaming = "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
//   let flarun = "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
//   let fluming = "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
//   let flasmurf = "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=";
//   let picaks = [flaming, fluming, flarun, flasmurf];
//   let picak = picaks[Math.floor(Math.random() * picaks.length)];
//   let url = picak + text;
//   return isbuffer == true ? await getBuffer(url) : url;
// };

async function chatBot (text = "hey", lang = "en") {
  const encdtext = encodeURI(text);
  const response = await got(`https://api.simsimi.net/v2/?text=${encdtext}&lc=${lang}`);
  const json = JSON.parse(response.body);
  return { msg: json.success, lang: json.location, json: json };
};

async function chatting (message, client) {
  try {
    if (message.fromMe) return;
    let text = await (await chatBot(message.client.displayText)).msg;
    if ((message.isGroup) && (typeof ezio.config.auto.chat.inbox == 'boolean') && ezio.config.auto.chat.inbox == true) {
      await client.sendMessage(message.from, { text }, { quoted: message });
    } else if ((message.isGroup) && (typeof ezio.config.auto.chat.group == 'boolean') && ezio.config.auto.chat.group == true) {
      await client.sendMessage(message.from, { text }, { quoted: message });
    }
  } catch (error) {
    return await client.sendErrorMessage( message.from,"From auto chat - " + error, message.key, message );
  }
}


module.exports = { TTS, chatBot, chatting };
