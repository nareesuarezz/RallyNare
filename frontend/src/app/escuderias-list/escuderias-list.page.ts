import { Component, OnInit } from '@angular/core';
import { EscuderiasService } from '../services/escuderias.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-escuderias-list',
  templateUrl: './escuderias-list.page.html',
  styleUrls: ['./escuderias-list.page.scss'],
})
export class EscuderiasListPage implements OnInit {

  escuderias: any = [];
  selectedEscuderia: any;

  constructor(private escuderiaService: EscuderiasService, private router: Router, public alertController: AlertController) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getAllEscuderias();
  }

  getAllEscuderias() {
    this.escuderiaService.getEscuderias().subscribe(
      (response) => {
        this.escuderias = response;
      },
      (error) => {
        console.error('Error al obtener la lista de escuderías', error);
      }
    );
  }

  deleteEscuderia(id: number) {
    this.escuderiaService.deleteEscuderia(id).subscribe(response => {
      this.getAllEscuderias();
    });
  }

  gotoHome() {
    this.router.navigateByUrl("/home");
  }

  gotoAdd() {
    this.router.navigateByUrl("/escuderias-add");
  }

  gotoEdit(escuderia: any) {
    console.log('ID de la escuderia:', escuderia.id);
    this.router.navigate(['/escuderias-edit', escuderia.id]);
  }
  
  async deleteEscuderiaConfirmation(escuderia: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar borrado',
      message: `¿Seguro que quieres borrar a ${escuderia.nombreEscuderia}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Borrar',
          handler: () => {
            this.deleteEscuderia(escuderia.id);
          },
        },
      ],
    });
    await alert.present();
  }
}
