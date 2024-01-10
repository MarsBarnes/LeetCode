var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MovingAverage = /** @class */ (function () {
    function MovingAverage(size) {
        this.queue = [];
        this.windowSize = size;
        this.total = 0;
    }
    MovingAverage.prototype.next = function (val) {
        while (this.queue.length > this.windowSize - 1) {
            var valueRemoved = this.queue.shift();
            this.total -= valueRemoved;
        }
        this.queue.push(val);
        this.total += val;
        var average = this.total / this.queue.length;
        return average;
    };
    return MovingAverage;
}());
/**
 * Like MovingAverage, but also tracks standard deviations!
 */
var MovingAveragePlusPlus = /** @class */ (function (_super) {
    __extends(MovingAveragePlusPlus, _super);
    function MovingAveragePlusPlus(size) {
        var _this = _super.call(this, size) || this;
        _this.windowSize = size;
        return _this;
    }
    return MovingAveragePlusPlus;
}(MovingAverage));
var averageA = new MovingAverage(3);
averageA.windowSize = 0;
//# sourceMappingURL=blah.js.map