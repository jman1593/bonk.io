(function () {
    let fgp = function (parameterName) {
      let result = null,
        tmp = [];
      try {
        let getParams =
          window.location !== window.parent.location
            ? window.parent.location.search
            : document.location.search;
        getParams
          .substr(1)
          .split("&")
          .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) {
              result = decodeURIComponent(tmp[1]);
            }
          });
      } catch (err) {}
      return result;
    };
  
    let lw = function (script_path) {
      let localPath = "./js/" + script_path;
      let lS = function (path) {
        let s = document.createElement("script");
        s.type = "text/javascript";
        s.src = path;
        s.async = true;
        s.onload = function () {};
        let h = document.head;
        h.appendChild(s);
      };
      lS(localPath);
    };
  
    const sc = [];
    sc.push({ script_path: "default.1729731694.js", pct: 100 });
  
    if (fgp("lngtd_version")) {
      let scriptPath = `${fgp("lngtd_version")}.js`;
      lw(scriptPath);
    } else {
      const exp = sc.flatMap((co) => Array(co.pct).fill(co));
      const w = exp[Math.floor(Math.random() * exp.length)];
      lw(w.script_path);
    }
  })();
  