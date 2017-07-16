import Promise from 'es6-promise/Promise';

const baseUrl = 'http://localhost:9009';

const httpUtil = {
    post: function (url, data) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: baseUrl + url,
                data: JSON.stringify(data),
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                success: resolve,
                error: reject
            });
        });
    },
    get: function (url) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: baseUrl + url,
                method: 'GET',
                dataType: 'json',
                success: resolve,
                error: reject
            });
        });
    },
    del: function (url) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: baseUrl + url,
                method: 'DELETE',
                dataType: 'json',
                success: resolve,
                error: reject
            });
        });
    }
};

export default httpUtil;