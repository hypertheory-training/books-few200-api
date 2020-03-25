import { Injectable } from '@nestjs/common';
import { BooksResponse, BookRequest } from './models';
import * as cuid from 'cuid';
@Injectable()
export class BooksService {
    private books: BooksResponse[] = [
        { id: '1', title: 'Walden', author: 'Thoreau' },
        { id: '2', title: 'Nature', author: 'Emerson' },
        { id: '3', title: 'Reality', author: 'Kingsley' }
    ]

    async addBook(book: BookRequest) {
        var addMe: BooksResponse = {
            ...book,
            id: cuid()
        };
        this.books.push(addMe);
        return new Promise((res) => {
            setTimeout(() => res(addMe), 3000)
        })
    }
    async getBooks() {
        return await new Promise((res) => {
            setTimeout(() => res(this.books), 3000)
        })
    }
}
