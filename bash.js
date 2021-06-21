const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const input = data.toString().trim().split(" ");
  const cmd = input[0].toString().trim();
  const fileP = input[1].toString().trim();

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd === "cat") {
    cat(fileP);
  } else {
    process.stdout.write("you typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
