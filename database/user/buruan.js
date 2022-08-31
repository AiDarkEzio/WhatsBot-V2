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
const file4 = path.join(__dirname, "hasil_buruan.json");
let _hasilBuruan = JSON.parse(fs.readFileSync(file4));

const addInventoriBuruan = (sender) => {
  const obj = {
    id: sender,
    ikan: 0,
    ayam: 0,
    kelinci: 0,
    domba: 0,
    sapi: 0,
    gajah: 0,
  };
  _hasilBuruan.push(obj);
  fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
};
const cekDuluHasilBuruanNya = (sender) => {
  let status = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      status = true;
    }
  });
  return status;
};
const addAyam = (sender, amount) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _hasilBuruan[position].ayam += amount;
    fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
  }
};
const kurangAyam = (sender, amount) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _hasilBuruan[position].ayam -= amount;
    fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
  }
};
const getAyam = (sender) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    return _hasilBuruan[position].ayam;
  }
};
const addIkan = (sender, amount) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _hasilBuruan[position].ikan += amount;
    fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
  }
};
const kurangIkan = (sender, amount) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _hasilBuruan[position].ikan -= amount;
    fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
  }
};
const getIkan = (sender) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    return _hasilBuruan[position].ikan;
  }
};
const addKelinci = (sender, amount) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _hasilBuruan[position].kelinci += amount;
    fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
  }
};
const kurangKelinci = (sender, amount) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _hasilBuruan[position].kelinci -= amount;
    fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
  }
};
const getKelinci = (sender) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    return _hasilBuruan[position].kelinci;
  }
};
const addDomba = (sender, amount) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _hasilBuruan[position].domba += amount;
    fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
  }
};
const kurangDomba = (sender, amount) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _hasilBuruan[position].domba -= amount;
    fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
  }
};
const getDomba = (sender) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    return _hasilBuruan[position].domba;
  }
};
const addSapi = (sender, amount) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _hasilBuruan[position].sapi += amount;
    fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
  }
};
const kurangSapi = (sender, amount) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _hasilBuruan[position].sapi -= amount;
    fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
  }
};
const getSapi = (sender) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    return _hasilBuruan[position].sapi;
  }
};
const addGajah = (sender, amount) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _hasilBuruan[position].gajah += amount;
    fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
  }
};
const kurangGajah = (sender, amount) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    _hasilBuruan[position].gajah -= amount;
    fs.writeFileSync(file4, JSON.stringify(_hasilBuruan));
  }
};
const getGajah = (sender) => {
  let position = false;
  Object.keys(_hasilBuruan).forEach((i) => {
    if (_hasilBuruan[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    return _hasilBuruan[position].gajah;
  }
};

module.exports = {
  cekDuluHasilBuruanNya,
  addInventoriBuruan,
  addIkan,
  addAyam,
  addKelinci,
  addDomba,
  addSapi,
  addGajah,
  kurangIkan,
  kurangAyam,
  kurangKelinci,
  kurangDomba,
  kurangSapi,
  kurangGajah,
  getIkan,
  getAyam,
  getKelinci,
  getDomba,
  getSapi,
  getGajah,
};
