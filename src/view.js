const inquirer = require("inquirer");
const rooms = require("../rooms.json");

module.exports = function view() {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          name: "groupName",
          message: "请输入要群发的组名(默认发送 default 群组)",
          type: "list",
          choices: getChoices(),
          default: "default",
        },
        {
          name: "sendData",
          type: "editor",
          message: "请输入你要发送的内容",
          validate(message) {
            return message.trim().length > 0;
          },
        },
      ])
      .then((answers) => {
        resolve(answers);
      });
  });
};

function getChoices() {
  const choices = [];

  for (const key in rooms) {
    choices.push(key);
  }

  return choices;
}
