const listeners = Object.create(null);

const dispatcher = {
    dispatch: function (payload) {
        for (let id in listeners) {
            listeners[id](payload);
        }
    },
    register: function (listener) {
        listeners[guid.create().value] = listener;
    }
};

module.exports = dispatcher;

