import { Directive, HostListener, ElementRef } from '@angular/core';
import { SService } from '../ser/s.service';

@Directive({
  selector: '[appD1]'
})
export class D1Directive {

    ele:HTMLElement

  constructor(public svs:SService,private el:ElementRef) {
    this.ele=el.nativeElement
   }

  @HostListener ('change')aler(){
    alert("change")
    this.addtoarrey()
  }

  addtoarrey(){
    this.svs.arr.push(this.el.nativeElement.value)
  }
}
