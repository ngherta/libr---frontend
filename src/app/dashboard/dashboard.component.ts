import {Component, OnInit, ViewChild} from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart, ChartComponent
} from 'ng-apexcharts';
import {count, first} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {AccountService, AlertService} from '@app/_services';
import {BookService} from '@app/_services/book.service';

import {
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from 'ng-apexcharts';

type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptionsTopCategories = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart1') chart1: ChartComponent;
  @ViewChild('chartCategory') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public ChartOptionsTopCategories: Partial<ChartOptions>;
  public ChartOptionsSubmittedBook: Partial<ChartOptions>;

  dashboard: any;
  categoriesName: Array<string> = [];
  categoriesCount: Array<number> = [];

  countOfSubmittedBooks: number;
  countOfInlibraryBooks: number;
  actuatorInfo: any;
  actuatorHealth: any;
  actuatorMetrics: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: AccountService,
    private bookService: BookService,
    private alertService: AlertService
  ) {
    this.ChartOptionsTopCategories = {
      series: [
        {
          name: 'books',
          data: this.categoriesCount
        }
      ],
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        '#008FFB',
        '#00E396',
        '#FEB019',
        '#FF4560',
        '#775DD0',
        '#546E7A',
        '#26a69a',
        '#D10CE8'
      ],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: this.categoriesName,
        labels: {
          style: {
            colors: [
              '#008FFB',
              '#00E396',
              '#FEB019',
              '#FF4560',
              '#775DD0',
              '#546E7A',
              '#26a69a',
              '#D10CE8'
            ],
            fontSize: '12px'
          }
        }
      }
    };

    this.ChartOptionsSubmittedBook = {
      series: [
        {
          name: 'books',
          data: this.categoriesCount
        }
      ],
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        '#008FFB',
        '#00E396',
        '#FEB019',
        '#FF4560',
        '#775DD0',
        '#546E7A',
        '#26a69a',
        '#D10CE8'
      ],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: this.categoriesName,
        labels: {
          style: {
            colors: [
              '#008FFB',
              '#00E396',
              '#FEB019',
              '#FF4560',
              '#775DD0',
              '#546E7A',
              '#26a69a',
              '#D10CE8'
            ],
            fontSize: '12px'
          }
        }
      }
    };


    this.chartOptions = {
      // series: [this.dashboard.allSubmittedAndInLibraryBooks.SUBMITTED,
      //   this.dashboard.allSubmittedAndInLibraryBooks.IN_LIBRARY],
      series: [],
      chart: {
        width: 380,
        type: 'pie'
      },
      labels: ['Submitted', 'In_library'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
    this.fetchAllDashboard();
    this.getActuatorInfo();
    this.getActuatorHealth();
  }

  getActuatorMetrics() {
    this.bookService.getActuatorMetrics()
      .pipe(first())
      .subscribe(
        data => {
          this.actuatorMetrics = data;
        });
  }

  getActuatorHealth() {
    this.bookService.getActuatorHealth()
      .pipe(first())
      .subscribe(
        data => {
          this.actuatorHealth = data;
        });
  }

  getActuatorInfo() {
    this.bookService.getActuatorInfo()
      .pipe(first())
      .subscribe(
        data => {
          this.actuatorInfo = data;
          console.log(this.actuatorInfo);
        });
  }

  fetchAllDashboard() {
    this.bookService.getAllDashboard()
      .pipe(first())
      .subscribe(data => {
        this.dashboard = data;

        for (let i = 0; i < this.dashboard.booksPerCategory.length; i++) {
          this.categoriesName.push(this.dashboard.booksPerCategory[i].category);
          this.categoriesCount.push(this.dashboard.booksPerCategory[i].count);
        }

        this.countOfSubmittedBooks = this.dashboard.allSubmittedAndInLibraryBooks.SUBMITTED;
        this.countOfInlibraryBooks = this.dashboard.allSubmittedAndInLibraryBooks.IN_LIBRARY;
     });
  }
}