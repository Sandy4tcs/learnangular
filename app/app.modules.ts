import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BookDataService } from './service.book-data'
import { AppComponent } from './component.app';
import { BookItemComponent } from './component.book-item';
import { BookDetailsComponent } from './component.book-details';

import { SearchPipe } from './pipe.search';

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  declarations: [
    AppComponent, BookItemComponent, BookDetailsComponent, SearchPipe
  ],
  providers: [ BookDataService ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}