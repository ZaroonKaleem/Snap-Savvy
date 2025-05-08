import { Component } from '@angular/core';
import { FpBannerComponent } from './fp-banner/fp-banner.component';
import { FpProductsComponent } from './fp-products/fp-products.component';
import { FpTopSellingComponent } from './fp-top-selling/fp-top-selling.component';
import { FpFeaturedProductsComponent } from './fp-featured-products/fp-featured-products.component';
import { FpTestimonialsComponent } from './fp-testimonials/fp-testimonials.component';
import { FpWhyUsComponent } from './fp-why-us/fp-why-us.component';
import { FpCtaComponent } from './fp-cta/fp-cta.component';

@Component({
  selector: 'app-fp-home',
  standalone: true,
  imports: [
    FpBannerComponent, 
    FpProductsComponent, 
    FpTopSellingComponent, 
    FpFeaturedProductsComponent,
    FpTestimonialsComponent,
    FpWhyUsComponent,
    FpCtaComponent
  ],
  templateUrl: './fp-home.component.html',
  styleUrl: './fp-home.component.css'
})
export class FpHomeComponent {

}
