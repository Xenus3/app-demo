import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ApisComponent } from './components/apis/apis.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ChaussuresComponent } from './components/chaussures/chaussures.component';
import { EntriesComponent } from './components/entries/entries.component';
import { MessagerieComponent } from './components/messagerie/messagerie.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MenuComponent,
    ArticlesComponent,
    ApisComponent,
    ContactComponent,
    ChaussuresComponent,
    CategoriesComponent,
    EntriesComponent,
    MessagerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
