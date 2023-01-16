"ui";
"use strict";
(function(emitter) {
  threads.start(function () {
    emitter.emit("evaluate", (function () {
      //Many sources 
      let sources = [
        "http://81.70.194.140:8090/suyi/sy/raw/commit/e8764a94ffd289de4f9e2998f78a1e522ab79144/source/SkyAutoplayer.js",
      ];
      for (let i in sources) {
        let resp = http.get(sources[i]);
        if (resp.statusCode >= 200 && resp.statusCode < 300) {
          return resp.body.string();
        }
      }
      return "console.show();console.log(\"Failed to load script\")";
    }()));
  });
  emitter.on('evaluate', function (s) {
    eval(s);
  });
}(events.emitter(threads.currentThread())));
