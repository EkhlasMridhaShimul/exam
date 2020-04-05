var GenericList = /** @class */ (function () {
    function GenericList(item) {
        this.lists = [];
        if (item) {
            this.lists.push(item);
        }
    }
    Object.defineProperty(GenericList.prototype, "setLists", {
        set: function (items) {
            this.lists = items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericList.prototype, "getItem", {
        get: function () {
            return this.lists;
        },
        enumerable: true,
        configurable: true
    });
    GenericList.prototype.add = function (item) {
        this.lists.push(item);
    };
    GenericList.prototype.remove = function (item) {
        var index = this.find(item);
        this.lists.splice(index, 1);
    };
    GenericList.prototype.find = function (item) {
        return this.lists.indexOf(item);
    };
    return GenericList;
}());
var myList = new GenericList();
myList.setLists = [1, 2, 3];
console.log(myList.getItem);
//# sourceMappingURL=question2.js.map