var Member = /** @class */ (function () {
    function Member() {
    }
    return Member;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    return Inventory;
}());
var Secretary = /** @class */ (function () {
    function Secretary() {
        Inventory.totalBooks = [
            "homes",
            "hansel & gretel",
            "Ghost",
            "Thriller world",
            "Hobs",
            "Lost World"
        ];
        Inventory.availBooks = Inventory.totalBooks;
    }
    return Secretary;
}());
var Librarian = /** @class */ (function () {
    function Librarian() {
    }
    Librarian.prototype.trackMember = function (member, bookName) {
        if (Inventory.memberTrack[member.memberId] != false) {
            member.borrowedBook.push(bookName);
            console.log("you have borrowed: " + bookName);
        }
        else {
            console.log("You can not borrow any book");
        }
        if (member.borrowedBook.length >= 4) {
            Inventory.memberTrack[member.memberId] = false;
        }
    };
    return Librarian;
}());
var MainPortal = /** @class */ (function () {
    function MainPortal() {
        this.bookfine = 100;
        this.secretary = new Secretary();
        this.librarian = new Librarian();
    }
    MainPortal.prototype.setBookInfo = function (lendBookName) {
        var bookName = lendBookName;
        var borrowDate = new Date();
        var returnDate = new Date();
        returnDate.setDate(returnDate.getDate() + 7);
        var borrowInfo = {
            bookName: bookName,
            borrowedDate: borrowDate,
            returnDate: returnDate
        };
        return borrowInfo;
    };
    MainPortal.prototype.lendBooks = function (member, bookName) {
        var bookInfo = this.setBookInfo(bookName);
        this.librarian.trackMember(member, bookInfo);
    };
    MainPortal.prototype.checkMember = function (member) {
        var _this = this;
        var currDate = new Date();
        member.borrowedBook.forEach(function (element) {
            if (element.returnDate > currDate) {
                member.fine = member.fine + _this.bookfine;
            }
        });
    };
    return MainPortal;
}());
//# sourceMappingURL=Question3.js.map