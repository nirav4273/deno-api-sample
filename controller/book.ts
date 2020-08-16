interface Book {
    id: number;
    name: string;
}

const books: Book[] = [
    {
        "id": 1,
        "name":"Books"
    },
    {
        "id": 2,
        "name":"Books 2"
    }
];

class BookController {
    constructor() {}

    async getBooks() {
        return books;
    }

    async bookInfo(id: number) {
        return books.find((x) => x.id === id); 
    }

    async create(book: Book) {
        return [book, ...books];
    }
}

export default BookController;