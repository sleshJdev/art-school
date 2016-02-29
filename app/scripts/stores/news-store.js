/**
 * News Store
 * @author slesh
 */

module.exports = (function (guid, dispatcher) {
    console.log("create news store");

    var listeners = [];
    var databaseNews = [
        {
            key: guid.create(),
            id: 1,
            title: "Новость 1",
            date: "2016.02.17",
            content: "Очень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текста"
        }, {
            key: guid.create(),
            id: 2,
            title: "Новость 2",
            date: "2016.02.17",
            content: "Очень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текста"
        }, {
            key: guid.create(),
            id: 3,
            title: "Новость 3",
            date: "2016.02.17",
            content: "Очень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текста"
        }, {
            key: guid.create(),
            id: 4,
            title: "Новость 4",
            date: "2016.02.17",
            content: "Очень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текста"
        }, {
            key: guid.create(),
            id: 5,
            title: "Новость 5",
            date: "2016.02.17",
            content: "Очень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текста"
        }, {
            key: guid.create(),
            id: 6,
            title: "Новость 6",
            date: "2016.02.17",
            content: "Очень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текстаОчень много текста"
        }
    ];

    function addNews(news) {
        news.key = guid.create();
        databaseNews.push(news);
        triggerListeners();
        console.log("NewsStore.addNews(), news: ", news, ", quantity: ", databaseNews.length);
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