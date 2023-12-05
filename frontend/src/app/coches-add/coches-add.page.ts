import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CochesService } from '../services/coches.service';
import { EscuderiasService } from '../services/escuderias.service';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-coches-add',
  templateUrl: './coches-add.page.html',
  styleUrls: ['./coches-add.page.scss'],
})
export class CochesAddPage implements OnInit {

  ionicForm: any;
  listaEscuderias: any[] = [];  

  constructor(
    private cochesService: CochesService,
    private escuderiasService: EscuderiasService,  
    private router: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
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

    this.ionicForm = this.formBuilder.group({
      marca: ['', [Validators.required, Validators.minLength(2)]],
      modelo: ['', [Validators.required, Validators.minLength(2)]],
      year: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      potencia: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      numChasis: ['',[Validators.required, Validators.minLength(2)]],
      escuderia: ['', Validators.required],
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  addCoche() {
    if (this.ionicForm.valid) {
      const marca = this.ionicForm.get('marca').value;
      const modelo = this.ionicForm.get('modelo').value;
      const year = this.ionicForm.get('year').value;
      const potencia = this.ionicForm.get('potencia').value;
      const numChasis = this.ionicForm.get('numChasis').value;
      const escuderia = this.ionicForm.get('escuderia').value;

      this.cochesService.addCoche({ marca, modelo, year, potencia, numChasis, escuderia }).subscribe(response => {
        this.ionicForm.reset();
      });
    }
  }

  gotoHome() {
    this.router.navigateByUrl("/home");
  }

  gotoList() {
    this.router.navigateByUrl("/coches-list");
  }
}
