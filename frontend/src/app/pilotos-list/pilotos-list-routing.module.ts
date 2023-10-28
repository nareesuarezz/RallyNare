import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilotosListPage } from './pilotos-list.page';

const routes: Routes = [
  {
    path: '',
    component: PilotosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilotosListPageRoutingModule {}
