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
const file4 = path.join(__dirname, "monay.json");
let _monayOrg = JSON.parse(fs.readFileSync(file4));
let monayAwal = global.limitawal.monayawal;
const addInventoriMonay = (sender) => {
  const obj = { id: sender, monay: monayAwal };
  _monayOrg.push(obj);
  fs.writeFileSync(file4, JSON.stringify(_monayOrg));
};
const cekDuluJoinAdaApaKagaMonaynyaDiJson = (sender) => {
  let status = false;
  Object.keys(_monayOrg).forEach((i) => {
    if (_monayOrg[i].id === sender) {
      status = true;
    }
  });
  return status;
};
const addMonay = (sender, amount) => {
  let position = false;
  Object.keys(_monayOrg).forEach((i) => {
    if (_monayOrg[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _monayOrg[position].monay += amount;
    fs.writeFileSync(file4, JSON.stringify(_monayOrg));
  }
};
const kurangMonay = (sender, amount) => {
  let position = false;
  Object.keys(_monayOrg).forEach((i) => {
    if (_monayOrg[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _monayOrg[position].monay -= amount;
    fs.writeFileSync(file4, JSON.stringify(_monayOrg));
  }
};
const getMonay = (sender) => {
  let position = false;
  Object.keys(_monayOrg).forEach((i) => {
    if (_monayOrg[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    return _monayOrg[position].monay;
  }
};

module.exports = {
  addInventoriMonay,
  cekDuluJoinAdaApaKagaMonaynyaDiJson,
  addMonay,
  kurangMonay,
  getMonay,
};
