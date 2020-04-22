/*export */class Book {
  constructor (title, author, pages, currentPage, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  };
  readBook(page) {
    
    if (page < 1 || page > this.pages) {
    
      return 0;
    } else if (page >= 1 && page < this.pages) {
      
      this.currentPage = page;
      return 1;
    } else if (page === this.pages) {
      
      this.currentPage = page;
      this.read = true;
      return 1;
    }
  }
}

let bookOne = new Book (
  '1984',
  'George Orwell',
  408,
  0,
  false
);

let bookTwo = new Book (
'Millenium 1 | Les hommes qui n\'aimaient pas les femmes',
'Stieg Larsson',
705,
0,
false
);

let bookThree = new Book (
'Tintin | Objectif Lune',
'Herge',
61,
0,
false
);

let bookFour = new Book (
  'Chroniques martiennes',
  'Ray Bradbury',
  336,
  0,
  false
);

bookOne.readBook(324);
bookTwo.readBook(31);
bookThree.readBook(61);

console.log(bookOne);
console.log(bookTwo);
console.log(bookThree);
console.log(bookFour);

/*export */const books = [];
