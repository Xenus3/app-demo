import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ApisComponent } from './components/apis/apis.component';
import { ContactComponent } from './components/contact/contact.component';
import { ChaussuresComponent } from './components/chaussures/chaussures.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { EntriesComponent } from './components/entries/entries.component';
import { MessagerieComponent } from './components/messagerie/messagerie.component';

const routes: Routes = [
  {
    path: '',
    component: HelloWorldComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'apis',
    component: ApisComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'chaussures',
    component: ChaussuresComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'entries',
    component: EntriesComponent
  },
  {
    path: 'messages',
    component: MessagerieComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
