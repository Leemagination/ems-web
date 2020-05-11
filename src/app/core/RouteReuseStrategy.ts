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

  public static clearAllReuseRoute() {
    for (const reuseRouteKey in RouteTabReuseStrategy.reuseRoute) {
      const cache: any = reuseRouteKey;
      const componentRef = cache?.componentRef;
      if (componentRef) {
        componentRef.destroy();
      }
    }
    RouteTabReuseStrategy.reuseRoute = {};
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return null;
    }
    return RouteTabReuseStrategy.reuseRoute[this.getRouteUrl(route)] ? RouteTabReuseStrategy.reuseRoute[this.getRouteUrl(route)] : null;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (route['_routerState'].url === '/login') {//退出登录注销组件
      RouteTabReuseStrategy.clearAllReuseRoute();
    }
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
    RouteTabReuseStrategy.reuseRoute[this.getRouteUrl(route)] = handle;
  }

  private getRouteUrl(route: ActivatedRouteSnapshot) {//获取当前路由路径,去除查询参数
    return route['_routerState'].url.split('?')[0].replace(/\//g, '_');
  }


}
