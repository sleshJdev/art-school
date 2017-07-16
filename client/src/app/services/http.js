import {Promise} from 'es6-promise';

const baseUrl = 'http://localhost:3000';

class HttpUtil {
    static post(url, data) {
        return new Promise.Promise(function (resolve, reject) {
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
    }

    static get(url) {
        return new Promise.Promise(function (resolve, reject) {
            $.ajax({
                url: baseUrl + url,
                method: 'GET',
                dataType: 'json',
                success: resolve,
                error: reject
            });
        });
    }

    static del(url) {
        return new Promise.Promise(function (resolve, reject) {
            $.ajax({
                url: baseUrl + url,
                method: 'DELETE',
                dataType: 'json',
                success: resolve,
                error: reject
            });
        });
    }
}

export default HttpUtil;