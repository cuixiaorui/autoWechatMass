const roomsJson = require("../rooms.json");
const robot = require("robotjs");
const meta = require("./meta.json");
const { delay } = require("./utils");
const view = require("./view");

(async () => {
  const { groupName, sendData } = await view();

  openWeChat();

  const rooms = roomsJson[groupName];
  for (const roomName of rooms) {
    console.log(roomName);
    await main(roomName);
  }

  async function main(roomName) {
    await delay(1000);
    findInWeChat();

    await delay(1000);
    robot.keyTap("enter");

    await delay(1000);
    robot.typeString(roomName);

    // 现在进入群了
    await delay(2000);
    robot.keyTap("enter");

    // 输入文字
    await delay(1000);
    robot.typeString(sendData);

    // 发送消息
    await delay(1000);
    robot.keyTap("enter");
  }

  function openWeChat() {
    const { key, modified } = meta["openWeChat"];
    robot.keyTap(key, modified);
  }

  function findInWeChat() {
    const { key, modified } = meta["findInWeChat"];
    robot.keyTap(key, modified);
  }
})();
