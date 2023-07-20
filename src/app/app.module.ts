import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CalculateComponent } from './calculate/calculate.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAddNewComponent } from './student-add-new/student-add-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalculateComponent,
    StudentlistComponent,
    StudentEditComponent,
    StudentAddNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
