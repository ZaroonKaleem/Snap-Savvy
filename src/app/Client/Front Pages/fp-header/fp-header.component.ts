import { AfterViewInit, Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { HostListener } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import  FlowbiteModule  from 'flowbite-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fp-header',
  standalone: true,
  imports: [
    NgIf, 
    CommonModule,
    RouterLink
  ],
  templateUrl: './fp-header.component.html',
  styleUrl: './fp-header.component.css'
})

export class FpHeaderComponent {

  isScrolled = false;

@HostListener('window:scroll', [])
onWindowScroll() {
  const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  this.isScrolled = scrollY > 50; // Adjust value for when the effect kicks in
}

  isMobileMenuOpen = false;
  isAccountDropdownOpen = false;
  isCartDropdownOpen = false;
  isCategoriesDropdownOpen = false;

  // isCategoriesDropdownOpen = false;
toggleCategoriesDropdown() {
  this.isCategoriesDropdownOpen = !this.isCategoriesDropdownOpen;
}

  categories = [
    {
      name: 'Electronics',
      subcategories: [
        { name: 'Smartphones', href: '#' },
        { name: 'Laptops', href: '#' },
        { name: 'Headphones', href: '#' },
        { name: 'Cameras', href: '#' }
      ]
    },
    {
      name: 'Fashion',
      subcategories: [
        { name: "Men's Clothing", href: '#' },
        { name: "Women's Clothing", href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Shoes', href: '#' }
      ]
    },
    {
      name: 'Home & Garden',
      subcategories: [
        { name: 'Furniture', href: '#' },
        { name: 'Kitchen', href: '#' },
        { name: 'Decor', href: '#' },
        { name: 'Gardening', href: '#' }
      ]
    }
  ];

  cartItems = [
    { name: 'Wireless Headphones', price: 99.99, quantity: 1, image: 'https://via.placeholder.com/50' },
    { name: 'Smart Watch', price: 199.99, quantity: 1, image: 'https://via.placeholder.com/50' }
  ];

  get cartTotal() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  get cartItemCount() {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleAccountDropdown() {
    this.isAccountDropdownOpen = !this.isAccountDropdownOpen;
  }

  toggleCartDropdown() {
    this.isCartDropdownOpen = !this.isCartDropdownOpen;
  }

  // toggleCategoriesDropdown() {
  //   this.isCategoriesDropdownOpen = !this.isCategoriesDropdownOpen;
  // }
}