class Member {
  memberId: number;
  name: string;
  borrowedBook: BookBorrowInfo[];
  fine: number;
}

interface BookBorrowInfo {
  bookName: string;
  borrowedDate: Date;
  returnDate: Date;
}

class Inventory {
  public static totalBooks: string[];
  public static availBooks: string[];
  public static memberTrack: MemberTrack;
}

interface MemberTrack {
  [index: string]: boolean;
}

class Secretary {
  constructor() {
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
}

class Librarian {
  trackMember(member: Member, bookName: BookBorrowInfo) {
    if (Inventory.memberTrack[member.memberId] != false) {
      member.borrowedBook.push(bookName);
      console.log("you have borrowed: " + bookName);
    } else {
      console.log("You can not borrow any book");
    }

    if (member.borrowedBook.length >= 4) {
      Inventory.memberTrack[member.memberId] = false;
    }
  }
}

class MainPortal {
  secretary;
  librarian;
  bookfine: number = 100;
  constructor() {
    this.secretary = new Secretary();
    this.librarian = new Librarian();
  }

  setBookInfo(lendBookName: string): BookBorrowInfo {
    let bookName = lendBookName;
    let borrowDate = new Date();
    let returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 7);

    let borrowInfo: BookBorrowInfo = {
      bookName: bookName,
      borrowedDate: borrowDate,
      returnDate: returnDate
    };

    return borrowInfo;
  }

  lendBooks(member: Member, bookName: string) {
    let bookInfo = this.setBookInfo(bookName);
    this.librarian.trackMember(member, bookInfo);
  }

  checkMember(member: Member) {
    let currDate = new Date();
    member.borrowedBook.forEach(element => {
      if (element.returnDate > currDate) {
        member.fine = member.fine + this.bookfine;
      }
    });
  }
}
