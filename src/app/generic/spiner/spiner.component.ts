import { Component } from '@angular/core';

@Component({
  selector: 'app-spiner',
  template: '<mat-progress-spinner class="spiner"></mat-progress-spinner>',
  styles: [`.spiner{
                position: absolute;
                top: calc(50vh - 60px);
                left: calc(50vw - 60px);
                stroke: red !important;
            }`
  ]
})
export class SpinerComponent {

  constructor() { }


}
