import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalculateComponent } from './calculate/calculate.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAddNewComponent } from './student-add-new/student-add-new.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'cal',component:CalculateComponent},
  {path:'stlist',component:StudentlistComponent},
  {path:'register',component:StudentAddNewComponent},
  {path:'stedit/:id',component:StudentEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
