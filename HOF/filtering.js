const books = [
    { title: "Book One", author: "John Doe", year: 2005 },
    { title: "Book Two", author: "Jane Smith", year: 2015 },
    { title: "Book Three", author: "Emily Davis", year: 2020 }
];

const filteredBooks = books
    .filter(book => book.year > 2010)
    .map(book => ({
        ...book,
        author: book.author.toUpperCase()
    }));

console.log("Filtered Books:", filteredBooks);
