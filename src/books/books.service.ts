import { Injectable } from '@nestjs/common';
import { match } from 'assert';

@Injectable()
export class BooksService {
    private books = [];
    

  findAll() {
    return this.books;
  }

  findOne(id: string) {
    return this.books.find(book => book.id === id);
  }

    create(book: any) {
        const bookId = Math.random().toString();
        let items = { bookId, book }
    this.books.push(items);
    return items;
  }

  update(id: string, updatedBook: any) {
    const bookIndex = this.books.findIndex(book => book.id === id);
    // if (bookIndex !== -1) {
      this.books[bookIndex] = updatedBook;
      return updatedBook;
    // }
    // return null;
  }

  remove(id: string) {
    const bookIndex = this.books.findIndex(book => book.id === id);
    // if (bookIndex !== -1) {
      const deletedBook = this.books.splice(bookIndex, 1);
      return deletedBook[0];
    // }
    // return null;
  }
}
