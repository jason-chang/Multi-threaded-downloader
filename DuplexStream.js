/**
 * Created by tusharmathur on 7/14/15.
 */
"use strict";

function Queue() {
    var _queue = [],
        done = false,
        _this = this;
    this.write = function (buffer) {
        _queue.push(buffer);
        return _this;
    };
    this.read = function * () {
        while (!done || _queue.length) {
            if (_queue.length > 0) {
                yield _queue.shift();
            } else {
                yield null;
            }
        }
        return null;
    };
    this.end = function (val) {
        if (val) {
            _queue.push(val);
        }
        done = true;
    };

}
module.exports = Queue;