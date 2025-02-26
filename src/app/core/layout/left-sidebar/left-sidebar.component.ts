import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SIDEBAR_MENU } from '../../constants/sidebar-menu';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

export interface SidebarItem {
    title: string;
    icon?: string;
    route?: string;
    expanded?: boolean;
    children?: SidebarItem[];
  }
@Component({
    selector: 'app-left-sidebar',
    imports: [RouterModule,CommonModule],
    standalone:true,
    templateUrl: './left-sidebar.component.html',
    styleUrl: './left-sidebar.component.scss',
    animations: [
        trigger('expandCollapse', [
          state('expanded', style({ height: '*', opacity: 1 })),
          state('collapsed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
          transition('expanded <=> collapsed', animate('300ms ease-in-out'))
        ])
      ]
})
export class LeftSidebarComponent {
    sidebarMenus = signal<SidebarItem[]>(SIDEBAR_MENU); // Using signals in Angular 18

    toggleSubMenu(menu: SidebarItem) {
      if (!menu.children) {
        // If the clicked menu has no children, collapse all menus
        this.sidebarMenus.update((menus) =>
          menus.map((m) => ({ ...m, expanded: false }))
        );
        return; // Exit since it's a direct navigation menu
      }
        this.sidebarMenus.update((menus) =>
          menus.map((m) => ({
            ...m,
            expanded: m === menu ? !m.expanded : false, // Toggle only one menu
          }))
        );
      }
      
      
}
