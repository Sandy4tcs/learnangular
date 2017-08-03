import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookDataService {
    constructor(private http: Http) {}

    search(query) {
        let searchParams = new URLSearchParams();
        searchParams.append('q', query);
        return this.http.get('https://www.googleapis.com/books/v1/volumes',  { search: searchParams })
            .map(data => {
                return data.json();
            });
    }
}