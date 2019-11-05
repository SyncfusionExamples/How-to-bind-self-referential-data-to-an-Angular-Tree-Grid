import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeGridModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
