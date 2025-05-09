import { Component } from '@angular/core';
import { FpMacbookAirHeroComponent } from './fp-macbook-air-hero/fp-macbook-air-hero.component';
import { FpMacbookAirAppleIntelligenceComponent } from './fp-macbook-air-apple-intelligence/fp-macbook-air-apple-intelligence.component';
import { FpMacbookAirDesignComponent } from './fp-macbook-air-design/fp-macbook-air-design.component';
import { FpMacbookAirM4ChipComponent } from './fp-macbook-air-m4-chip/fp-macbook-air-m4-chip.component';
import { FpMacbookAirPrivacyComponent } from './fp-macbook-air-privacy/fp-macbook-air-privacy.component';
import { FpMacbookAirDreamComponent } from './fp-macbook-air-dream/fp-macbook-air-dream.component';
import { FpMacbookAirMacosComponent } from './fp-macbook-air-macos/fp-macbook-air-macos.component';
import { FpMacbookAirDisplayComponent } from './fp-macbook-air-display/fp-macbook-air-display.component';
import { FpMacbookAirCameraComponent } from './fp-macbook-air-camera/fp-macbook-air-camera.component';
import { FpMacbookAirPortsComponent } from './fp-macbook-air-ports/fp-macbook-air-ports.component';
import { FpMacbookAirSecurityComponent } from './fp-macbook-air-security/fp-macbook-air-security.component';
import { FpMacbookAirUpgradeComponent } from './fp-macbook-air-upgrade/fp-macbook-air-upgrade.component';

@Component({
  selector: 'app-fp-macbook-air',
  standalone: true,
  imports: [
    FpMacbookAirHeroComponent,
    FpMacbookAirAppleIntelligenceComponent,
    FpMacbookAirDesignComponent,
    FpMacbookAirM4ChipComponent,
    FpMacbookAirPrivacyComponent,
    FpMacbookAirDreamComponent,
    FpMacbookAirMacosComponent,
    FpMacbookAirDisplayComponent,
    FpMacbookAirCameraComponent,
    FpMacbookAirPortsComponent,
    FpMacbookAirSecurityComponent,
    FpMacbookAirUpgradeComponent
  ],
  templateUrl: './fp-macbook-air.component.html',
  styleUrl: './fp-macbook-air.component.css'
})
export class FpMacbookAirComponent {

}
