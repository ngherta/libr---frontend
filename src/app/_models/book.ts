export class Book {
  id: string;
  title: string;
  authors: Array<string>;
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: { [key: string]: string; } = {};
  pageCount: number;
  categories: Array<string>;
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  imageLinks: { [key: string]: string; } = {};
  language: string;
  previewLink: string;
  vote: number;

}
