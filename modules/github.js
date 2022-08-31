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
const axios = require("axios");

ezio.addCommand(
  {
    pattern: ["github"],
    desc: lang.GITHUB_DESC,
    usage: '<userName>',
    sucReact: "💻",
    category: ["search", "all"],
  },
  async (message, client) => {
    const uName = message.client.text;

    if (!uName) {
      global.catchError = true;
      return await client.sendMessage( message.from, { text: ezio.errorMessage(lang.REPLY) }, { quoted: message } );
    }

    await axios.get(`${ezio.config.api.github.domain}/users/${uName}`)
      .then(async (response) => {
        const { login, avatar_url, html_url, twitter_username, bio, name, company, public_repos, public_gists, followers, location, following, created_at, blog, type, email, updated_at, } = response.data;

        if (response.data.message) {
          global.catchError = true;
          return await client.sendErrorMessage( message.from, response.data.message, message.key, message );
        }

        const msg =
          `\n⚜ *${lang.NAME}* ${name}` +
          `\n\n` +
          `⚜ *${lang.USERNAME}* ${login}` +
          `\n\n` +
          `⚜ *${lang.TWITTER}* ${twitter_username}` +
          `\n\n` +
          `⚜ *${lang.COMPANY}* ${company}` +
          `\n\n` +
          `⚜ *${lang.BIO}* ${bio}` +
          `\n\n` +
          `⚜ *${lang.BLOG}* ${blog}` +
          `\n\n` +
          `⚜ *${lang.URL}* ${html_url}` +
          `\n\n` +
          `⚜ *${lang.REPO}* ${public_repos}` +
          `\n\n` +
          `⚜ *${lang.GIST}* ${public_gists}` +
          `\n\n` +
          `⚜ *${lang.FOLLOWING}* ${following}` +
          `\n\n` +
          `⚜ *${lang.FOLLOWERS}* ${followers}` +
          `\n\n` +
          `⚜ *${lang.MAIL}* ${email}` +
          `\n\n` +
          `⚜ *${lang.LOCATION}* ${location}` +
          `\n\n` +
          `⚜ *${lang.JOIN}* ${created_at}` +
          `\n\n` +
          `⚜ *${lang.UPDATE}* ${updated_at}\n`;

        await client.sendMessage( message.from, { image: { url: avatar_url }, caption: msg + "\n" + ezio.config.exif.footer,}, { quoted: message, });
        global.catchError = false;
      })
      .catch(async (err) => {
        (global.catchError = true),
          await client.sendErrorMessage( message.from, lang.NOT + "\n\n" + err, message.key, message );
      });
  }
);

// {
//   login: "AiDarkEzio",
//   id: 87601796,
//   node_id: "MDQ6VXNlcjg3NjAxNzk2",
//   avatar_url: "https://avatars.githubusercontent.com/u/87601796?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/AiDarkEzio",
//   html_url: "https://github.com/AiDarkEzio",
//   followers_url: "https://api.github.com/users/AiDarkEzio/followers",
//   following_url:
//     "https://api.github.com/users/AiDarkEzio/following{/other_user}",
//   gists_url: "https://api.github.com/users/AiDarkEzio/gists{/gist_id}",
//   starred_url: "https://api.github.com/users/AiDarkEzio/starred{/owner}{/repo}",
//   subscriptions_url: "https://api.github.com/users/AiDarkEzio/subscriptions",
//   organizations_url: "https://api.github.com/users/AiDarkEzio/orgs",
//   repos_url: "https://api.github.com/users/AiDarkEzio/repos",
//   events_url: "https://api.github.com/users/AiDarkEzio/events{/privacy}",
//   received_events_url:
//     "https://api.github.com/users/AiDarkEzio/received_events",
//   type: "User",
//   site_admin: false,
//   name: "Subadra Poshitha",
//   company: "Subadra Poshitha",
//   blog: "https://AiDarkEzio.github.io/",
//   location: "Sri Lanka",
//   email: null,
//   hireable: null,
//   bio: null,
//   twitter_username: null,
//   public_repos: 38,
//   public_gists: 0,
//   followers: 3,
//   following: 18,
//   created_at: "2021-07-18T10:09:38Z",
//   updated_at: "2022-07-06T04:13:23Z",
// }
