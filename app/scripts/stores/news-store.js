/**
 * News Store
 * @author slesh
 */

module.exports = (function (guid, dispatcher) {
    console.log("create news store");

    var listeners = [];
    var databaseNews = [
        {
            id: 1,
            title: "Новость 1",
            content: "Очень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текста"
        }, {
            id: 2,
            title: "Новость 2",
            content: "Очень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текста"
        }, {
            id: 3,
            title: "Новость 3",
            content: "Очень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текста"
        }, {
            id: 4,
            title: "Новость 4",
            content: "Очень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текста"
        }
    ];

    databaseNews.forEach(function (news) {
        news.key = guid.create();
    });

    function addNews(news) {
        news.key = guid.create();
        databaseNews.push(news);
        triggerListeners();
        console.log("NewsStore.addNews(), news: " + JSON.stringify(news) + ", quantity: " + databaseNews.length);
    }

    function deleteNews(news) {
        var index = databaseNews.findIndex(function (record) {
            return news.id == record.id;
        });
        if (index !== -1) {
            databaseNews.splice(index, 1);
            triggerListeners();
        }
    }

    function triggerListeners() {
        var perform = function (listener) {
            listener(databaseNews);
        };
        listeners.forEach(perform);
    }

    dispatcher.register(function (payload) {
        var parts = payload.type.split(":");
        if (parts[1] !== "news") {
            switch (parts[1]) {
                case "addNews":
                    addNews(payload.data);
                    break;
                case "deleteNews":
                    deleteNews(payload.data);
                    break;
            }
        }
    });

    return {
        getAllNews: function () {
            return databaseNews;
        },
        onChange: function (listener) {
            listeners.push(listener);
        }
    }
})(require("guid"), require("dispatcher"));