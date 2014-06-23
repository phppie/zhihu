var zhihu = {
    first: "20130520",
    latest: "http://news.at.zhihu.com/api/1.2/news/latest",
    getLatest: function(callback) {
        $.getJSON(zhihu.latest).done(function(data) {
            callback(true, data);
        }).fail(function(e) {
            if (callback) {
                callback(false, e);
            }
        });
    },
    before: "http://news.at.zhihu.com/api/1.2/news/before/",
    getDailyBefore: function(str_date, callback) {
        if (str_date < this.first) {
            callback(false, "没有早于2013年5月19日的杂志");
            return;
        }
        var url = zhihu.before + str_date;
        $.getJSON(url).done(function(data) {
            if (callback)
                callback(true, data);
        }).fail(function(e) {
            console.error(e);
            if (callback)
                callback(false, e);
        });
    },
    getContent: function(url, callback) {
        $.getJSON(url).done(function(data) {
            if (callback)
                callback(true, data);
        }).fail(function(e) {
            if (callback)
                callback(false, e);
        });
    }
};