import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import {  PilotosEditPage  } from './pilotos-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PilotosEditPage
      }
    ])
  ],
  declarations: [PilotosEditPage]
})
export class PilotosEditPageModule {}
export { PilotosEditPage };

