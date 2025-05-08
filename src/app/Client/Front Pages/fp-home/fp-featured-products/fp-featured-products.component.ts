import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fp-featured-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fp-featured-products.component.html',
  styleUrl: './fp-featured-products.component.css'
})
export class FpFeaturedProductsComponent {

  selectedSize: string = '14'; // Default selected size
  selectedChip: string = 'all'; // Default selected chip

  selectSize(size: string) {
    this.selectedSize = size;
    // You can emit this to parent if needed
  }

  selectChip(chip: string) {
    this.selectedChip = chip;
    // You can emit this to parent if needed
  }

}
