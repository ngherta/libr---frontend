export class Book {

  id: number;
  title: string;
  authors: Array<string>;
  publisher: string;
  publishedDate: Date;
  description: string; /*add tio html description*/
  industryIdentifiers: { [key: string]: string; } = {};
  pageCount: number;
  categories: Array<string>;
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  imageLinks: { [key: string]: string; } = {};
  language: string;
  previewLink: string;

}
