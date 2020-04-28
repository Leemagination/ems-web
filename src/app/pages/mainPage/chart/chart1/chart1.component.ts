import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import echarts from 'echarts';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import Mock from 'mockjs';
import { UtilityService } from '../../../../core/services/utility.service';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit, AfterViewInit, OnDestroy {
  myChart: any;
  myPieChart: any;
  myLineChart: any;
  dateType = 'A';
  dateRange = [new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), new Date(Date.now())];
  subject$ = new Subject<any>();
  @ViewChild('barChart', {static: true}) barChart: ElementRef;
  @ViewChild('pieChart', {static: true}) pieChart: ElementRef;
  @ViewChild('lineChart', {static: true}) lineChart: ElementRef;
  option = {
    tooltip: {show: true},
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [],
      type: 'bar',
      color: '#56b4ff'
    }]
  };
  pieOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      top: 100,
      right: 10,
      data: ['家用电器', '食用酒水', '个护健康', '服饰箱包', '母婴产品', '其他']
    },
    series: [
      {
        name: '销售分布',
        type: 'pie',
        radius: '60%',
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true
        },
        labelLine: {
          show: true
        },
        data: [
          {value: Mock.mock({number: '@integer(1,1000)'}).number, name: '家用电器', itemStyle: {color: 'rgba(255,112,4,0.71)'}},
          {value: Mock.mock({number: '@integer(1,1000)'}).number, name: '食用酒水', itemStyle: {color: 'rgba(255,214,29,0.71)'}},
          {value: Mock.mock({number: '@integer(1,1000)'}).number, name: '个护健康', itemStyle: {color: 'rgba(255,63,62,0.71)'}},
          {value: Mock.mock({number: '@integer(1,1000)'}).number, name: '服饰箱包', itemStyle: {color: 'rgba(180,183,255,0.94)'}},
          {value: Mock.mock({number: '@integer(1,1000)'}).number, name: '母婴产品', itemStyle: {color: 'rgb(161,213,255)'}},
          {value: Mock.mock({number: '@integer(1,1000)'}).number, name: '其他', itemStyle: {color: 'rgba(34,202,255,0.71)'}},
        ]
      }
    ]
  };
  lineOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number,
        Mock.mock({number: '@integer(800,1300)'}).number],
      type: 'line',
      smooth: true,
      areaStyle: {}
    }]
  };

  @HostListener('window:resize', ['$event'])
  windowResize($event) {
    this.subject$.next($event);
  }

  constructor(private utilityService: UtilityService) {

  }

  ngOnInit(): void {
    this.subject$.pipe(debounceTime(300)).subscribe(data => {
      this.myChart.resize();
      this.myPieChart.resize();
      this.myLineChart.resize();
    });
  }

  ngAfterViewInit(): void {
    this.myChart = echarts.init(this.barChart.nativeElement);
    this.myPieChart = echarts.init(this.pieChart.nativeElement);
    this.myLineChart = echarts.init(this.lineChart.nativeElement);
    this.myPieChart.setOption(this.pieOption);
    this.myLineChart.setOption(this.lineOption);
    this.getChartData();
  }

  ngOnDestroy(): void {
  }

  getChartData() {
    const xAxis = [];
    let diff;
    switch (this.dateType) {
      case 'A':
        diff = 6;
        break;
      case 'B':
        diff = 29;
        break;
      case 'C':
        diff = 179;
        break;
      case 'D':
        diff = (this.dateRange[1].getTime() - this.dateRange[0].getTime()) / (1000 * 60 * 60 * 24);
        break;
    }
    for (let i = 0; i <= diff; i++) {
      xAxis.unshift(this.utilityService.formatDate(new Date(this.dateRange[1].getTime() - 1000 * 60 * 60 * 24 * i).getTime(), 'yyyy-MM-dd'));
    }
    this.mockBarData(xAxis);
  }

  dateRangeChange(type) {
    const dateRange = [];
    dateRange.push(new Date());
    switch (type) {
      case 'A':
        dateRange.unshift(new Date(Date.now() - 1000 * 60 * 60 * 24 * 7));
        break;
      case 'B':
        dateRange.unshift(new Date(Date.now() - 1000 * 60 * 60 * 24 * 30));
        break;
      case 'C':
        dateRange.unshift(new Date(Date.now() - 1000 * 60 * 60 * 24 * 180));
        break;
      case 'D':
        return;
    }
    this.dateRange = dateRange;
    this.getChartData();
  }

  mockBarData(xAxis) {
    this.option.xAxis.data = xAxis;
    const obj = {};
    obj[`array|${xAxis.length}`] = ['@integer(0,20000)'];
    this.option.series[0].data = Array.isArray(Mock.mock(obj).array) ? Mock.mock(obj).array : [Mock.mock(obj).array];
    this.myChart.setOption(this.option);
  }
}
