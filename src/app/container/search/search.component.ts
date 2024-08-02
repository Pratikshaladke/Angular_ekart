import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchText: string = '';

  //create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //Optional 2nd argumnet of @ViewChild()
  //1. read: Use it to read the different token from the requeried elements.
  //2. static: Determines when the query is resolved
  // true is when the view is initialized (before the first change detection) for the first time.
  // false if you want it to be resolved after every change detection.
  @ViewChild('searchInput') searchInputEl: ElementRef;

  onSearchTextChanged() {}

  updateSearchText(inputEL: HTMLInputElement) {
    // this.searchText = event.target.value;
    // console.log('inputEL',inputEL.value);
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
