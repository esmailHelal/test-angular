import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  arr: any = [
    {
      title: 'DataSourse',
      setect: false,
    },
    {
      title: 'Graph Type',
      setect: true,
    },
    {
      title: 'Proprities',
      setect: false,
    },
  ];

  constructor(public apiservices: ApiserviceService) {}

  ngOnInit(): void {}

  selectItem(item: any, index: any) {
    this.arr.forEach((element: any, index1: any) => {
      if (index != index1) {
        element.setect = false;
      }
    });
    if (index == 1) {
      this.apiservices.change_left_side.next(1);
    } else if (index == 0) {
      this.apiservices.change_left_side.next(2);
    }

    item.setect = true;
  }
}
