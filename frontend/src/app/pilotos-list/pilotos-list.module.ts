import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilotosListPageRoutingModule } from './pilotos-list-routing.module';

import { PilotosListPage } from './pilotos-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilotosListPageRoutingModule
  ],
  declarations: [PilotosListPage]
})
export class PilotosListPageModule {}
