import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent /*implements OnInit*/{

  products: any[]= [];;
  constructor() { } 
  
  // ngOnInit(): void {
  //   this.productDataServiceService.getProducts().subscribe(data => {
  //     this.products = data;
  //   });
  // }
}
