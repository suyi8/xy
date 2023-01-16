"ui";
"use strict";
(function(emitter) {
  threads.start(function () {
    emitter.emit("evaluate", (function () {
      //Many sources 
      let sources = [
        "https://cdn.jsdelivr.net/gh/suyi8/xy@master/source/SkyAutoplayer.js",
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