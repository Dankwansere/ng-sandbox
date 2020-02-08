import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  companies$: Observable<any>;

  constructor(private router: Router,
     private navigationService: NavigationService,
     private store: Store<AppState>) {

   }

  ngOnInit() {
  }

  public goToPage() {
    this.navigationService.setNavObj('about', 'home', 'AboutComponent');
    this.router.navigate(['about']);
  }

  public getCompanies() {

  }

  public deleteCompany(companyId: number) {

  }

  ngOnDestroy(): void {
    console.log('On destroyed');
  }

}
