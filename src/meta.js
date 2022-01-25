const { Actions } = require("./const");

const meta = {
  // 打开微信的快捷键 （需要修改成你自己的）
  // alt + i
  [Actions.openWeChat]: {
    key: "i",
    modified: "alt",
  },
  // 微信中搜索的快捷键 （需要修改成你自己的）
  // command + f
  [Actions.findInWeChat]: {
    key: "f",
    modified: "command",
  },
};

module.exports = {
  meta,
};
