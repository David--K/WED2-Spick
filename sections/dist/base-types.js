var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Array declaration
var myNumArray = [1, 2, 3];
var myTupel = [1, 'abcd'];
// jedem value kann ein value mit 
// einem beliebigen Typ zugeweisen werden
var myNotInferredTupel = [1, 'abcd'];
// enum declaration
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var StrColor;
(function (StrColor) {
    StrColor["Red"] = "red";
    StrColor["Green"] = "green";
})(StrColor || (StrColor = {}));
;
// enum verwenden
var c = Color.Green;
var myTupel2 = [Color.Green, 1];
//function Parameter
numFun: (function (prevRes, current) { return number; });
var Counter = /** @class */ (function () {
    function Counter(_a) {
        var _b = (_a === void 0 ? {} : _a).doors, doors = _b === void 0 ? 2 : _b;
        this.doors = doors; // Fehler wenn doors nicht gesetzt wird, wäre korrekt in JS
    }
    Object.defineProperty(Counter.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (newDoorCount) {
            this._doors = newDoorCount;
        },
        enumerable: false,
        configurable: true
    });
    Counter.WOOD_FACTORS = { 'oak': 80, 'pine': 20 };
    return Counter;
}());
var SportsCar = /** @class */ (function () {
    //Verkürzte Syntax zur Initialisierung von Properties im Konstruktor
    function SportsCar(make, color, gears) {
        this.make = make;
        this.color = color;
        this.gears = gears;
    }
    return SportsCar;
}());
var DescribableItem = /** @class */ (function () {
    function DescribableItem(description) {
        this.description = description;
    }
    return DescribableItem;
}());
var PointOfInterest = /** @class */ (function (_super) {
    __extends(PointOfInterest, _super);
    function PointOfInterest(x, y, description, likes) {
        var _this = _super.call(this, description) || this;
        _this.x = x;
        _this.y = y;
        _this.likes = likes;
        return _this;
    }
    return PointOfInterest;
}(DescribableItem));
