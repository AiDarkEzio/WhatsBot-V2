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
const lang = ezio.getString("github");
var gis = require("g-i-s");

ezio.addCommand(
  {
    pattern: ["img"],
    usage: '<text>',
    sucReact: "🖼",
    category: ["search", "all"],
  },
  async (message, client) => {
    const text = message.client.text;
    if (!text) {
      global.catchError = true;
      return await client.sendMessage( message.from, { text: ezio.errorMessage('Enter Text') }, { quoted: message } );
    }

    gis(text, async (error, results) => {
        if (error) {
          global.catchError = true;
          return await client.sendErrorMessage( message.from, error, message.key, message );
        } else {
          for (var i = 0; i < (results.length < 8 ? results.length : 8); i++) {
            console.log(results[i].url);
            await client.sendMessage( message.from, { image: { url: results[i].url }, caption: ezio.config.exif.cap,}, { quoted: message, });
            global.catchError = false;
        }
        }
      }).catch(async (err) => {
        (global.catchError = true),
          await client.sendErrorMessage( message.from, err, message.key, message );
      });
  }
);