import { allowedRoutes } from './routeArray';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
  })
export class NavigationService {
    public _navObj: NavObj;
    public routeMap: Map<string, NavObj>;
    constructor() {
        this.routeMap = new Map();
        allowedRoutes.map(x => {
            this.routeMap.set(x.component, x);
        });
    }


    public setNavObj(to: string, from: string, component: string) {
        this._navObj = {
            to,
            from,
            component
        };
    }

    public get navObj(): NavObj  {
        return this._navObj;
    }

    public isRouteValid() {
        let navDest;
        if (this.navObj) {
            navDest = this.routeMap.get(this.navObj.component);
        } else {
            return false;
        }
        if (!navDest) {
            return false;
        }
        if (this.navObj.from === navDest.from && this.navObj.to === navDest.to) {
            this.clearNavObj();
            return true;
        } else {
            this.clearNavObj();
            return false;
        }
    }

    private clearNavObj() {
        this.setNavObj(undefined, undefined, undefined);
    }

}

export interface NavObj {
    to: string;
    from: string;
    component: string;
}
