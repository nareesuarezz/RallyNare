import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EscuderiasService } from '../services/escuderias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


interface Escuderias {
  nombreEscuderia: string;
  pais: string;
  yearFundacion: string;
}

@Component({
  selector: 'app-escuderias-edit',
  templateUrl: './escuderias-edit.page.html',
  styleUrls: ['./escuderias-edit.page.scss'],
})
export class EscuderiasEditPage implements OnInit {

  constructor(private EscuderiasService: EscuderiasService, private router: Router, public formBuilder: FormBuilder, private route: ActivatedRoute, private toastController: ToastController) {
    this.ionicForm = this.formBuilder.group({
      nombreEscuderia: ['', [Validators.required, Validators.minLength(2)]],
      pais: ['', [Validators.required, Validators.minLength(2)]],
      yearFundacion: ['', [Validators.required, Validators.minLength(2)]],
    });
  }


  ionicForm: any;
  selectedEscuderia: any;


  ngOnInit() {
    this.route.params.subscribe(params => {
      const escuderiaId = params['escuderiaId'];

      this.EscuderiasService.getEscuderia(escuderiaId).subscribe((escuderia: any) => {
        this.selectedEscuderia = escuderia;
        this.ionicForm.setValue({
          nombreEscuderia: escuderia.nombreEscuderia,
          pais: escuderia.pais,
          yearFundacion: escuderia.yearFundacion,
        });
      });
    });
  }

  async presentSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duración en milisegundos
      color: 'success', // Color de la notificación (puedes ajustarlo)
    });
    toast.present();
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duración en milisegundos
      color: 'danger', // Color de la notificación (puedes ajustarlo)
    });
    toast.present();
  }


  async editEscuderia() {
    if (this.ionicForm.valid && this.selectedEscuderia) {
      const { nombreEscuderia, pais, yearFundacion, id } = this.selectedEscuderia;

      const updatedEscuderia = {
        nombreEscuderia: this.ionicForm.value.nombreEscuderia,
        pais: this.ionicForm.value.pais,
        yearFundacion: this.ionicForm.value.yearFundacion,
      };

      this.EscuderiasService.updateEscuderia(id, updatedEscuderia).subscribe(response => {
        // Verifica si la edición fue exitosa (puedes ajustar esto según tu API o servicio)
        if (response && typeof response === 'object') {
          // Aquí considera la respuesta como exitosa
          this.presentErrorToast('Hubo un error al editar la escuderia.');
        } else {
          this.presentSuccessToast('La escuderia se ha actualizado correctamente.');
        }


        this.selectedEscuderia = null;
        this.ionicForm.reset();
      });
    }
  }



  errorControl() {
    return this.ionicForm.controls;
  }

  submitForm = () => {
    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };

  gotoHome() {
    this.router.navigateByUrl("/home");
  }

  gotoList() {
    this.router.navigateByUrl("/escuderias-list");
  }

  gotoAdd() {
    this.router.navigateByUrl("/escuderias-add");
  }

}

