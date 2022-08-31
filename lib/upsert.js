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

const chalk = require("chalk");
const ezio = require('../events')
const config = require("./config");

module.exports = async (conn, m, iSecond = false) => {
  try {
    if (m.message && !iSecond) {
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(m.client.displayText || m.type)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(m.client.pushName),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? m.client.pushName : "Private Chat", m.from)
      );
    }
    if (iSecond) {
      if (config.auto.presence.is) {
        if (config.auto.presence.value == "typing") {
          if (m.from) conn.sendPresenceUpdate("composing", m.chat);
        } else if (config.auto.presence.value == "recoding") {
          if (m.from) conn.sendPresenceUpdate("recording", m.chat);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
