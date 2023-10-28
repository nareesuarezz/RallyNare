import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilotosAddPage } from './pilotos-add.page';

const routes: Routes = [
  {
    path: '',
    component: PilotosAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilotosAddPageRoutingModule {}
