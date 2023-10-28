import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PilotosService } from '../services/pilotos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-pilotos-edit',
  templateUrl: './pilotos-edit.page.html',
  styleUrls: ['./pilotos-edit.page.scss'],
})
export class PilotosEditPage implements OnInit {

  constructor(private PilotosService: PilotosService, private router: Router, public formBuilder: FormBuilder, private route: ActivatedRoute, private toastController: ToastController) {
    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      fechaNacimiento: ['', [Validators.required, Validators.minLength(2)]],
      nacionalidad: ['', [Validators.required, Validators.minLength(2)]],
      coche: ['', [Validators.required, Validators.minLength(2)]],
    });
  }


  ionicForm: any;
  selectedPiloto: any;


  ngOnInit() {
    this.route.params.subscribe(params => {
      const pilotoId = params['pilotoId'];

      this.PilotosService.getPiloto(pilotoId).subscribe((piloto: any) => {
        this.selectedPiloto = piloto;
        this.ionicForm.setValue({
          nombre: piloto.nombre,
          apellido: piloto.apellido,
          fechaNacimiento: piloto.fechaNacimiento,
          nacionalidad: piloto.nacionalidad,
          coche: piloto.coche.id,
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


  async editPiloto() {
    if (this.ionicForm.valid && this.selectedPiloto) {
      const { nombre, apellido, fechaNacimiento, nacionalidad, coche, id } = this.selectedPiloto;

      const updatedPiloto = {
        nombre: this.ionicForm.value.nombre,
        apellido: this.ionicForm.value.apellido,
        fechaNacimiento: this.ionicForm.value.fechaNacimiento,
        nacionalidad: this.ionicForm.value.nacionalidad,
        coche: this.ionicForm.value.coche,

      };

      this.PilotosService.updatePiloto(id, updatedPiloto).subscribe(response => {
        // Verifica si la edición fue exitosa (puedes ajustar esto según tu API o servicio)
        if (response && typeof response === 'object') {
          // Aquí considera la respuesta como exitosa
          this.presentErrorToast('Hubo un error al editar el piloto.');
        } else {
          this.presentSuccessToast('El piloto se ha actualizado correctamente.');
        }


        this.selectedPiloto = null;
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
    this.router.navigateByUrl("/pilotos-list");
  }

  gotoAdd() {
    this.router.navigateByUrl("/pilotos-add");
  }

}

