import { Component } from '@angular/core';
import { FpMacbookAirHeroComponent } from './fp-macbook-air-hero/fp-macbook-air-hero.component';
import { FpMacbookAirAppleIntelligenceComponent } from './fp-macbook-air-apple-intelligence/fp-macbook-air-apple-intelligence.component';

@Component({
  selector: 'app-fp-macbook-air',
  standalone: true,
  imports: [
    FpMacbookAirHeroComponent,
    FpMacbookAirAppleIntelligenceComponent
  ],
  templateUrl: './fp-macbook-air.component.html',
  styleUrl: './fp-macbook-air.component.css'
})
export class FpMacbookAirComponent {

}
