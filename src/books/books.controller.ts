import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookRequest } from './models';

@Controller('books')
export class BooksController {

    constructor(private service: BooksService) { }
    @Get()
    async getBooks() {
        return ({ books: await this.service.getBooks() })
    }

    @Post()
    async addBook(@Body() book: BookRequest) {
        if (book.title.toLowerCase() === 'the stand' && book.author.toLowerCase() === 'king') {
            return await new Promise((res, rej) => {
                setTimeout(() => rej(new BadRequestException('Really?')), 3000)
            })
        } else {
            return await this.service.addBook(book);
        }
    }
}
