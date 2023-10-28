import { Component, OnInit } from '@angular/core';
import { CochesService } from '../services/coches.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.page.html',
  styleUrls: ['./coches-list.page.scss'],
})
export class CochesListPage implements OnInit {
  coches: any = [];
  selectedChampion: any;

  constructor(
    private cochesService: CochesService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getAllCoches();
  }

  getAllCoches() {
    this.cochesService.getCoches().subscribe((response) => {
      this.coches = response;
    });
  }

  deleteCoche(id: number) {
    this.cochesService.deleteCoche(id).subscribe(response => {
      this.getAllCoches();
    });
  }

  async deleteCocheConfirmation(coche: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar borrado',
      message: `¿Seguro que quieres borrar el coche ${coche.marca} ${coche.modelo}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Borrar',
          handler: () => {
            console.log(coche)
            this.deleteCoche(coche.id);
          },
        },
      ],
    });
    await alert.present();
  }

  

  gotoHome() {
    this.router.navigateByUrl('/home');
  }

  gotoAdd() {
    this.router.navigateByUrl('/coches-add');
  }

  gotoEdit(coche: any) {
    console.log('ID del coche:', coche.id);
    this.router.navigate(['/coches-edit', coche.id]);
  }
}
