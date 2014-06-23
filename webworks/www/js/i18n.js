var i18n = {regx: /`([\w\d\s.-]*?)`/gi, process: function(e, r) {
        console.time('i18n-process-page');
        for (var n = e.querySelectorAll("[i18n]"), t = 0; t < n.length; t++) {
            for (var i = n[t], a = i18n.getAllPropsOf(i), l = a[0], g = 0; g < l.length; g++) {
                for (var o = l[g], u = o.v, c = i18n.regx.exec(u); c; )
                    u = i18n.replace(u, c[1], r), c = i18n.regx.exec(u);
                i[o.p] = u;
            }
            for (var s = a[1], g = 0; g < s.length; g++) {
                for (var o = s[g], u = o.v, c = i18n.regx.exec(u); c; )
                    u = i18n.replace(u, c[1], r), c = i18n.regx.exec(u);
                i.setAttribute([o.a], u);
            }
        }
        console.timeEnd('i18n-process-page');
    }, replace: function(e, r, n) {
        var t = i18n.get(r, n), i = new RegExp("`" + r + "`", "ig");
        return e.replace(i, t);
    }, get: function(e, r) {
        var _locale = qstr[r];
        if (_locale) {
            var n = _locale[e];
            if (n) {
                return n;
            } else {
                return qstr[qstr.default][e] ? qstr[qstr.default][e] : "[" + e + "]";
            }
        } else {
            return this.get(e, qstr.default);
        }

    }, getAllPropsOf: function(e) {
        var r = [];
        e.innerHTML && e.innerHTML.length > 2 && r.push({p: "innerHTML", v: e.innerHTML});
        var n = [];
        if (e.attributes)
            for (var t = 0; t < e.attributes.length; t++) {
                var i = e.attributes[t];
                i.value.length > 3 && n.push({a: i.name, v: i.value});
            }
        return[r, n];
    }};
var qstr = {
    default: "zh-CN",
    "zh-CN": {
        "intro": '合并方块，直到出现<strong>2048</strong>！'
    }
};