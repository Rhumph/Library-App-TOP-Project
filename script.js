// const myLibrary = [
//     ["Chaos", "Tom O'Neill", "Investigative Journalism", "528", "Have Read"],
//     ["Breath", "James Nestor", "Health/Investigative", "304", "Have Read"],
//     ["The Gulag archipelago", "Aleksandr Solzhenitsyn", "History/Politics", "1948", "Currently Reading"],
//     ["1984", "George Orwell", "Dystopian Fiction", "328", "Have Read"]
// ];

const myLibrary = [
    {
        title: "Chaos",
        author: "Tom O'Neill",
        genre: "Investigative Journalism",
        length: "528",
        readStatus: "Have Read"
    },
    {
        title: "Breath",
        author: "James Nestor",
        genre: "Health/Investigative",
        length: "304",
        readStatus: "Have Read"
    },
    {
        title: "The Gulag archipelago",
        author: "Aleksandr Solzhenitsyn",
        genre: "History/Politics",
        length: "1948",
        readStatus: "Currently Reading"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian Fiction",
        length: "328",
        readStatus: "Have Read"
    }
];


// bif elements
const newBookTitle = document.getElementById("bookTitle");
const newBookAuthor = document.getElementById("bookAuthor");
const newBookGenre = document.getElementById("bookGenre");
const newBookLength = document.getElementById("bookLength");
const newBookReadStatus = document.getElementById("bookReadStatus");
const submitBtn = document.getElementById("oneBtn");

// Book Constructor
function book(bookTitle, bookAuthor, bookGenre, bookLength, bookReadStatus) {

    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookGenre = bookGenre;
    this.bookLength = bookLength + " Pages";
    this.bookReadStatus = bookReadStatus;

}

book.prototype.bookInfoArray = function () {
    return [this.bookTitle, this.bookAuthor, this.bookGenre, this.bookLength, this.bookReadStatus];
}

// Function that builds a card for each book
function createBookCards(title, author, genre, length, readstatus) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bTitle = document.createElement("h3");
    bTitle.classList.add("BCtitle");
    bTitle.textContent = title;

    const bAuthor = document.createElement("p");
    bAuthor.classList.add("BCauthor");
    bAuthor.textContent = book.bookAuthor;

    const bGenre = document.createElement("p");
    bGenre.classList.add("BCgenre");
    bGenre.textContent = book.bookGenre;

    const bLength = document.createElement("p");
    bLength.classList.add("BCLength");
    bLength.textContent = book.bookLength;

    const bReadStatus = document.createElement("p");
    bReadStatus.classList.add("BCreadstatus");
    bReadStatus.textContent = book.bookReadStatus;

    bookCard.appendChild(bTitle);
    bookCard.appendChild(bAuthor);
    bookCard.appendChild(bGenre);
    bookCard.appendChild(bLength);
    bookCard.appendChild(bReadStatus);

    const bookCards = document.getElementById("main-content");
    bookCards.appendChild(bookCard);

}

// LOOK HERE WHEN YOUR RETURN - You're having dramas parsing the books into the create cards function.

function addBookToLibrary() {

    const bookName = newBookTitle.value;
    const bookAuthor = newBookAuthor.value;
    const bookGenre = newBookGenre.value;
    const bookLength = newBookLength.value;
    const bookReadStatus = newBookReadStatus.value;


    // [bookName, bookAuthor, bookGenre, bookLength, bookReadStatus];
    const bookToAdd = new book(bookName, bookAuthor, bookGenre, bookLength, bookReadStatus);
    myLibrary.push(bookToAdd);
    bookToAdd.bookInfoArray()
    createBookCards(myLibrary[myLibrary.length - 1]);

}

submitBtn.addEventListener("click", addBookToLibrary, console.log(myLibrary));