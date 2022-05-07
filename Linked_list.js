var Linked_List = /** @class */ (function () {
    function Linked_List() {
        var _this = this;
        this.add = function (data) {
            var node = { data: data, next: null };
            var current = _this.head;
            if (!current) {
                _this.head = node;
                _this.length++;
                return node;
            }
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            _this.length++;
            return node;
        };
        this.get = function (index) {
            if (index > _this.length) {
                return "Node is not present at this position";
            }
            var current = _this.head, count = 0;
            while (count < index - 1) {
                current = current.next;
                count++;
            }
            return current;
        };
        this.remove = function (index) {
            var current = _this.head, count = 0, prev = null;
            if (index > _this.length) {
                return "Node is not present at this position";
            }
            if (index === 0) {
                _this.head = current.head;
                _this.length--;
                return _this.head;
            }
            while (count < index - 1) {
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = current.next;
            current = null;
            _this.length--;
            return _this.head;
        };
        this.length = 0;
        this.head = null;
    }
    return Linked_List;
}());
var ll = new Linked_List();
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
console.log(ll.remove(2));
