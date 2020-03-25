export interface BooksResponse {
    id: string;
    title: string;
    author: string;
}

export class BookRequest {
    title: string;
    author: string;
}