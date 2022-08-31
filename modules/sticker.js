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

const { delay } = require("Wa-Web");
const ezio = require("../events");
const { isUrl } = require("../lib/Function");
const lang = ezio.getString("whats_bot");
const fs = require("fs");
const path = require("path");

ezio.addCommand(
  {
    pattern: ["s", "sticker"],
    desc: "It cnvert image to sticker",
    sucReact: "🔁",
    category: ["all", "create"],
  },
  async (message, client) => {
    try {
      // if (!message.quoted) { global.catchError = true; return await client.sendErrorMessage( message.from, 'Reply to Supported media With Caption', message.key, message ); }
      if (/image|video|sticker/.test(message.client.mime)) {
        let download = await message.quoted.download();
        client.sendFile(message.from, download, "", message, {
          asSticker: true,
          author: ezio.config.exif.author,
          packname: ezio.config.exif.packname,
          categories: ["😄", "😊"],
        });
      } else if (/image|video|sticker/.test(message.client.mime)) {
        let download = await message.download();
        client.sendFile(message.from, download, "", message, {
          asSticker: true,
          author: ezio.config.exif.author,
          packname: ezio.config.exif.packname,
          categories: ["😄", "😊"],
        });
      } else if (message.quoted && message.quoted.mentions[0]) {
        let url = await client.profilePictureUrl(
          message.quoted.mentions[0],
          "image"
        );
        client.sendFile(message.from, url, "", message, {
          asSticker: true,
          author: ezio.config.exif.author,
          packname: ezio.config.exif.packname,
          categories: ["😄", "😊"],
        });
      } else if (isUrl(message.client.text)) {
        if (isUrl(message.client.text))
          client.sendFile(
            message.from,
            isUrl(message.client.text)[0],
            "",
            message,
            {
              asSticker: true,
              author: ezio.config.exif.author,
              packname: ezio.config.exif.packname,
              categories: ["😄", "😊"],
            }
          );
        else {
          global.catchError = true;
          return await client.sendErrorMessage(
            message.from,
            "No Url Match",
            message.key,
            message
          );
        }
      } else if (message.client.text) {
        let fetch = await fetchUrl(
          global.api(
            "zenz",
            "/searching/stickersearch",
            { query: message.client.text },
            "apikey"
          )
        );
        for (let url of fetch.result) {
          await delay(1000);
          client.sendFile(message.from, url, "", message, {
            asSticker: true,
            author: ezio.config.exif.author,
            packname: ezio.config.exif.packname,
            categories: ["😄", "😊"],
          });
        }
      } else if (message.quoted && message.quoted.type == "templateMessage") {
        let _message =
          message.quoted.imageMessage || message.quoted.videoMessage;
        let download = await client.downloadMediaMessage(_message);
        client.sendFile(message.from, download, "", message, {
          asSticker: true,
          author: config.exif.author,
          packname: ezio.config.exif.packname,
          categories: ["😄", "😊"],
        });
      } else if (message.quoted && message.quoted.type == "buttonsMessage") {
        let _message =
          message.quoted.imageMessage || message.quoted.videoMessage;
        let download = await client.downloadMediaMessage(_message);
        client.sendFile(message.from, download, "", message, {
          asSticker: true,
          author: ezio.config.exif.author,
          packname: ezio.config.exif.packname,
          categories: ["😄", "😊"],
        });
      } else {
        global.catchError = true;
        return await client.sendErrorMessage(
          message.from,
          "Reply to Supported media With Caption",
          message.key,
          message
        );
      }
      global.catchError = false;
    } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage(
        message.from,
        error,
        message.key,
        message
      );
    }
  }
);
