import { Component } from '@angular/core';

// Define an interface for the tab content
interface TabContent {
  title: string;
  image: string;
  text: string;
}

// Define a type for the valid tab keys
type TabKey = 'prototype' | 'writing' | 'research';

@Component({
  selector: 'app-fp-macbook-air-apple-intelligence',
  standalone: true,
  imports: [],
  templateUrl: './fp-macbook-air-apple-intelligence.component.html',
  styleUrl: './fp-macbook-air-apple-intelligence.component.css'
})
export class FpMacbookAirAppleIntelligenceComponent {  
  activeTab: TabKey = 'prototype';
  
  content: Record<TabKey, TabContent> = {
    prototype: {
      title: 'Aerial Agility: Scientific Discoveries in Dragonfly Flight',
      image: 'assets/Macbook-Air/macbook-air-prototype.png',
      text: `Use Apple Intelligence to proofread your text and rewrite different versions until the tone and wording are just right, and summarize selected text with a click. Or use Compose to tap directly into ChatGPT to create content from scratch.`
    },
    writing: {
      title: 'Image Playground',
      image: 'assets/Macbook-Air/macbook-air-image-playground.jpg',
      text: `Create fun, original images based on a description, a concept, or even a person from your Photos library.`
    },
    research: {
      title: 'Siri',
      image: 'assets/Macbook-Air/macbook-air-siri.jpg',
      text: 'With an all-new design, richer language understanding, and expansive product knowledge about your devices, Siri is more helpful than ever. Siri can even tap into ChatGPT to bring additional answers right to you.'
    }
  };

  changeTab(tab: TabKey) {
    this.activeTab = tab;
  }
}
