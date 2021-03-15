
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the DateRangePickerModule for the DateRangPicker component
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of DateRangePickerModule into NgModule
  imports:      [ BrowserModule, DateRangePickerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }