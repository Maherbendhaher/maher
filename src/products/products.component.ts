import { ServiceService } from 'src/services/service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any[] = [];

 constructor(private serviceService: ServiceService){

 }

  ngOnInit() {
    this.serviceService.getProducts()
      .then(products => {
        this.products = products;

        console.log(products);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
