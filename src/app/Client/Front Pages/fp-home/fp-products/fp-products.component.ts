import { AfterViewInit, Component } from '@angular/core';
declare const lucide: any;

@Component({
  selector: 'app-fp-products',
  standalone: true,
  imports: [],
  templateUrl: './fp-products.component.html',
  styleUrl: './fp-products.component.css'
})
export class FpProductsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Initialize Lucide icons after view has been rendered
    if (lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons();
    } else {
      console.warn('Lucide not loaded or createIcons function missing.');
    }
  }
}
