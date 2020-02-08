import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DamageLogger } from './interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
    
  }

  title = 'test-app';

  private obj = {};

  ngOnInit(): void {
   this.test();
   
  }

  public test() {
    let logDamage: DamageLogger;
    logDamage = (reason: string) => {console.log('Hello Gege: ', reason); };
    console.log(logDamage('To big'));
  }

  public goToPage() {
    this.router.navigate(['home']);
  }

}
