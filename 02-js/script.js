const { faBookSkull } = require("@fortawesome/free-solid-svg-icons");

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(1);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "goated thriller"];
console.log(newGenres);

const updatedBook = { ...book, author: "Ro rizzy" };
console.log(updatedBook);

const x = [1, 2, 3, 4, 5].map((element) => element ** 2);
console.log(x);

const books = getBooks();
const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

console.log(essentialData);

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
books;

const longBookTitles = longBooks.map((book) => book.title);
longBookTitles;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
totalPages;

const mapTitles = books.reduce((arr, book) => {
  arr.push(book.title);
  return arr;
}, []);
mapTitles;

arr = [1, 6, 4, 7, 9, 4, 3, 5, 2];
arr.sort((a, b) => b - a);
arr;
orig = [1, 6, 4, 7, 9, 4, 3, 5, 2];
descArr = orig.slice().sort((a, b) => b - a);
descArr;
orig;

const pageSorted = books.slice().sort((a, b) => a.pages - b.pages);
pageSortedData = pageSorted.map((book) => ({
  title: book.title,
  pages: book.pages,
}));
pageSortedData;

const newBook = {
  id: 6,
  title: "Meditations",
  author: "Marcus Aurellius",
};

const newBooks = [...books, newBook];
newBooks;

const origBookTitles = newBooks
  .filter((book) => book.title != "Meditations")
  .map((book) => book.title);
origBookTitles;

const updateBook = newBooks.map((book) =>
  book.title == "Meditations" ? { ...book, author: "Marcus Aurelius" } : book
);
updateBook;

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

// or

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = (await res).json();

  return data;
}

getTodos().then((res) => console.log(res));
