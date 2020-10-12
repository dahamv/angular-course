import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    //The root(www.domain..) of the website should be redirected to /customers
    { path: '', pathMatch: 'full', redirectTo: '/customers'},
    // domain/** should also be routed to /customers
    { path: '**', pathMatch: 'full', redirectTo: '/customers' }
    //You can also { path: '', pathMatch: 'full', component: MyComponent},
];

@NgModule({
  //You only call forRoot one time in an application.
  imports: [RouterModule.forRoot(routes)],
   //So that any module which imports app-routing module has access to RouterModule.
  exports: [RouterModule]
})
export class AppRoutingModule { }
