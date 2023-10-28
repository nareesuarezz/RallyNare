import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CochesListPage } from './coches-list.page';

const routes: Routes = [
  {
    path: '',
    component: CochesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CochesListPageRoutingModule {}
