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
        title: "The Gulag archipelago",
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

// Event Listeners
submitBtn.addEventListener("click", addBookToLibrary);
// Add a single listener to a static parent element
document.getElementById("main-content").addEventListener("click", (event) => {
    if (event.target.classList.contains("Bdeletebtn")) {
      deleteCard(event);
    } else if (event.target.classList.contains("Breadbtn")) {
      toggleRead(event);
    }
  });
  

function deleteCard(event) {
    const card = event.target.closest(".book-card");
    const hiddenIndex = card.querySelector(".hiddenElement").textContent;

    console.log(hiddenIndex);

    // Remove from myLibrary array 
    myLibrary = myLibrary.filter((book) => book.libIndex !== parseInt(hiddenIndex));

    // Remove the card from the DOM
    card.remove();
    console.log(myLibrary);
}

// Book Constructor
function book(bookTitle, bookAuthor, bookGenre, bookLength, bookReadStatus, libIndex) {

    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookGenre = bookGenre;
    this.bookLength = bookLength + " Pages";
    this.bookReadStatus = bookReadStatus;
    this.libIndex = libIndex;

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

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("Bdeletebtn")
    deleteButton.textContent = "Delete"

    const readButton = document.createElement("button")
    readButton.classList.add("Breadbtn")
    readButton.textContent = "Read";

    const hiddenIndex = document.createElement("div")
    hiddenIndex.classList.add("hiddenElement")
    hiddenIndex.textContent = book.libIndex;

    const deleteButtons = document.querySelectorAll(".Bdeletebtn");

    const readButtons = document.querySelectorAll(".Breadbtn");

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

 function toggleRead (event) { 
    // This will toggle the read status between Read List, Reading, and Have Read.

    console.log("toggleRead function reached")

    
    const card = event.target.parentNode.querySelector(".BCreadstatus");
    const cardIndex = event.target.parentNode.querySelector(".hiddenElement").textContent;

    switch (card.textContent) {

        case "Read List":
            console.log("RL")
            card.textContent = "Reading";
            console.log(cardIndex);
            myLibrary[parseInt(cardIndex)].readStatus = "Reading";
            break;

        case "Reading":
            console.log("R")
            card.textContent = "Have Read";
            console.log(cardIndex);
            myLibrary[parseInt(cardIndex)].readStatus = "Have Read";
            break;

        case "Have Read":
            console.log("HR")
            card.textContent = "Read List";
            console.log(cardIndex);
            myLibrary[parseInt(cardIndex)].readStatus = "Read List";
            break;

        default:
            // Handle unexpected cases

            console.log("default reached")
            break;
    }

    console.log(myLibrary)
}

// Function that creates a book object from form inputs
function addBookToLibrary() {

    const title = newBookTitle.value;
    const author = newBookAuthor.value;
    const genre = newBookGenre.value;
    const length = newBookLength.value;
    const readStatus = newBookReadStatus.value;
    const libIndex = myLibrary[myLibrary.length - 1].libIndex + 1;

    const bookToAdd = { title, author, genre, length, readStatus, libIndex };
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