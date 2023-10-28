import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CochesAddPageRoutingModule } from './coches-add-routing.module';

import { CochesAddPage } from './coches-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CochesAddPageRoutingModule
  ],
  declarations: [CochesAddPage]
})
export class CochesAddPageModule {}
