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

const ezio = require("../events");
const lang = ezio.getString("ttp");
const axios = require("axios");

ezio.addCommand( { pattern: ["ttp"], sucReact: "🖼", category: ["all", "create"], },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, lang.NEED_WORD, message.key, message ); }
    var uri = encodeURI(message.client.text);
    try {
      var resImage = await axios.get( "https://api.xteam.xyz/ttp?file&text=" + uri, { responseType: "arraybuffer" } );
    } catch (error) {
      global.catchError = true; 
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
    await client.sendMessage( message.from, { image: Buffer.from(resImage.data), caption: ezio.config.exif.cap }, { quoted: message } );
    global.catchError = false;
  }
);

ezio.addCommand( { pattern: ["attp"], desc: lang.ATTP_DESC, sucReact: "☯", category: ["all", "create"], },
  async (message, client) => {
    if (!message.client.text) {global.catchError = true; return await client.sendErrorMessage(message.from,lang.NEED_WORD,message.key,message);}
    var uri = encodeURI(message.client.text);
    try {
      var resSticker = await axios.get( "https://api.xteam.xyz/attp?file&text=" + uri, { responseType: "arraybuffer" } );
    } catch (error) { 
        global.catchError = true; 
        return await client.sendErrorMessage( message.from, error, message.key, message );
    }
    client.sendMessage( message.from, { sticker: Buffer.from(resSticker.data) }, { quoted: message } );
    global.catchError = false;
  }
);
