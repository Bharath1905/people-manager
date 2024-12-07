import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  declarations: [AppComponent, ListComponent, EditComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
