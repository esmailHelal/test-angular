import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-select-preview',
  templateUrl: './select-preview.component.html',
  styleUrls: ['./select-preview.component.scss'],
})
export class SelectPreviewComponent implements OnInit {
  arr_chart: any = [
    {
      id: 1,
      image: 'assets/172493_line_chart_icon.svg',
    },
    {
      id: 2,
      image: 'assets/1564501_business_chart_dashboard_graph_icon.svg',
    },
    {
      id: 3,
      image: 'assets/2205235_chart_mobile_signal_stat_wifi_icon.svg',
    },
    {
      id: 4,
      image: 'assets/2561338_bar_chart_icon.svg',
    },
  ];
  arr_data: any = [
    {
      id: 1,
      image: 'assets/1564498_business_chart_graph_pie_icon.svg',
    },
    {
      id: 2,
      image: 'assets/2561293_chart_pie_icon.svg',
    },
    {
      id: 3,
      image: 'assets/2799203_graph_presentation_slide_chart_growth_icon.svg',
    },
    {
      id: 4,
      image:
        'assets/3338898_business tools_graph_chart_level_marketing_icon.svg',
    },
  ];
  arr_preview: any = this.arr_chart;
  livePreview: any = this.arr_chart[0];
  constructor(public apiservices: ApiserviceService) {}

  ngOnInit(): void {
    this.apiservices.change_left_side.subscribe((res: any) => {
      if (res) {
        switch (res) {
          case 1:
            this.arr_preview = this.arr_chart;
            this.livePreview = this.arr_chart[0];
            break;
          case 2:
            this.arr_preview = this.arr_data;
            this.livePreview = this.arr_data[0];
            break;
          default:
            break;
        }
      }
      console.log(res);
    });
  }
  choose(item: any) {
    this.livePreview = item;
  }
}
