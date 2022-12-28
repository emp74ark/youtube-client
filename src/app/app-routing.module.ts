import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { UfoComponent } from './pages/ufo/ufo.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: '**', component: UfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
