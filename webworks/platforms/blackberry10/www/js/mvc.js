var UI = {
    showSelector: function() {
        bb.pushScreen("selector.html", "selector");
    },
    shareURL: function(u) {
        //分享页面地址
        Invoke.targets(u);
    },
    switchDate: function(obj) {
        console.log(obj.value);
        var v = new Date(obj.value);
        v.setDate(v.getDate() + 1);
        var newdate = v.toISOString().substr(0, 10).split("-").join("");
        console.log(newdate);
        _showdate = v;
        _prevdate = newdate;
    },
    openHistory: function() {
        bb.pushScreen("history.html", "history", {
            "date": _prevdate
        })
    },
    enterAbout: function() {
        bb.pushScreen("about.html", "about");
    },
    enterSettings: function() {
        bb.pushScreen("settings.html", "settings");
    }
};

var View = {
    buildListItem: function(jsonobj) {
        var node = $('#template').clone(true).attr("data-anpho-url", jsonobj.url).attr("data-anpho-title", jsonobj.title)
                .attr("data-anpho-image", jsonobj.image).attr("data-anpho-share_url", jsonobj.share_url)
                .attr("data-anpho-thumbnail", jsonobj.thumbnail).attr("data-anpho-ga_prefix", jsonobj.ga_prefix)
                .attr("data-anpho-id", jsonobj.id).find(".d-pic").attr("src", jsonobj.thumbnail).end()
                .find(".d-title").text(jsonobj.title).end().on("click", function() {
            bb.pushScreen("view.html", "view", {
                "url": jsonobj.url
            });
        }).css("display", "block");
        return node;
    }
    ,
    buildList: function(jsonobj) {
        if (jsonobj.news) {
            var df = document.createDocumentFragment();
            $.each(jsonobj.news, function(i, e) {
                $(df).append(View.buildListItem(e));
            });
            return df;
        } else {
            return "数据错误";
        }
    }
};