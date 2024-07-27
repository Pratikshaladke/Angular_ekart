import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchText: string = 'Mens Shoes';

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }
}
