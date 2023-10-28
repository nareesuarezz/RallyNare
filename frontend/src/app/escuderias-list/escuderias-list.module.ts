import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscuderiasListPageRoutingModule } from './escuderias-list-routing.module';

import { EscuderiasListPage } from './escuderias-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscuderiasListPageRoutingModule
  ],
  declarations: [EscuderiasListPage]
})
export class EscuderiasListPageModule {}
