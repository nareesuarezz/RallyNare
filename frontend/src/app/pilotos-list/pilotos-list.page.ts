import { Component, OnInit } from '@angular/core';
import { PilotosService } from '../services/pilotos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pilotos-list',
  templateUrl: './pilotos-list.page.html',
  styleUrls: ['./pilotos-list.page.scss'],
})
export class PilotosListPage implements OnInit {

  pilotos: any = [];
  selectedPiloto: any;

  constructor(private pilotoService: PilotosService, private router: Router, public alertController: AlertController) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getAllPilotos();
  }

  getAllPilotos() {
    this.pilotoService.getPilotos().subscribe(response => {
      this.pilotos = response;
    });
  }

  deletePiloto(id: number) {
    this.pilotoService.deletePiloto(id).subscribe(response => {
      this.getAllPilotos();
    });
  }

  gotoHome() {
    this.router.navigateByUrl("/home");
  }

  gotoAdd() {
    this.router.navigateByUrl("/pilotos-add");
  }

  gotoEdit(piloto: any) {
    console.log('ID del piloto:', piloto.id);
    this.router.navigate(['/pilotos-edit', piloto.id]);
  }

  async deletePilotoConfirmation(piloto: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar borrado',
      message: `¿Seguro que quieres borrar al piloto ${piloto.nombre} ${piloto.apellido}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Borrar',
          handler: () => {
            console.log(piloto)
            this.deletePiloto(piloto.id);
          },
        },
      ],
    });
    await alert.present();
  }
}
