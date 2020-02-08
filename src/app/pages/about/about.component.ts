import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private location: Location, private router: Router, private navigationService: NavigationService) { }

  ngOnInit() {
  }

  public navigateTo() {
    this.navigationService.setNavObj('about', 'home', 'AboutComponent');
    this.router.navigate(['home']);
  }

}
