import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [];
  currentPage = 1;
  totalPages = 0;
  pages: number[] = [];
  newProduct: any = {};
  displayStyle = "none";

  constructor() {}

  ngOnInit(): void {
    this.getProducts();
    this.totalPages = 5;
    this.pages = [1, 2, 3, 4, 5]
  }

  getProducts(): void {
    this.products = [
      {code: 'P0001', name: 'Realme 5 Pro', category: 'Mobile & Gadgets', brand: 'Realme', type: 'Mobile Phones', description: 'REALME 5 PRO 6+128GB'},
      {code: 'P0002', name: 'Nokia 2.3', category: 'Mobile & Gadgets', brand: 'Nokia', type: 'Mobile Phones', description: 'Cyan Green'},
      {code: 'P0003', name: 'Red Dinner Gown', category: 'Fashin', brand: '', type: '', description: '1234'}
    ]
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getProducts();
    }
  }

  openModal(): void {
    this.displayStyle = "block";
  }

  closeModal(): void {
    this.displayStyle = "none";
  }

}

interface Product {
  code: string;
  name: string;
  category: string;
  brand: string;
  type: string;
  description: string;
}
