import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
    selector: 'app-layout',
    templateUrl: './admin-layout.component.html'
})

export class AdminLayoutComponent implements OnInit {

  public hover: boolean;
  public showSiderBar = false;
  public openSiderBar = false;
  public miniSiderBar = false;

    constructor(private breakpointObserver: BreakpointObserver) {
    }

    ngOnInit() {
      this.breakpointObserver
        .observe(['(min-width: 640px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.showSiderBar = true;
            this.miniSiderBar = false;
          } else {
            this.showSiderBar = false;
            setTimeout(() => this.miniSiderBar = false, 500);
          }
        });
    }
}
