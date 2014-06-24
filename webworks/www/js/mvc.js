var UI = {
    showSelector: function() {
        alert("还没做")
    },
    shareURL:function(u){
        //分享页面地址
        Invoke.targets(u);
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