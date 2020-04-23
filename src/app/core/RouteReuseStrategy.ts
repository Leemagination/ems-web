import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle
} from '@angular/router';

export class RouteTabReuseStrategy implements RouteReuseStrategy {
  private static reuseRoute: { [key: string]: DetachedRouteHandle } = {};
  private static deleteUrl: string;

  /** 删除路由快照,注销组件 */
  public static deleteRouteSnapshot(url: string): void {
    RouteTabReuseStrategy.deleteUrl = url;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return null;
    }
    return RouteTabReuseStrategy.reuseRoute[this.getRouteUrl(route)];
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return (
      !!route.routeConfig && !!RouteTabReuseStrategy.reuseRoute[this.getRouteUrl(route)]
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
    if (route['_routerState'].url === RouteTabReuseStrategy.deleteUrl) {
      const cache: any = handle;
      const componentRef = cache?.componentRef;
      if (componentRef) {
        componentRef.destroy();
      }
      RouteTabReuseStrategy.deleteUrl = null;
      return;
    }
    console.log(RouteTabReuseStrategy.reuseRoute)
    RouteTabReuseStrategy.reuseRoute[this.getRouteUrl(route)] = handle;
  }

  private getRouteUrl(route: ActivatedRouteSnapshot) {//获取当前路由路径
    return route['_routerState'].url.replace(/\//g, '_');
  }

}
