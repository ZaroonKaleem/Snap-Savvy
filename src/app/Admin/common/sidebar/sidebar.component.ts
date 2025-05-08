import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
declare const lucide: any;

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit {

  @Input() collapsed = false;

  constructor(private router: Router) {}

  menuItems = [
    { link: '', icon: 'layout-dashboard', label: 'Home' },
    { link: '/dashboard/products', icon: 'package', label: 'Products' },
    { link: '/dashboard/orders', icon: 'shopping-cart', label: 'Orders' },
    { link: '/dashboard/sales', icon: 'line-chart', label: 'Sales' },
    { link: '/dashboard/customers', icon: 'users', label: 'Customers' },
    { link: '/dashboard/inventory', icon: 'boxes', label: 'Inventory' },
  ];
  
  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  ngAfterViewInit(): void {
    lucide.createIcons();
  }

}
