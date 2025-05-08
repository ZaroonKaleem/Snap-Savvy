import { Component } from '@angular/core';
import { FpAboutHeroComponent } from './fp-about-hero/fp-about-hero.component';
import { FpTeamComponent } from './fp-team/fp-team.component';

@Component({
  selector: 'app-fp-about',
  standalone: true,
  imports: [
    FpAboutHeroComponent,
    FpTeamComponent
  ],
  templateUrl: './fp-about.component.html',
  styleUrl: './fp-about.component.css'
})
export class FpAboutComponent {

}
