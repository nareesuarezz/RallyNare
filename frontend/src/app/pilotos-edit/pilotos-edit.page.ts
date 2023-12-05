import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PilotosService } from '../services/pilotos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CochesService } from '../services/coches.service';

@Component({
  selector: 'app-pilotos-edit',
  templateUrl: './pilotos-edit.page.html',
  styleUrls: ['./pilotos-edit.page.scss'],
})
export class PilotosEditPage implements OnInit {
  ionicForm: any;
  selectedPiloto: any;
  listaCoches: any[] = []; 

  constructor(
    private pilotosService: PilotosService,
    private cochesService: CochesService,
    private router: Router,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {
    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      fechaNacimiento: ['', [Validators.required, Validators.minLength(2)]],
      nacionalidad: ['', [Validators.required, Validators.minLength(2)]],
      coche: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const pilotoId = params['pilotoId'];

      this.pilotosService.getPiloto(pilotoId).subscribe((piloto: any) => {
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

    this.cochesService.getCoches().subscribe(
      (coches: any) => {
        if (Array.isArray(coches)) {
          this.listaCoches = coches;
        } else {
          console.error('La respuesta no es un array:', coches);
        }
      },
      (error) => {
        console.error('Error al obtener la lista de coches', error);
      }
    );
  }

  async presentSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }

  async editPiloto() {
    if (this.ionicForm.valid && this.selectedPiloto) {
      const { nombre, apellido, fechaNacimiento, nacionalidad, id } = this.selectedPiloto;

      const updatedPiloto = {
        nombre: this.ionicForm.value.nombre,
        apellido: this.ionicForm.value.apellido,
        fechaNacimiento: this.ionicForm.value.fechaNacimiento,
        nacionalidad: this.ionicForm.value.nacionalidad,
        coche: this.ionicForm.value.coche,
      };

      this.pilotosService.updatePiloto(id, updatedPiloto).subscribe(response => {
        if (response && typeof response === 'object') {
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
