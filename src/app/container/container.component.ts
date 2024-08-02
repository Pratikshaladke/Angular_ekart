import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ConatinerComponent {
 listOfStrings:string[] = ["Mark","Steve","John","Sarah"];

 searchText:string ='';

 @ViewChild(ProductListComponent) productListComponent: ProductListComponent

 setSearchText(value:string){
  this.searchText = value
 }
}
