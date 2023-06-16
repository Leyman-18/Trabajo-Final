import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  public items: MenuItem[] = [];


  ngOnInit() {
    this.items = [
      {
        label: 'Viajeros',
        icon: 'pi pi-users',
        routerLink: '/viajeros',
      },
      {
        label: 'viajes',
        icon: 'pi pi-map-marker',
        routerLink: '/viajes'
      },
      // {
      //   label: 'Typescript',
      //   icon: 'pi pi-file-edit',
      //   routerLink: '',
      //   items: [
      //     {
      //       label: 'ejemplo 1',
      //       icon: 'pi pi-code',
      //       routerLink: '/ejemplo1'
      //     },
      //     {
      //       label: 'ejemplo 2',
      //       icon: 'pi pi-code',
      //       routerLink: '/ejemplo2'
      //     },
      //     {
      //       label: 'ejemplo 3',
      //       icon: 'pi pi-code',
      //       routerLink: '/ejemplo3'
      //     },
      //     {
      //       label: 'ejemplo 4',
      //       icon: 'pi pi-code',
      //       routerLink: '/ejemplo4'
      //     },
      //     {
      //       label: 'ejemplo 5',
      //       icon: 'pi pi-code',
      //       routerLink: '/ejemplo5'
      //     },
      //     {
      //       label: 'ejemplo 6',
      //       icon: 'pi pi-code',
      //       routerLink: '/ejemplo6'
      //     },
      //     {
      //       label: 'Ejercicios',
      //       icon: '',
      //       routerLink: '',
      //       items: [
      //         {
      //           label: 'ejercicio 1',
      //           icon: 'pi pi-code',
      //           routerLink: '/ejercicio1'
      //         },
      //         {
      //           label: 'ejercicio 1 vista',
      //           icon: 'pi pi-code',
      //           routerLink: '/ejercicio1vista'
      //         },
      //       ]
      //     }
      //   ]
      // },

      // {
      //   label: 'File',
      //   icon: 'pi pi-fw pi-file',
      //   items: [
      //     {
      //       label: 'New',
      //       icon: 'pi pi-fw pi-plus',
      //       items: [
      //         {
      //           label: 'Bookmark',
      //           icon: 'pi pi-fw pi-bookmark',
      //         },
      //         {
      //           label: 'Video',
      //           icon: 'pi pi-fw pi-video',
      //         },
      //       ],
      //     },
      //     {
      //       label: 'Delete',
      //       icon: 'pi pi-fw pi-trash',
      //     },
      //     {
      //       label: 'Export',
      //       icon: 'pi pi-fw pi-external-link',
      //     },
      //   ],
      // },
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     {
      //       label: 'Left',
      //       icon: 'pi pi-fw pi-align-left',
      //     },
      //     {
      //       label: 'Right',
      //       icon: 'pi pi-fw pi-align-right',
      //     },
      //     {
      //       label: 'Center',
      //       icon: 'pi pi-fw pi-align-center',
      //     },
      //     {
      //       label: 'Justify',
      //       icon: 'pi pi-fw pi-align-justify',
      //     },
      //   ],
      // },
      // {
      //   label: 'Users',
      //   icon: 'pi pi-fw pi-user',
      //   items: [
      //     {
      //       label: 'New',
      //       icon: 'pi pi-fw pi-user-plus',
      //     },
      //     {
      //       label: 'Delete',
      //       icon: 'pi pi-fw pi-user-minus',
      //     },
      //     {
      //       label: 'Search',
      //       icon: 'pi pi-fw pi-users',
      //       items: [
      //         {
      //           label: 'Filter',
      //           icon: 'pi pi-fw pi-filter',
      //           items: [
      //             {
      //               label: 'Print',
      //               icon: 'pi pi-fw pi-print',
      //             },
      //           ],
      //         },
      //         {
      //           icon: 'pi pi-fw pi-bars',
      //           label: 'List',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   label: 'Events',
      //   icon: 'pi pi-fw pi-calendar',
      //   items: [
      //     {
      //       label: 'Edit',
      //       icon: 'pi pi-fw pi-pencil',
      //       items: [
      //         {
      //           label: 'Save',
      //           icon: 'pi pi-fw pi-calendar-plus',
      //         },
      //         {
      //           label: 'Delete',
      //           icon: 'pi pi-fw pi-calendar-minus',
      //         },
      //       ],
      //     },
      //     {
      //       label: 'Archieve',
      //       icon: 'pi pi-fw pi-calendar-times',
      //       items: [
      //         {
      //           label: 'Remove',
      //           icon: 'pi pi-fw pi-calendar-minus',
      //         },
      //       ],
      //     },
      //   ],
      // },
    ];
  }
}
