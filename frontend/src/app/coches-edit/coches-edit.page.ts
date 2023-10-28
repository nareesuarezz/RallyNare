import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CochesService } from '../services/coches.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-coches-edit',
  templateUrl: './coches-edit.page.html',
  styleUrls: ['./coches-edit.page.scss'],
})
export class CochesEditPage implements OnInit {

  constructor(private CochesService: CochesService, private router: Router, public formBuilder: FormBuilder, private route: ActivatedRoute, private toastController: ToastController) {
    this.ionicForm = this.formBuilder.group({
      marca: ['', [Validators.required, Validators.minLength(2)]],
      modelo: ['', [Validators.required, Validators.minLength(2)]],
      year: ['', [Validators.required, Validators.minLength(2)]],
      potencia: ['', [Validators.required, Validators.minLength(2)]],
      numChasis: ['', [Validators.required, Validators.minLength(2)]],
      escuderia: ['', [Validators.required, Validators.minLength(2)]],
    });
  }


  ionicForm: any;
  selectedCoche: any;


  ngOnInit() {
    this.route.params.subscribe(params => {
      const cocheId = params['cocheId'];

      this.CochesService.getCoche(cocheId).subscribe((coche: any) => {
        this.selectedCoche = coche;
        this.ionicForm.setValue({
          marca: coche.marca,
          modelo: coche.modelo,
          year: coche.year,
          potencia: coche.potencia,
          numChasis: coche.numChasis,
          escuderia: coche.escuderia.id,
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


  async editCoche() {
    if (this.ionicForm.valid && this.selectedCoche) {
      const { marca, modelo, year, potencia, numChasis, escuderia, id } = this.selectedCoche;

      const updatedCoche = {
        marca: this.ionicForm.value.marca,
        modelo: this.ionicForm.value.modelo,
        year: this.ionicForm.value.year,
        potencia: this.ionicForm.value.potencia,
        numChasis: this.ionicForm.value.numChasis,
        escuderia: this.ionicForm.value.escuderia,

      };

      this.CochesService.updateCoche(id, updatedCoche).subscribe(response => {
        // Verifica si la edición fue exitosa (puedes ajustar esto según tu API o servicio)
        if (response && typeof response === 'object') {
          // Aquí considera la respuesta como exitosa
          this.presentErrorToast('Hubo un error al editar el coche.');
        } else {
          this.presentSuccessToast('El coche se ha actualizado correctamente.');
        }


        this.selectedCoche = null;
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
    this.router.navigateByUrl("/coches-list");
  }

  gotoAdd() {
    this.router.navigateByUrl("/coches-add");
  }

}

