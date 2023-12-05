import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PilotosService } from '../services/pilotos.service';
import { CochesService } from '../services/coches.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pilotos-add',
  templateUrl: './pilotos-add.page.html',
  styleUrls: ['./pilotos-add.page.scss'],
})
export class PilotosAddPage implements OnInit {

  ionicForm: any;
  listaCoches: any[] = [];

  constructor(
    private pilotosService: PilotosService,
    private cochesService: CochesService,
    private router: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
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

    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      fechaNacimiento: ['', [Validators.required]],
      nacionalidad: ['', [Validators.required, Validators.minLength(2)]],
      coche: ['', Validators.required],
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  addPiloto() {
    if (this.ionicForm.valid) {
      const nombre = this.ionicForm.get('nombre').value;
      const apellido = this.ionicForm.get('apellido').value;
      const fechaNacimiento = this.ionicForm.get('fechaNacimiento').value;
      const nacionalidad = this.ionicForm.get('nacionalidad').value;
      const coche = this.ionicForm.get('coche').value;

      this.pilotosService.addPiloto({ nombre, apellido, fechaNacimiento, nacionalidad, coche }).subscribe(response => {
        this.ionicForm.reset();
      });
    }
  }

  gotoHome() {
    this.router.navigateByUrl("/home");
  }

  gotoList() {
    this.router.navigateByUrl("/pilotos-list");
  }
}
