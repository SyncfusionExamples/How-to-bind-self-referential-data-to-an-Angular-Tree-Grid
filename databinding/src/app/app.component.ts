import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'my-app';
  public data: Object[] = [];

  ngOnInit(): void {
    this.data = sampleData;
  }
}
