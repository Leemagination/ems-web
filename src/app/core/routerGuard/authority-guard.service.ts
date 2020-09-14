import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateChild,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { MenuBarService } from '../services/menu-bar.service';

@Injectable()
export class AuthorityGuard implements CanActivateChild {

    constructor(private router: Router, private menuService: MenuBarService, private nzMesasge: NzMessageService) {
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authorityValid(state);
    }

    authorityValid(state): boolean {
        const url = state.url.match(/^.*?($|(?=\?))/)[0];
        if (url === '/home') {
            return true;
        }
        if (this.menuService.menuPermission[url]) {
            return true;
        }
        this.nzMesasge.remove();
        this.nzMesasge.error('该路径无权限,跳回首页', { nzDuration: 2000 });
        this.router.navigateByUrl('/home');
        return false;
    }

}