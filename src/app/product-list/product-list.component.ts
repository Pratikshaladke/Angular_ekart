import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  name = 'John Doe';
  addToCart: number = 0;
  product = {
    name: 'iPhone X',
    price: 999,
    color: 'Red',
    discount: 8.5,
    inStock: 10,
    pImage: 'assets/images/phone.jpeg',
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  onNameChange(event: any) {
    this.name = event.target.value;
  }

  decrementCartValue() {
    if(this.addToCart > 0){
      this.addToCart--;
    }
   
  }

  incrementCartValue() {
   if(this.addToCart < this.product.inStock){
    this.addToCart++;
   }
  }
}
