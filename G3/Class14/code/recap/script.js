// Create class Book
class Book {
    constructor(title, publicationYear, author) {
        this.title = title;
        this.publicationYear = publicationYear;
        this.author = author;
    }

    set title(title) {
        if (typeof title === 'string' && title.trim() !== '') {
            this._title = title;
        } else {
            console.error('Invalid title. Title must be a string.')
        }
    }

    set publicationYear(publicationYear) {
        if (typeof publicationYear === 'number' && publicationYear > 0) {
            this._publicationYear = publicationYear;
        }
    }

    assignBookToAuthor () {
        if (this.author) {
            this.author.addBook(this);
        }
    }
}



// Create class Author
class Author {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    set books(books) {
        this._books = books.filter(book => book instanceof Book)
    }

    set name(name) {
        if (typeof name === 'string' && name.trim() !== '') {
            this._name = name;
        }
    }

    addBook(book) {
        this._books.push(book);
    }

    publishNewBook(title, publicationYear) {
        const newBook = new Book(title, publicationYear, this);
        newBook.assignBookToAuthor();
    }

}

const lavTolstoj = new Author('Lav Tolstoj')

// book1 won't be added to lavTolstoj's books array
const book1 = new Book('Ana Karenina', 1980, lavTolstoj );

// it must be added explicitly using a proper method
book1.assignBookToAuthor();

const vojnaIMir = new Book('Vojna i Mir', 1970, lavTolstoj);

let youth = new Book('Youth', 1857, lavTolstoj);
youth.assignBookToAuthor();


lavTolstoj.publishNewBook('The Devil', 1911);

