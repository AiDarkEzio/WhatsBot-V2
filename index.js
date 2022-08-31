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

require("./global");
const { default: WASocket, DisconnectReason, useSingleFileAuthState, fetchLatestBaileysVersion, jidNormalizedUser, makeInMemoryStore, DEFAULT_CONNECTION_CONFIG, DEFAULT_LEGACY_CONNECTION_CONFIG, } = require("Wa-Web");
const fs = require("fs");
const chalk = require("chalk");
const pino = require("pino");
const path = require("path");
const { Boom } = require("@hapi/boom");
const { Simple, upsert, eziofunc } = require("./lib");
const Welcome = require("./lib/Welcome");
const jsoConfig = JSON.parse(fs.readFileSync("./config.json"));
const ezio = require("./events");
const { chatting } = eziofunc;
const { serialize, WAConnection } = Simple;
global.mydb = {};
global.mydb.users = new Array();
global.mydb.hits = new Number();
global.isInCmd = false;
global.catchError = false;
const { state, saveState } = useSingleFileAuthState( "./session.json", pino({ level: "silent" }) );
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }),});
store.readFromFile("./database/json/baileys/store_multi.json");
setInterval(() => { store.writeToFile("./database/baileys/store_multi.json")}, 30 * 1000);
fs.readdirSync("./modules").forEach((file) => {if (path.extname(file).toLowerCase() == ".js") {require(`./modules/${file}`);}});
global.api = (name, path = "/", query = {}, apikeyqueryname) => (name in jsoConfig.APIs ? jsoConfig.APIs[name] : name) + path + (query || apikeyqueryname ? "?" + new URLSearchParams( Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: jsoConfig.APIs.apikey } : {}), }) ) : "");
const WhatsBotConnect = async () => {
  let { version, isLatest } = await fetchLatestBaileysVersion();
  let connOptions = { markOnlineOnConnect: true, linkPreviewImageThumbnailWidth: 500, printQRInTerminal: true, browser: ["Ai Dark Ezio", "Safari", "4.0.0"], logger: pino({ level: "silent" }), auth: state, version, };
  let conn = WASocket(connOptions);
  conn = new WAConnection(conn);
  store.bind(conn.ev);
  conn.ev.on("creds.update", saveState);
  conn.ev.on("connection.update", async (update) => {
    const { lastDisconnect, connection, isNewLogin, isOnline, qr, receivedPendingNotifications, } = update;
    if (connection == "connecting") console.log(chalk.yellow("👩 Connecting to WhatsApp...▶"));
    else if (connection == "open") console.log(chalk.green("👩 Login successful! ▶")); 
    else if (connection == "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) { console.log(chalk.red(`💥 Bad Session File, Please Delete Session and Scan Again`)); conn.logout(); } 
      else if (reason === DisconnectReason.connectionClosed) { console.log(chalk.red("💥 Connection closed, reconnecting....")); WhatsBotConnect(); } 
      else if (reason === DisconnectReason.connectionLost) { console.log(chalk.red("💥 Connection Lost from Server, reconnecting...")); WhatsBotConnect(); } 
      else if (reason === DisconnectReason.connectionReplaced) { console.log(chalk.red("💥 Connection Replaced, Another New Session Opened, Please Close Current Session First")); conn.logout(); } 
      else if (reason === DisconnectReason.loggedOut) { console.log(chalk.red(`💥 Device Logged Out, Please Scan Again And Run.`)); process.exit(0); } 
      else if (reason === DisconnectReason.restartRequired) { console.log(chalk.red("💥 Restart Required, Restarting...")); WhatsBotConnect(); } 
      else if (reason === DisconnectReason.timedOut) { console.log(chalk.red("💥 Connection TimedOut, Reconnecting...")); WhatsBotConnect(); } 
      else conn.end(chalk.red(`💥 Unknown DisconnectReason: ${reason}|${connection}`));
    } else if (isOnline === true) console.log(chalk.blue("👩 Online."));
    else if (isOnline === false) console.log(chalk.red("👩 Offine."));
    else if (receivedPendingNotifications === true) console.log(chalk.blue("👩 Received Pending Notifications."));
    else if (receivedPendingNotifications === false) console.log(chalk.red("👩 Not Received Pending Notifications."));
    else if (isNewLogin === true) console.log(chalk.blue("👩 New Login."));
    else if (isNewLogin === false) console.log(chalk.red("👩 Not New Login."));
    else if (qr) console.log(chalk.magenta("Qr: "), chalk.magentaBright(qr));
    else console.log("👩 Connection...", update);
  });
  conn.ev.on("group-participants.update", async (m) => { if (ezio.config.setting.blockchat.includes(m.id)) return; else Welcome(conn, m);});
  conn.ev.on("messages.upsert", async (chatUpdate) => {
    global.isInCmd = false;
    let m = new serialize(conn, chatUpdate.messages[0]);
    if ((ezio.config.setting.blockchat.includes(m.from)) || (!m.message) || (m.key && m.key.remoteJid == "status@broadcast") || (m.key.id.startsWith("BAE5") && m.key.id.length == 16)) return;
    if (global.mydb.users.indexOf(m.sender) == -1) global.mydb.users.push(m.sender);
    await upsert(conn, m);
    await chatting(m, conn);
    try {
      ezio.commands.map(async (command) => {
        for (let i in command.pattern) {
          if (command.pattern[i] == m.client.command || command.on == "text") {
            global.isInCmd = true; global.mydb.hits += 1; global.catchError = false;
            await conn.sendReact(m.from, await ezio.reactArry("INFO"), m.key);
            await conn.sendPresenceUpdate( ezio.config.auto.presence.value, m.from );
            try {await command.function(m, conn);}
            catch (error) { global.catchError = true; console.log(error); }
            global.catchError ? await conn.sendReact( m.from, await ezio.reactArry("ERROR"), m.key ) : await conn.sendReact(m.from, command.sucReact, m.key); await conn.sendPresenceUpdate("available", m.from);
          }
        }
      });
    } catch (e) {
      console.log(e);
      sendErrorMessage(m.from,e,m.key,m,[],false);
    }
  });

  setInterval(async () => {
    var utch = new Date().toLocaleDateString("EN", { weekday: "long", year: "numeric", month: "long", day: "numeric", });
    var ov_time = new Date().toLocaleString("LK", { timeZone: "Asia/Colombo" }).split(" ")[1];
    const biography = "📅 " + utch + "\n⌚ " + ov_time + "\n\n💗 Auto Bio Powered By Whats Bot...💬\n\n👨🏼‍💻 Created By Dark_Ezio";
    await conn.updateProfileStatus(biography);
  }, 1000 * 10);
  if (conn.user && conn.user?.id) conn.user.jid = jidNormalizedUser(conn.user?.id); conn.logger = conn.type == "legacy" ? DEFAULT_LEGACY_CONNECTION_CONFIG.logger.child({}) : DEFAULT_CONNECTION_CONFIG.logger.child({});
};

WhatsBotConnect();
