import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'coches-list',
    loadChildren: () => import('./coches-list/coches-list.module').then( m => m.CochesListPageModule)
  },
  {
    path: 'pilotos-list',
    loadChildren: () => import('./pilotos-list/pilotos-list.module').then( m => m.PilotosListPageModule)
  },
  {
    path: 'escuderias-list',
    loadChildren: () => import('./escuderias-list/escuderias-list.module').then( m => m.EscuderiasListPageModule)
  },
  {
    path: 'coches-add',
    loadChildren: () => import('./coches-add/coches-add.module').then( m => m.CochesAddPageModule)
  },
  {
    path: 'pilotos-add',
    loadChildren: () => import('./pilotos-add/pilotos-add.module').then( m => m.PilotosAddPageModule)
  },
  {
    path: 'escuderias-add',
    loadChildren: () => import('./escuderias-add/escuderias-add.module').then( m => m.EscuderiasAddPageModule)
  },
  {
    path: 'escuderias-edit/:escuderiaId',
    loadChildren: () => import('./escuderias-edit/escuderias-edit.module').then( m => m.EscuderiasEditPageModule)
  },
  {
    path: 'coches-edit/:cocheId',
    loadChildren: () => import('./coches-edit/coches-edit.module').then( m => m.CochesEditPageModule)
  },
  {
    path: 'pilotos-edit/:pilotoId',
    loadChildren: () => import('./pilotos-edit/pilotos-edit.module').then( m => m.PilotosEditPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
