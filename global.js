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

const fs = require("fs")
global.user = require("./database/data/user")
global.group = require("./database/data/group")
global._user = JSON.parse(fs.readFileSync("./database/data/user.json"))
global._group = JSON.parse(fs.readFileSync("./database/data/group.json"))
global.owner = ["94761539856"];
global.mess = (type, m) => {
    let msg = { wait: 'Wait, in progress', owner: 'Perintah ini hanya dapat digunakan oleh Owner!', premium: 'Perintah ini hanya dapat digunakan oleh Premium!', group: 'Perintah ini hanya dapat digunakan di group!', private: 'Perintah ini hanya dapat digunakan di private chat!', admin: 'Perintah ini hanya dapat digunakan oleh admin group!', botAdmin: 'Bot bukan admin, tidak dapat mengakses fitur tersebut', bot: 'Fitur ini hanya dapat diakses oleh Bot', dead: 'Fitur ini sedang dimatikan!', media: 'Reply media', error: "No Results Found" }[type]
    if (msg) return m.reply(msg, m.from, { quoted: m })
}