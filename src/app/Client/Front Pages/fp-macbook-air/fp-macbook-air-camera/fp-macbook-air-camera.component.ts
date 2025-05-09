import { Component } from '@angular/core';

// Define an interface for the tab content
interface TabContent {
  title: string;
  image: string;
  text: string;
}

// Define a type for the valid tab keys
type TabKey = 'center' | 'desk';

@Component({
  selector: 'app-fp-macbook-air-camera',
  standalone: true,
  imports: [],
  templateUrl: './fp-macbook-air-camera.component.html',
  styleUrl: './fp-macbook-air-camera.component.css'
})
export class FpMacbookAirCameraComponent {
  activeTab: TabKey = 'center';
  
  content: Record<TabKey, TabContent> = {
    center: {
      title: 'Center Stage',
      image: 'assets/Macbook-Air/macbook-air-camera.jpg',
      text: `Stay in frame during video calls, even as you move around or when more people join your frame.`
    },
    desk: {
      title: 'Desk View',
      image: 'assets/Macbook-Air/macbook-air-camera-2.jpg',
      text: 'Share a top-down view of your workspace while staying onscreen — great if you’re tutoring online or showing off your latest project.'
    }
  };

  changeTab(tab: TabKey) {
    this.activeTab = tab;
  }
}
