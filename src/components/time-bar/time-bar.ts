import { Component, ElementRef, Renderer2 } from '@angular/core';

/**
 * Generated class for the TimeBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'time-bar',
  templateUrl: 'time-bar.html'
})
export class TimeBarComponent {

//  text: string;

  constructor(private renderer:Renderer2, private elemant: ElementRef) {
    //console.log('Hello TimeBarComponent Component');
  //  this.text = 'Hello World';
  }

  startTimer(time){
 
    this.renderer.setStyle(this.elemant.nativeElement.children[0], 'transition', 'width ' + time + 'ms linear');

    setTimeout(() => {
        this.renderer.setStyle(this.elemant.nativeElement.children[0], 'width', '0%');
    }, 0);

}

}
