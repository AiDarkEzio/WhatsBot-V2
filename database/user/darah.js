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
const file4 = path.join(__dirname, "darah.json");
let _darahOrg = JSON.parse(fs.readFileSync(file4));

const addInventoriDarah = (sender, darah) => {
  const obj = { id: sender, healt: darah };
  _darahOrg.push(obj);
  fs.writeFileSync(file4, JSON.stringify(_darahOrg));
};
const cekDuluJoinAdaApaKagaDiJson = (sender) => {
  let status = false;
  Object.keys(_darahOrg).forEach((i) => {
    if (_darahOrg[i].id === sender) {
      status = true;
    }
  });
  return status;
};
const addDarah = (sender, amount) => {
  let position = false;
  Object.keys(_darahOrg).forEach((i) => {
    if (_darahOrg[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _darahOrg[position].healt += amount;
    fs.writeFileSync(file4, JSON.stringify(_darahOrg));
  }
};
const kurangDarah = (sender, amount) => {
  let position = false;
  Object.keys(_darahOrg).forEach((i) => {
    if (_darahOrg[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _darahOrg[position].healt -= amount;
    fs.writeFileSync(file4, JSON.stringify(_darahOrg));
  }
};
const getDarah = (sender) => {
  let position = false;
  Object.keys(_darahOrg).forEach((i) => {
    if (_darahOrg[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    return _darahOrg[position].healt;
  }
};

module.exports = {
  addInventoriDarah,
  cekDuluJoinAdaApaKagaDiJson,
  addDarah,
  kurangDarah,
  getDarah,
};
