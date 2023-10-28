import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PilotosAddPageRoutingModule } from './pilotos-add-routing.module';

import { PilotosAddPage } from './pilotos-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PilotosAddPageRoutingModule
  ],
  declarations: [PilotosAddPage]
})
export class PilotosAddPageModule {}
