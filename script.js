const myLibrary = [
    ["Chaos", "Tom O'Neill", "Investigative Journalism", "528", "Have Read"],
    ["Breath", "James Nestor", "Health/Investigative", "304", "Have Read"],
    ["The Gulag archipelago", "Aleksandr Solzhenitsyn", "History/Politics", "1948", "Currently Reading"],
    ["1984", "George Orwell", "Dystopian Fiction", "328", "Have Read"]
];

const newBookTitle = document.getElementById("bookTitle");
const newBookAuthor = document.getElementById("bookAuthor");
const newBookGenre = document.getElementById("bookGenre");
const newBookLength = document.getElementById("bookLength");
const newBookReadStatus = document.getElementById("bookReadStatus");
const submitBtn = document.getElementById("oneBtn");

function Book(bookTitle, bookAuthor, bookGenre, bookLength, bookReadStatus) {

    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookGenre = bookGenre;
    this.bookLength = [bookLength + " Pages"];
    this.bookReadStatus = bookReadStatus;

}

myLibrary.forEach(Book => {
    Book.forEach(attribute => {
        console.log(attribute)}
    )
});

// function addBookToLibrary() {

//     const bookName = newBookTitle.value;
//     const bookToAdd = new Book(bookName);
//     myLibrary.push(bookToAdd);
//     myLibrary.forEach(book => {
//         console.log(book.bookTitle);
//     });

// }

// submitBtn.addEventListener("click", addBookToLibrary);