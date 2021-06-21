const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const input = data.toString().trim().split(" ");
  let fileP = "";
  const cmd = input[0].toString().trim();
  if (input.length === 2) {
    fileP = input[1].toString().trim();
  }

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd === "cat") {
    cat(fileP);
  } else if (cmd === "curl") {
    curl(fileP);
  } else {
    process.stdout.write("you typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
