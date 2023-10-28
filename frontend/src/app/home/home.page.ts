import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor(private router: Router) { }
  gotoCarList(){
    this.router.navigateByUrl("/coches-list");
  }
  gotoDriverList(){
    this.router.navigateByUrl("/pilotos-list");
  }
  gotoTeamList(){
    this.router.navigateByUrl("/escuderias-list");
  }
  gotoCarAdd(){
    this.router.navigateByUrl("/coches-add");
  }
  gotoDriverAdd(){
    this.router.navigateByUrl("/pilotos-add");
  }
  gotoTeamAdd(){
    this.router.navigateByUrl("/escuderias-add");
  }
}
