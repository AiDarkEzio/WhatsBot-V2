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

const yts = require("yt-search");
const ezio = require("../events");
const lang = ezio.getString("scrapers");

ezio.addCommand(
  { 
    pattern: ["play", "ytplay"], 
    desc: "you can dowloade audio from youtube", 
    usage: '<url|query>',
    sucReact: "🔎", 
    category: ["search", "all"] 
},
  async (message, client) => {
    try {
      if (!message.client.text) { await client.sendErrorMessage( message.from, lang.NEED_TEXT_SONG, message.key, message ); return global.catchError = true; }
      let video = {};
      let results = {};
      let result;
      let buttons = [];
      if (message.client.args[0] == "x/65v79") {
        video = await yts({ videoId: message.client.args[1] });
        result = video;
        buttons = [
          { buttonId: `.ytmp3 ${result.url}`, buttonText: { displayText: "🎼 Audio 🎵" }, type: 1, },
          { buttonId: `.ytmp4 ${result.url}`, buttonText: { displayText: "🎞 Video 📽️" }, type: 1, },
        ];
      } else {
        results = await yts(message.client.text);
        result = results.videos[0];
        buttons = [
          { buttonId: `.ytmp3 ${result.url}`, buttonText: { displayText: "🎼 Audio 🎵" }, type: 1, },
          { buttonId: `.ytmp4 ${result.url}`, buttonText: { displayText: "🎞 Video 📽️" }, type: 1, },
          { buttonId: `.rytplay ${message.client.text}`, buttonText: { displayText: "🔎 Random Search 🔍" }, type: 1, },
        ];
      }
      let Message = {
        image: { url: result.thumbnail },
        caption: `
  —————————————————————————
  ♻ Title : ${result.title}
  ♻ Ext : Search [first result]
  ♻ ID : ${result.videoId}
  ♻ Duration : ${result.timestamp}
  ♻ Viewes : ${result.views}
  ♻ Uploaded On : ${result.ago}
  ♻ Author : ${result.author.name}
  ♻ Channel : ${result.author.url}
  ♻ Description : ${result.description}
  ♻ Url : ${result.url}
  —————————————————————————`,
        footer: ezio.config.exif.footer,
        buttons: buttons,
      };

      await client.sendMessage(message.from, Message, { quoted: message});
    } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message ); }
  }
);

ezio.addCommand(
  { 
    pattern: ["rplay", "rytplay"], 
    desc: "you can dowloade Randomly yt result downlode", 
    usage: '<url|query>',
    sucReact: "🔎", 
    category: ["search", "all"] 
},
  async (message, client) => {
    try {
      if (!message.client.text) { await client.sendErrorMessage( message.from, lang.NEED_TEXT_SONG, message.key, message ); return global.catchError = true; }
      const results = await yts(message.client.text);
      let result = results.videos[Math.floor(Math.random() * results.videos.length)];
      let buttons = [
        { buttonId: `.ytmp3 ${result.url}`, buttonText: { displayText: "🎼 Audio 🎵" }, type: 1, },
        { buttonId: `.ytmp4 ${result.url}`, buttonText: { displayText: "🎞 Video 📽️" }, type: 1, },
        { buttonId: `.rytplay ${message.client.text}`, buttonText: { displayText: "🔎 Random Search 🔍" }, type: 1, },
      ];
      let buttonMessage = {
        image: { url: result.thumbnail },
        caption: `
  —————————————————————————
  ♻ Title : ${result.title}
  ♻ Ext : Search [Random result]
  ♻ ID : ${result.videoId}
  ♻ Duration : ${result.timestamp}
  ♻ Viewes : ${result.views}
  ♻ Uploaded On : ${result.ago}
  ♻ Author : ${result.author.name}
  ♻ Channel : ${result.author.url}
  ♻ Description : ${result.description}
  ♻ Url : ${result.url}
  —————————————————————————`,
        footer: ezio.config.exif.footer,
        buttons: buttons,
      };
      await client.sendMessage(message.from, buttonMessage, { quoted: message, });
      global.catchError = false;
      } catch (error) { 
        global.catchError = true; 
        return await client.sendErrorMessage( message.from, error, message.key, message ); 
      }
  }
);

ezio.addCommand(
  {
    pattern: ["lplay", "lsong", "lytplay"],
    desc: "For list search. you can use",
    usage: '<query>',
    sucReact: "🔎",
    category: ["search", "all"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, lang.NEED_TEXT_SONG, message.key, message ); };
    try {
      const results = await yts(message.client.text);
      let result = results.videos;
      let rows = [];
      result.map((video) => {
        let obj = { title: video.title, rowId: `song ${video.videoId}`, description: video.description, };
        rows.push(obj);
      });
      const sections = [ { title: "Videos", rows: rows, }, ];
      const listMessage = {
        text: "Youtube Search Results",
        footer: ezio.config.exif.footer,
        title: "Whats Bot MD V5",
        buttonText: "📃 Results Here 📃",
        sections,
      };
      await client.sendMessage(message.from, listMessage, { quoted: message, });
      global.catchError = true;
    } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message ); }
  }
);
