import { CommonModule, NgIf } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
declare const lucide: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements AfterViewInit {
  dropdownOpen = false;

  @Output() sidebarToggle = new EventEmitter<void>();
  @Input() sidebarCollapsed = false;


toggleSidebar() {
  this.sidebarToggle.emit();
}

  ngAfterViewInit(): void {
    lucide.createIcons();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}