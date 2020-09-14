import {
  Directive, DoCheck,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { Router } from '@angular/router';
import { MenuBarService } from '../../core/services/menu-bar.service';


@Directive({
  selector: '[buttonAuthority]'
})
export class ButtonAuthorityDirective implements OnInit, DoCheck {

  @Input() buttonAuthority: string;
  viewRef;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private menuService: MenuBarService,
    private render: Renderer2,
    private router: Router) {

  }

  ngOnInit() {
    const url = this.router.url.split('?')[0];
    const authority = this.menuService.menuPermission[url];
    if (!authority) {
      return;
    }
    if (authority.buttons.indexOf(this.buttonAuthority) !== -1) {
      this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef);
      //this.viewContainer.remove(0);
    }


  }

  ngDoCheck(): void {
    const url = this.router.url.split('?')[0];
    const authority = this.menuService.menuPermission[url];
    if (!authority) {
      this.viewContainer.clear();
      return;
    }
    if (authority.buttons.indexOf(this.buttonAuthority) === -1) {
      if (this.viewRef) {
        const index = this.viewContainer.indexOf(this.viewRef);
        if (index !== -1) {
          this.viewContainer.remove(index);
          this.viewRef = null;
        }
      }
    } else {
      if (!this.viewRef) {
        this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
  }
}
