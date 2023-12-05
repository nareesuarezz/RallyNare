import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CochesService } from '../services/coches.service';
import { EscuderiasService } from '../services/escuderias.service';  
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-coches-edit',
  templateUrl: './coches-edit.page.html',
  styleUrls: ['./coches-edit.page.scss'],
})
export class CochesEditPage implements OnInit {
  ionicForm: any;
  selectedCoche: any;
  listaEscuderias: any[] = [];  

  constructor(
    private cochesService: CochesService,
    private escuderiasService: EscuderiasService,  
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    public formBuilder: FormBuilder
  ) {
    this.ionicForm = this.formBuilder.group({
      marca: ['', [Validators.required, Validators.minLength(2)]],
      modelo: ['', [Validators.required, Validators.minLength(2)]],
      year: ['', [Validators.required, Validators.minLength(2)]],
      potencia: ['', [Validators.required, Validators.minLength(2)]],
      numChasis: ['', [Validators.required, Validators.minLength(2)]],
      escuderia: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const cocheId = params['cocheId'];

      this.cochesService.getCoche(cocheId).subscribe((coche: any) => {
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

    this.escuderiasService.getEscuderias().subscribe(
      (escuderias: any) => {
        if (Array.isArray(escuderias)) {
          this.listaEscuderias = escuderias;
        } else {
          console.error('La respuesta no es un array:', escuderias);
        }
      },
      (error) => {
        console.error('Error al obtener la lista de escuderías', error);
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

  async editCoche() {
    if (this.ionicForm.valid && this.selectedCoche) {
      const { marca, modelo, year, potencia, numChasis, id } = this.selectedCoche;

      const updatedCoche = {
        marca: this.ionicForm.value.marca,
        modelo: this.ionicForm.value.modelo,
        year: this.ionicForm.value.year,
        potencia: this.ionicForm.value.potencia,
        numChasis: this.ionicForm.value.numChasis,
        escuderia: this.ionicForm.value.escuderia,
      };

      this.cochesService.updateCoche(id, updatedCoche).subscribe(response => {
        if (response && typeof response === 'object') {
          this.presentErrorToast('Hubo un error al editar el coche.');
        } else {
          this.presentSuccessToast('El coche se ha actualizado correctamente.');
        }

        this.selectedCoche = null;
        this.ionicForm.reset();
      });
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

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
