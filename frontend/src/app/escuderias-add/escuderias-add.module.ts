import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscuderiasAddPageRoutingModule } from './escuderias-add-routing.module';

import { EscuderiasAddPage } from './escuderias-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EscuderiasAddPageRoutingModule
  ],
  declarations: [EscuderiasAddPage]
})
export class EscuderiasAddPageModule {}
