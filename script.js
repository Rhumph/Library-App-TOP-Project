let myLibrary = [
    {
        title: "Chaos",
        author: "Tom O'Neill",
        genre: "Investigative Journalism",
        length: "528",
        readStatus: "Have Read",
        libIndex: 0
    },
    {
        title: "Breath",
        author: "James Nestor",
        genre: "Health/Investigative",
        length: "304",
        readStatus: "Have Read",
        libIndex: 1
    },
    {
        title: "The Gulag Archipelago",
        author: "Aleksandr Solzhenitsyn",
        genre: "History/Politics",
        length: "1948",
        readStatus: "Currently Reading",
        libIndex: 2
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian Fiction",
        length: "328",
        readStatus: "Have Read",
        libIndex: 3
    }
];

// bif elements
const newBookTitle = document.getElementById("bookTitle");
const newBookAuthor = document.getElementById("bookAuthor");
const newBookGenre = document.getElementById("bookGenre");
const newBookLength = document.getElementById("bookLength");
const newBookReadStatus = document.getElementById("bookReadStatus");
const submitBtn = document.getElementById("oneBtn");

class LibraryBook {
    constructor(bookTitle, bookAuthor, bookGenre, bookLength, bookReadStatus, libIndex) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookGenre = bookGenre;
        this.bookLength = bookLength + " Pages";
        this.bookReadStatus = bookReadStatus;
        this.libIndex = libIndex;
    }

    static createBookCards(book) {
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

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("Bdeletebtn");
        deleteButton.textContent = "Delete";

        const readButton = document.createElement("button");
        readButton.classList.add("Breadbtn");
        readButton.textContent = "Read";

        const hiddenIndex = document.createElement("div");
        hiddenIndex.classList.add("hiddenElement");
        hiddenIndex.textContent = book.libIndex;

        bookCard.appendChild(bTitle);
        bookCard.appendChild(bAuthor);
        bookCard.appendChild(bGenre);
        bookCard.appendChild(bLength);
        bookCard.appendChild(bReadStatus);
        bookCard.appendChild(deleteButton);
        bookCard.appendChild(readButton);
        bookCard.appendChild(hiddenIndex);

        const bookCards = document.getElementById("main-content");
        bookCards.appendChild(bookCard);
    }

    static toggleRead(event) {
        // This will toggle the read status between Read List, Reading, and Have Read.
        console.log("toggleRead function reached");

        const card = event.target.parentNode.querySelector(".BCreadstatus");
        const cardIndex = event.target.parentNode.querySelector(".hiddenElement").textContent;

        switch (card.textContent) {
            case "Read List":
                console.log("RL");
                card.textContent = "Reading";
                console.log(cardIndex);
                myLibrary[parseInt(cardIndex)].readStatus = "Reading";
                break;

            case "Reading":
                console.log("R");
                card.textContent = "Have Read";
                console.log(cardIndex);
                myLibrary[parseInt(cardIndex)].readStatus = "Have Read";
                break;

            case "Have Read":
                console.log("HR");
                card.textContent = "Read List";
                console.log(cardIndex);
                myLibrary[parseInt(cardIndex)].readStatus = "Read List";
                break;

            default:
                // Handle unexpected cases
                console.log("default reached");
                break;
        }

        console.log(myLibrary);
    }

    static addBookToLibrary() {
        const title = newBookTitle.value;
        const author = newBookAuthor.value;
        const genre = newBookGenre.value;
        const length = newBookLength.value;
        const readStatus = newBookReadStatus.value;
        const libIndex = myLibrary[myLibrary.length - 1] ? myLibrary[myLibrary.length - 1].libIndex + 1 : 0;

        const bookToAdd = { title, author, genre, length, readStatus, libIndex };
        myLibrary.push(bookToAdd);
        console.log(myLibrary[myLibrary.length - 1]);
        console.log(myLibrary);
        LibraryBook.createBookCards(myLibrary[myLibrary.length - 1]);

        newBookTitle.value = '';
        newBookAuthor.value = '';
        newBookGenre.value = '';
        newBookLength.value = '';
        newBookReadStatus.value = '';
    }

    static deleteCard(event) {
        const card = event.target.closest(".book-card");
        const hiddenIndex = card.querySelector(".hiddenElement").textContent;
    
        console.log(hiddenIndex);
    
        // Remove from myLibrary array
        myLibrary = myLibrary.filter((book) => book.libIndex !== parseInt(hiddenIndex));
    
        // Remove the card from the DOM
        card.remove();
        console.log(myLibrary);
    }
}

// Event Listeners
submitBtn.addEventListener("click", LibraryBook.addBookToLibrary);
// Add a single listener to a static parent element
document.getElementById("main-content").addEventListener("click", (event) => {
    if (event.target.classList.contains("Bdeletebtn")) {
        LibraryBook.deleteCard(event);
    } else if (event.target.classList.contains("Breadbtn")) {
        LibraryBook.toggleRead(event);
    }
});

// On window load, create book cards for all books in the library
window.onload = function () {
    myLibrary.forEach(book => LibraryBook.createBookCards(book));
};
