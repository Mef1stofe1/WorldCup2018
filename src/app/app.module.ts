import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserXhr } from '@angular/http';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GroupTableComponent } from './components/group-component/group-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MainComponentComponent,
    GroupTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
