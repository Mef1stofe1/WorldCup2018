import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserXhr } from '@angular/http';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GroupTableComponent } from './components/group-component/group-table.component';
import { AppRouterModule } from './app-router/app-router.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/PageNotFound/page-not-found.component';
import { QuarterFinalComponent } from './components/quarter-final/quarter-final.component';
import { SemiFinalComponent } from './components/semi-final/semi-final.component';
import { PlayOffComponent } from './components/play-off/play-off.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MainComponentComponent,
    GroupTableComponent,
    PageNotFoundComponent,
    QuarterFinalComponent,
    SemiFinalComponent,
    PlayOffComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
