import { CanActivate } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
  })
export class AboutGuard implements CanActivate {
    constructor(private navigationService: NavigationService) {
    }
    canActivate() {
        return this.navigationService.isRouteValid();
    }
}
