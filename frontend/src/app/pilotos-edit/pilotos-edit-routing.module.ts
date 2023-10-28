import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilotosEditPage } from './pilotos-edit.module';

const routes: Routes = [
  {
    path: 'pilotos-edit/:pilotoId', 
    component: PilotosEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilotosEditPageRoutingModule {}
