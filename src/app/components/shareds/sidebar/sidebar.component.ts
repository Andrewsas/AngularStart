import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Menu } from 'src/app/model/menu';
import { MENUS } from 'src/app/constant/menus';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public hover: boolean;
  public menus: Menu[] = MENUS;

  @Input()
  public miniSiderBar: boolean;

  @Output()
  private maxminiza = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  prev(h: boolean) {
    if (this.miniSiderBar) {
      this.hover = h;
      this.maxminiza.emit(h);
    }
  }
}
