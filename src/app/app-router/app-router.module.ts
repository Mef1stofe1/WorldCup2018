import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupTableComponent } from '../components/group-component/group-table.component';
import { PageNotFoundComponent } from '../components/PageNotFound/page-not-found.component';

 const routes: Routes = [

  { path: 'groups', component: GroupTableComponent },

  { path: '', redirectTo: 'groups', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { enableTracing: true })]
})
export class AppRouterModule { }
