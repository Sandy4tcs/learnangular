import { Component } from '@angular/core';
import { BookItemComponent } from './component.book-item';
import { BookDataService } from './service.book-data';


@Component({
  selector: 'app',
  templateUrl: './partials/app.html',
  styleUrls: [ "./css/app.css" ] 
})

export class AppComponent {
  initialQuery: string = 'Computer Books';
  bookList;
  searchList;
  currentBook;

  constructor(private bookDataService: BookDataService) {}

  ngOnInit() {
      this.getBooks(this.initialQuery);
  }

  showBookDetails(book) {
    this.currentBook = book;
  }

  searchBook(query) {
    if (query.length > 1) {
      this.bookDataService.search(query).subscribe(
            data => this.searchList = data
      );
    }
  }

  getBooks(initialQuery) {
        this.initialQuery = initialQuery;
        this.bookDataService.search(initialQuery).subscribe(
            data => this.bookList = data.items
        );
    }
}