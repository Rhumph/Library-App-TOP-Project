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

// Event Listeners
submitBtn.addEventListener("click", addBookToLibrary);

// Book Constructor
function book(bookTitle, bookAuthor, bookGenre, bookLength, bookReadStatus) {

    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookGenre = bookGenre;
    this.bookLength = bookLength + " Pages";
    this.bookReadStatus = bookReadStatus;

}

// Function that builds a card for each book
function createBookCards(book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bTitle = document.createElement("h3");
    bTitle.classList.add("BCtitle");
    bTitle.textContent = book.title;

    const bAuthor = document.createElement("p");
    bAuthor.classList.add("BCauthor");
    bAuthor.textContent = book.author;

    const bGenre = document.createElement("p");
    bGenre.classList.add("BCgenre");
    bGenre.textContent = book.genre;

    const bLength = document.createElement("p");
    bLength.classList.add("BCLength");
    bLength.textContent = book.length;

    const bReadStatus = document.createElement("p");
    bReadStatus.classList.add("BCreadstatus");
    bReadStatus.textContent = book.readStatus;

    bookCard.appendChild(bTitle);
    bookCard.appendChild(bAuthor);
    bookCard.appendChild(bGenre);
    bookCard.appendChild(bLength);
    bookCard.appendChild(bReadStatus);

    const bookCards = document.getElementById("main-content");
    bookCards.appendChild(bookCard);

}

// Function that creates a book object from form inputs
function addBookToLibrary() {

    const title = newBookTitle.value;
    const author = newBookAuthor.value;
    const genre = newBookGenre.value;
    const length = newBookLength.value;
    const readStatus = newBookReadStatus.value;

    const bookToAdd = {title, author, genre, length, readStatus};
    myLibrary.push(bookToAdd);
    console.log(myLibrary[myLibrary.length - 1])
    console.log(myLibrary)
    createBookCards(myLibrary[myLibrary.length - 1])

    newBookTitle.value = '';
    newBookAuthor.value = '';
    newBookGenre.value = '';
    newBookLength.value = '';
    newBookReadStatus.value = '';

}

// Next objective is to create a delete function that will be in each card