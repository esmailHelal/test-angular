import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public apiservices: ApiserviceService) {}
  arr: any = [
    {
      title: 'Dashboard',
      active: false,
      actveClass: false,
      children: [
        {
          title: 'Dashboard v1',
          active: false,
        },
        {
          title: 'Dashboard v2',
          active: false,
        },
        {
          title: 'Dashboard v3',
          active: false,
        },
      ],
    },
  ];
  ngOnInit(): void {}
  click() {
    this.apiservices.show = !this.apiservices.show;
  }
  toglecollapse(index: any, item: any) {
    item.active = !item.active;
  }
  toglecollapseChildren(index: any, item: any, item1: any) {
    item.actveClass = true;
    item.children.forEach((element: any, index1: any) => {
      if (index != index1) {
        element.active = false;
      }
    });
    item1.active = true;
  }
}
