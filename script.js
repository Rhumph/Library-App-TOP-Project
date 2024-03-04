const myLibrary = [
    ["Chaos", "Tom O'Neill", "Investigative Journalism", "528", "Have Read"],
    ["Breath", "James Nestor", "Health/Investigative", "304", "Have Read"],
    ["The Gulag archipelago", "Aleksandr Solzhenitsyn", "History/Politics", "1948", "Currently Reading"],
    ["1984", "George Orwell", "Dystopian Fiction", "328", "Have Read"]
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
    this.bookLength = [bookLength + " Pages"];
    this.bookReadStatus = bookReadStatus;

}


// Function that builds a card for each book
function createBookCards (book){ 
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bTitle = document.createElement("h3");
    bTitle.classList.add("BCtitle");
    bTitle.textContent = [book[0]];

    const bAuthor = document.createElement("p");
    bAuthor.classList.add("BCauthor");
    bAuthor.textContent = [book[1]];

    const bGenre = document.createElement("p");
    bGenre.classList.add("BCgenre");
    bGenre.textContent = [book[2]];

    const bLength = document.createElement("p");
    bLength.classList.add("BCLength");
    bLength.textContent = [book[3]]

    const bReadStatus = document.createElement("p");
    bReadStatus.classList.add("BCreadstatus");
    bReadStatus.textContent = [book[4]]

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

    const bookName = newBookTitle.textContent;
    const bookAuthor = newBookAuthor.value;
    const bookGenre = newBookGenre.value;
    const bookLength = newBookLength.value;
    const bookReadStatus = newBookReadStatus.value;



    const bookToAdd = new book(bookName, bookAuthor, bookGenre, bookLength, bookReadStatus);
    myLibrary.push(bookToAdd);
    createBookCards(bookToAdd);

    // myLibrary.forEach(book => {
    //     console.log(book.bookTitle);
    // });

}

submitBtn.addEventListener("click", addBookToLibrary);