import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPatiensComponent } from './@componets/details-patiens/details-patiens.component';
import { HomeComponent } from './@componets/home/home.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'patients/:id', component:DetailsPatiensComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
