import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import echarts from 'echarts';
import { debounce, debounceTime } from 'rxjs/operators';
import { Observable, of, pipe, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit, AfterViewInit, OnDestroy {
  myChart: any;
  subject$ = new Subject<any>();
  @ViewChild('barChart', {static: true}) barChart: ElementRef;
  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }]
  };

  @HostListener('window:resize', ['$event'])
  windowResize($event) {
    this.subject$.next($event);
  }

  constructor() {
  }

  ngOnInit(): void {
    this.subject$.pipe(debounceTime(300)).subscribe(data => {
      this.myChart.resize();
    });
  }

  ngAfterViewInit(): void {
    this.myChart = echarts.init(this.barChart.nativeElement);
    this.myChart.setOption(this.option);
  }

  ngOnDestroy(): void {
  }
}
