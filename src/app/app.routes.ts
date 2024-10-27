import { Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { IndexComponent } from './home/index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [],
  }
];
