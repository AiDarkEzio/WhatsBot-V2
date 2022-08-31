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
let { isUrl } = require("../lib/Function");
const { yta, ytv } = require("../lib/y2Mate");

ezio.addCommand(
  {
    pattern: ["ytmp3", "getmusic", "ytaudio"],
    desc: "you can dowloade audio from youtube",
    usage: "<url>",
    sucReact: "📥",
    category: ["downloade", "all"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, `Example : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`, message.key, message ); }
    // if (isUrl(message.client.args[0])) { global.catchError = true; return await client.sendErrorMessage( message.from, `Enter url\nExample : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`, message.key, message );}
    try {
      let quality = message.client.args[1] ? message.client.args[1] : "320kbps";
      let media = await yta(message.client.args[0], quality);
      if (media.filesize >= 999999) { global.catchError = true; return await client.sendErrorMessage( message.from, "File Over Limit " + util.format(media), message.key, message ); }
      let caption = `♻ Title : ${media.title}\n♻ File Size : ${media.filesizeF}\n♻ Url : ${message.client.args[0]}\n♻ Ext : MP3\n♻ Resolution : ${message.client.args[1] || "320kbps"}\n\n${ezio.config.exif.cap}`;
      await client.sendMessage( message.from, { image: { url: media.thumb }, caption }, { quoted: message } );
      const aMsg = await client.sendMessage( message.from, { audio: { url: media.dl_link }, mimetype: "audio/mpeg", fileName: `${media.title}.mp3`, }, { quoted: message } );
      await client.sendReact(message.from, "🎧", aMsg.key);
      global.catchError = false;
    } catch (error) {
      await client.sendErrorMessage(message.from, error, message.key, message);
      return (global.catchError = true);
    }
  }
);

ezio.addCommand(
  {
    pattern: ["ytmp4", "getvideo", "ytvideo"],
    desc: "you can dowloade video from youtube",
    usage: "<url>",
    sucReact: "📥",
    category: ["downloade", "all"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, `Example : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`, message.key, message ); }
    // if (isUrl(message.client.args[0])) { global.catchError = true; return await client.sendErrorMessage( message.from, `Enter url\nExample : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`, message.key, message );}
    try {
      let quality = message.client.args[1] ? message.client.args[1] : "360p";
      let media = await ytv(message.client.args[0], quality);
      if (media.filesize >= 999999) { global.catchError = true; return await client.sendErrorMessage( message.from, "File Over Limit " + util.format(media), message.key, message ); }
      let caption = `♻ Title : ${media.title}\n♻ File Size : ${media.filesizeF}\n♻ Url : ${message.client.args[0]}\n♻ Ext : MP4\n♻ Resolution : ${message.client.args[1] || "360p"}`;
      const vMsg = await client.sendMessage( message.from, { video: { url: media.dl_link }, mimetype: "video/mp4", fileName: `${media.title}.mp4`, caption,}, { quoted: message });
      await client.sendReact(message.from, "🎞", vMsg.key);
      global.catchError = false;
    } catch (error) {
      await client.sendErrorMessage(message.from, error, message.key, message);
      return (global.catchError = true);
    }
  }
);

ezio.addCommand(
  {
    pattern: ["ytmp3-s", "getmusic-s", "ytaudio-s"],
    dontAddCommandList: true,
    sucReact: "📥",
    category: ["downloade", "all"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, `Example : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`, message.key, message ); }
    try {
      await client.sendMessage( message.from, { text: ezio.infoMessage('Downloading Audio 📥') }, { quoted: ezio.config.quoted.product });
      let quality = message.client.args[1] ? message.client.args[1] : "320kbps";
      let media = await yta(message.client.args[0], quality);
      if (media.filesize >= 999999) { global.catchError = true; return await client.sendErrorMessage( message.from, "File Over Limit " + util.format(media), message.key, message ); }
      const aMsg = await client.sendMessage( message.from, { audio: { url: media.dl_link }, mimetype: "audio/mpeg", fileName: `${media.title}.mp3`, }, { quoted: message } );
      await client.sendReact(message.from, "🎧", aMsg.key);
      global.catchError = false;
    } catch (error) {
      await client.sendErrorMessage(message.from, error, message.key, message);
      return (global.catchError = true);
    }
  }
);

ezio.addCommand(
  {
    pattern: ["ytmp4-s", "getvideo-s", "ytvideo-s"],
    dontAddCommandList: true,
    sucReact: "📥",
    category: ["downloade", "all"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, `Example : ${ message.client.prefix + message.client.command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`, message.key, message ); }
    try {
      await client.sendMessage( message.from, { text: ezio.infoMessage('Downloading Video 📥') }, { quoted: ezio.config.quoted.product });
  let quality = message.client.args[1] ? message.client.args[1] : "360p";
      let media = await ytv(message.client.args[0], quality);
      if (media.filesize >= 999999) { global.catchError = true; return await client.sendErrorMessage( message.from, "File Over Limit " + util.format(media), message.key, message ); }
      let caption = `${ezio.config.exif.cap}`;
      const vMsg = await client.sendMessage( message.from, { video: { url: media.dl_link }, mimetype: "video/mp4", fileName: `${media.title}.mp4`, caption,}, { quoted: message });
      await client.sendReact(message.from, "🎞", vMsg.key);
      global.catchError = false;
    } catch (error) {
      await client.sendErrorMessage(message.from, error, message.key, message);
      return (global.catchError = true);
    }
  }
);