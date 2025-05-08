import { Component } from '@angular/core';
import { FpHeaderComponent } from '../fp-header/fp-header.component';
import { FpFooterComponent } from '../fp-footer/fp-footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-fp-layout',
  standalone: true,
  imports: [FpHeaderComponent, FpFooterComponent, RouterOutlet],
  templateUrl: './fp-layout.component.html',
  styleUrl: './fp-layout.component.css'
})
export class FpLayoutComponent {

}
