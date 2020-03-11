import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { MENUS } from 'src/app/constant/menus';
import { Menu, SubMenu } from 'src/app/model/menu';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnChanges {

  public title: string;
  public minimize = false;
  private menu: any[] = [];

  @Input()
  public mini: boolean;

  @Input()
  public showSiderBar: boolean;

  @Output()
  private miniSiderBar = new EventEmitter<boolean>();

  @Output()
  private toogle = new EventEmitter<boolean>();


  constructor(private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.configureMenus();
    this.setTitle();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.mini && changes.mini.firstChange !== undefined) {
      this.minimize = changes.mini.currentValue;
    }
  }

  public minimizeSidebar() {
    this.minimize = !this.minimize;
    this.miniSiderBar.emit(this.minimize);
  }

  public exibeSiderbar() {
    this.toogle.emit();
  }

  private setTitle() {
    this.activatedRoute.url.subscribe(
      () => {
        this.menu.forEach((m: any) => {
          if (this.location.path().indexOf(m.path) > -1) {
            this.title = m.title;
          }
        });
      });
  }

  private configureMenus() {
    MENUS.map((m: Menu) => {
      if (m.children && m.children.length) {
        this.menu = [... m.children.map((s: SubMenu) =>  {
          return { path: `${m.router}/${s.router}`, title: s.title};
        } )];
      } else {
        this.menu.push({path: m.router, title: m.title});
      }
    });
  }

}
