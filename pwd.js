const callPwd = function () {
  process.stdout.write(process.cwd());
  process.stdout.write("\nprompt > ");
};

module.exports = callPwd;
