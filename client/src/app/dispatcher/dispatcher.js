import guid from 'guid';

const listeners = Object.create(null);

class Dispatcher {
    static dispatch(payload) {
        for (let id in listeners) {
            listeners[id](payload);
        }
    }

    static register(listener) {
        listeners[guid.create().value] = listener;
    }
}

export default Dispatcher;

