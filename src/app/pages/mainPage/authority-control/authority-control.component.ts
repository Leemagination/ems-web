import { Component, OnInit } from '@angular/core';
import { MenuBarService } from '../../../core/services/menu-bar.service';

@Component({
  selector: 'app-authority-control',
  templateUrl: './authority-control.component.html',
  styleUrls: ['./authority-control.component.scss']
})
export class AuthorityControlComponent implements OnInit {
  roleAuthority = {
    administrators: true,
    certainRoleA: true,
    certainRoleB: true,
    guest: true,
  };

  constructor(private menuService: MenuBarService) {
    const authority = JSON.parse(localStorage.getItem('currentUserRole'));
    if (!authority) {
      localStorage.setItem('currentUserRole', JSON.stringify(['administrators', 'certainRoleA', 'certainRoleB', 'guest']));
    } else {
      for (const prop in this.roleAuthority) {
        this.roleAuthority[prop] = false;
      }
      authority.forEach(item => {
        this.roleAuthority[item] = true;
      });
    }
  }

  ngOnInit(): void {
  }


  authorityChange() {
    const authorityArr = [];
    for (const prop in this.roleAuthority) {
      if (this.roleAuthority[prop]) {
        authorityArr.push(prop);
      }
    }
    localStorage.setItem('currentUserRole', JSON.stringify(authorityArr));
    this.menuService.loadPermission();
  }
}
