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

const fs = require("fs");
const path = require("path");
var Commands = [];
const config = require("./lib/config");
var json = JSON.parse(fs.readFileSync("./database/json/db/EN.json"));
const getString = (file) => { return json["STRINGS"][file];};
const reactArry = async (text = "INFO" || "SUCCESS" || "ERROR") => {
  const reactArry = getString("react");
  const react = reactArry[text];
  return (react[Math.floor(Math.random() * react.length)])
};
const successfullMessage = (msg) => { return "👩‍🦰 *Successful*:-  ```" + msg + "```"; };
const errorMessage = (msg) => { return "🚀 *Error*:-  ```" + msg + "```"; };
const infoMessage = (msg) => { return "🤖 *Info*:- ```" + msg + "```"; };
const categories = ["search", "all", "downloade", "chat", "system", 'fun', '18+', 'owner', 'create', 'group', "logo" ];
function addCommand(info, func) {
  var types = ["photo", "image", "text", "message"];
  var infos = {
    category: info["category"] === null || undefined ? ["all"] : info["category"],
    fromMe: info["fromMe"] === undefined ? true : info["fromMe"],
    onlyGroup: info["onlyGroup"] === undefined ? false : info["onlyGroup"],
    onlyPinned: info["onlyPinned"] === undefined ? false : info["onlyPinned"],
    sucReact: info["sucReact"] === undefined ? "💖" : info["sucReact"],
    onlyPm: info["onlyPm"] === undefined ? false : info["onlyPm"],
    deleteCommand: info["deleteCommand"] === undefined ? true : info["deleteCommand"],
    desc: info["desc"] === undefined ? "" : info["desc"],
    usage: info["usage"] === undefined ? "" : info["usage"],
    dontAddCommandList: info["dontAddCommandList"] === undefined ? false : info["dontAddCommandList"],
    warn: info["warn"] === undefined ? "" : info["warn"],
    function: func,
  };
  if (info["on"] === undefined && info["pattern"] === undefined) { infos.on = "message"; infos.fromMe = false;} 
  else if (info["on"] !== undefined && types.includes(info["on"])) { infos.on = info["on"]; if (info["pattern"] !== undefined) infos.pattern = info["pattern"] === undefined ? [] : info["pattern"];} 
  else infos.pattern = info["pattern"] === undefined ? [] : info["pattern"];
  Commands.push(infos);
  return infos;
}
module.exports = { addCommand, getString, reactArry, successfullMessage, infoMessage, errorMessage, categories, config, commands: Commands,};
