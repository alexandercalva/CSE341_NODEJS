const books = [];
module.exports = class Book {
    constructor(t){
        this.Title = t;
    }

    save()  {
        books.push(this);
    }

    static fetchAll() {
        return books;
    }
}
