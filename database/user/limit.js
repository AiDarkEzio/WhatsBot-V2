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
const file4 = path.join(__dirname, "limit.json");
let _limitOrg = JSON.parse(fs.readFileSync(file4));
let limitAwal = global.limitawal.free;
const addInventoriLimit = (sender) => {
  const obj = { id: sender, limit: limitAwal };
  _limitOrg.push(obj);
  fs.writeFileSync(file4, JSON.stringify(_limitOrg));
};
const cekDuluJoinAdaApaKagaLimitnyaDiJson = (sender) => {
  let status = false;
  Object.keys(_limitOrg).forEach((i) => {
    if (_limitOrg[i].id === sender) {
      status = true;
    }
  });
  return status;
};
const addLimit = (sender, amount) => {
  let position = false;
  Object.keys(_limitOrg).forEach((i) => {
    if (_limitOrg[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _limitOrg[position].limit += amount;
    fs.writeFileSync(file4, JSON.stringify(_limitOrg));
  }
};
const kurangLimit = (sender, amount) => {
  let position = false;
  Object.keys(_limitOrg).forEach((i) => {
    if (_limitOrg[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _limitOrg[position].limit -= amount;
    fs.writeFileSync(file4, JSON.stringify(_limitOrg));
  }
};
const getLimit = (sender) => {
  let position = false;
  Object.keys(_limitOrg).forEach((i) => {
    if (_limitOrg[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    return _limitOrg[position].limit;
  }
};

module.exports = {
  addInventoriLimit,
  cekDuluJoinAdaApaKagaLimitnyaDiJson,
  addLimit,
  kurangLimit,
  getLimit,
};
