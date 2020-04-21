import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle
} from '@angular/router';

export class RouteTabReuseStrategy implements RouteReuseStrategy {
  private reuseRoute: { [key: string]: DetachedRouteHandle } = {};

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    console.log('retrieve', route.routeConfig);
    if (!route.routeConfig) {
      return null;
    }
    console.log(this.reuseRoute[route.routeConfig.path]);
    return this.reuseRoute[route.routeConfig.path];
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log('attach', route.routeConfig, this.reuseRoute[route.routeConfig.path]);
    return (
      !!route.routeConfig && !!this.reuseRoute[route.routeConfig.path]
    );
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log('detach');
    return route.data.reuseRoute !== false;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.log(future.routeConfig, curr.routeConfig);
    return future.routeConfig === curr.routeConfig;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    console.log('store', route.routeConfig);
    this.reuseRoute[route.routeConfig.path] = handle;
  }
}
