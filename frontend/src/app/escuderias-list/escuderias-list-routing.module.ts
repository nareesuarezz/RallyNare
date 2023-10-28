import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscuderiasListPage } from './escuderias-list.page';

const routes: Routes = [
  {
    path: '',
    component: EscuderiasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscuderiasListPageRoutingModule {}
