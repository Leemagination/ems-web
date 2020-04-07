import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle
} from '@angular/router';

export class RouteTabReuseStrategy implements RouteReuseStrategy {
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    console.log('retrieve', route);
    return undefined;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log('attach', route);
    return false;
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log('Detach', route);
    return false;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.log('ReuseRoute');
    return false;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    console.log('store', route);
  }
}
