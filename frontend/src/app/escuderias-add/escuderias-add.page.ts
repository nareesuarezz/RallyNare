import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EscuderiasService } from '../services/escuderias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escuderias-add',
  templateUrl: './escuderias-add.page.html',
  styleUrls: ['./escuderias-add.page.scss'],
})
export class EscuderiasAddPage implements OnInit {

  constructor(private escuderiasService: EscuderiasService, private router: Router, public formBuilder: FormBuilder) { }

  ionicForm: any;

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nombreEscuderia: ['', [Validators.required, Validators.minLength(2)]],
      pais: ['', [Validators.required, Validators.minLength(2)]],
      yearFundacion: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  addEscuderia() {
    if (this.ionicForm.valid) {
      const nombreEscuderia = this.ionicForm.get('nombreEscuderia').value;
      const pais = this.ionicForm.get('pais').value;
      const yearFundacion = this.ionicForm.get('yearFundacion').value;
      console.log(nombreEscuderia, pais, yearFundacion)
      this.escuderiasService.addEscuderia({ nombreEscuderia, pais, yearFundacion }).subscribe(response => {
        this.ionicForm.reset();
      });
    }
  }

  gotoHome() {
    this.router.navigateByUrl("/home");
  }

  gotoList() {
    this.router.navigateByUrl("/escuderias-list");
  }
}
