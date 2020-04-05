class GenericList<Type> {
  private lists: Type[];

  constructor(item?: Type) {
    this.lists = [];
    if (item) {
      this.lists.push(item);
    }
  }

  set setLists(items: Type[]) {
    this.lists = items;
  }

  get getItem() {
    return this.lists;
  }

  add(item: Type) {
    this.lists.push(item);
  }

  remove(item: Type) {
    let index = this.find(item);
    this.lists.splice(index, 1);
  }

  find(item) {
    return this.lists.indexOf(item);
  }
}

const myList = new GenericList<number>();

myList.setLists = [1, 2, 3];

console.log(myList.getItem);
