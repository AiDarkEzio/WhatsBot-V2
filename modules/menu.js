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
const Lang = ezio.getString("_whats");
// const fs = require("fs");
// const path = require("path");
let cTitle = { "search": "Search",  "all": 'All', "downloade": "Downloade", "chat": "Chat", "system": "System", 'fun': "Fun", '18+': "18+", 'owner': "Owner", 'create': "Create", 'group': "Group", "logo": "Logo", }

ezio.addCommand({ pattern: ["menu", 'help'], desc: Lang.DESCC, sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
  try {
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP = `
◉═════════════◉
  💎 Whats-Bot Commands 💎
◉═════════════◉
┌─(⚜ All Commands)
│
`;
    ezio.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes('all')) { command.pattern.map((cmd) => CMD_HELP += "│ *🎀 :-* ```" + prefix + cmd + ' ' + command.usage + "```\n")}
    }); 
    CMD_HELP += "│\n│ 💓 Created By Whats_Bot-MD\n└─────────◉";
    await client.sendMessage( message.from,{ image: { url: ezio.config.image.url.D_E_DP_ }, caption: CMD_HELP, }, { quoted: message });
    global.catchError = false;
  } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message);}
});

// ################################
// ###### MAPPING MENU ############
// ################################

ezio.categories.map(category => {
  if (category == 'all') return;
  ezio.addCommand({ pattern: [`${category}-menu`], sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
  try {
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP = `
◉═════════════◉
  💎 Whats-Bot Commands 💎
◉═════════════◉
┌─(⚜ ${cTitle[category]} Commands)
│
`;
    ezio.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes(category)) { command.pattern.map((cmd) => CMD_HELP += "│ *🎀 :-* ```" + prefix + cmd + ' ' + command.usage + "```\n")}
    }); 
    CMD_HELP += "│\n│ 💓 Created By Whats_Bot-MD\n└─────────◉";
    await client.sendMessage( message.from,{ image: { url: ezio.config.image.url.D_E_DP_ }, caption: CMD_HELP, }, { quoted: message });
    global.catchError = false;
  } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message);}
  });
})


ezio.addCommand({ pattern: [`cmds-count`], sucReact: "🆗", category: ["all", "system"] }, async (message, client) => {
  try {
    await client.sendMessage( message.from, { text: ezio.infoMessage('Counting commands 💯') }, { quoted: ezio.config.quoted.product });
    let all_cmd = 0;
    let visible_cmd = 0;
    let invisible_cmd = 0;
    let search_cmd = 0;
    let downloade_cmd = 0;
    let chat_cmd = 0;
    let system_cmd = 0;
    let fun_cmd = 0;
    let eighteenplus_cmd = 0;
    let owner_cmd = 0;
    let create_cmd = 0;
    let group_cmd = 0;
    let logo_cmd = 0;
    let countcmdOfCmd = 0;
    ezio.commands.map(command => {
      if (command.category.includes("all")) all_cmd += command.pattern.length;
      if (!command.dontAddCommandList) visible_cmd += command.pattern.length;
      if (command.dontAddCommandList) invisible_cmd += command.pattern.length;
      if (command.category.includes("search")) search_cmd += command.pattern.length;
      if (command.category.includes("downloade")) downloade_cmd += command.pattern.length;
      if (command.category.includes("chat")) chat_cmd += command.pattern.length;
      if (command.category.includes("system")) system_cmd += command.pattern.length;
      if (command.category.includes("fun")) fun_cmd += command.pattern.length;
      if (command.category.includes("18+")) eighteenplus_cmd += command.pattern.length;
      if (command.category.includes("owner")) owner_cmd += command.pattern.length; 
      if (command.category.includes("create")) create_cmd += command.pattern.length; 
      if (command.category.includes("group")) group_cmd += command.pattern.length; 
      if (command.category.includes("logo")) logo_cmd += command.pattern.length; 
      countcmdOfCmd += command.pattern.length;
    });
    let text = `------- Command Count -------

⚜ All Commands: ${all_cmd.toString()}
⚜ Visible Commands: ${visible_cmd.toString()}
⚜ Invisible Commands: ${invisible_cmd.toString()}
⚜ Search Commands: ${system_cmd.toString()}
⚜ Downloade Commands: ${downloade_cmd.toString()}
⚜ Chat Commands: ${chat_cmd.toString()}
⚜ System Commands: ${system_cmd.toString()}
⚜ Fun Commands: ${fun_cmd.toString()}
⚜ Adult Commands: ${eighteenplus_cmd.toString()}
⚜ Owner Commands: ${owner_cmd.toString()}
⚜ Create Commands: ${create_cmd.toString()}
⚜ Group Commands: ${group_cmd.toString()}
⚜ Logo Commands: ${logo_cmd.toString()}

💢 Count Of All Commands: ${countcmdOfCmd.toString()}
`;
    const buttons = [
      { buttonId: ".extra_urls", buttonText: { displayText: "🔗 Extra Urls 🔗" }, type: 1, },
      { buttonId: ".system-menu", buttonText: { displayText: "📠 System menu 📠" }, type: 1, },
    ];
    const Message = {
      image: { url: ezio.config.image.url.D_E_DP_ },
      caption: text,
      footer: ezio.config.exif.footer,
      buttons,
    };
    await client.sendMessage( message.from, Message, { quoted: message })
    global.catchError = false;
  } catch (error) { 
    global.catchError = true; 
    let countcmdOfCmd = 0;
    ezio.commands.map((command) => { countcmdOfCmd += command.pattern.length });
    await client.sendMessage(message.from, {text: countcmdOfCmd.toString()}, { quoted: message });
    return await client.sendErrorMessage( message.from, error, message.key, message);
  }
});

// ezio.commands.length.toString()