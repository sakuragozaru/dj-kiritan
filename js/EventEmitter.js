export class EventEmitter {
    constructor() {
        this._emitters = {}
    }
    _getEmitter(key) {
        return (key in this._emitters) ? this._emitters[key] : this._emitters[key] = new Set();
    }
    on(key, fn) {
        this._getEmitter(key).add(fn);
    }
    off(key, fn) {
        this._getEmitter(key).delete(fn);
    }
    offAll(key) {
        this._getEmitter(key).clear();
    }
    emit(key, ...params) {
        this._getEmitter(key).forEach((fn) => {
            fn(...params)
        })
    }
}