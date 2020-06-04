"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fukubiki {
    constructor(length = 0, param = {}) {
        this.maxLength = this.length = length;
        this.pod = [];
        this.autoReset = param.autoReset || false;
        this.callback = param.callback || function () { };
        for (let i = 0; i < this.length; ++i) {
            this.pod.push(i);
        }
    }
    reset() {
        this.pod.splice(0, this.pod.length);
        for (let i = 0; i < this.maxLength; ++i) {
            this.pod.push(i);
        }
        this.length = this.maxLength;
    }
    select() {
        const num = this.pod.splice(Math.random() * this.pod.length | 0, 1)[0];
        this.length = this.pod.length;
        if (!this.pod.length) {
            if (this.autoReset) {
                this.reset();
            }
            this.callback.call(this);
        }
        return typeof num === 'number' ? num : null;
    }
}
exports.default = Fukubiki;
