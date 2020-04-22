import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle
} from '@angular/router';

export class RouteTabReuseStrategy implements RouteReuseStrategy {
  private reuseRoute: { [key: string]: DetachedRouteHandle } = {};

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return null;
    }
    return this.reuseRoute[this.getRouteUrl(route)];
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return (
      !!route.routeConfig && !!this.reuseRoute[this.getRouteUrl(route)]
    );
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return false;
    }
    return route.data.reuseRoute !== false;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    if (!handle) {
      return;
    }
    this.reuseRoute[this.getRouteUrl(route)] = handle;
  }

  private getRouteUrl(route: ActivatedRouteSnapshot) {//获取当前路由路径
    return route['_routerState'].url;
  }

}
