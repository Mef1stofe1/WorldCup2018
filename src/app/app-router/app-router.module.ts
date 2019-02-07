import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupTableComponent } from '../components/group-component/group-table.component';
import { PageNotFoundComponent } from '../components/PageNotFound/page-not-found.component';
import { QuarterFinalComponent } from '../components/quarter-final/quarter-final.component';
import { SemiFinalComponent } from '../components/semi-final/semi-final.component';
import { PlayOffComponent } from '../components/play-off/play-off.component';

 const routes: Routes = [

  { path: 'groups', component: GroupTableComponent },
  { path: 'play-off', component: PlayOffComponent },
  { path: 'quarter-final', component: QuarterFinalComponent },
  { path: 'semi-final', component: SemiFinalComponent },

  { path: '', redirectTo: 'groups', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouterModule { }
