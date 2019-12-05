import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appD2]'
})
export class D2Directive {

  private elam:HTMLElement
  constructor(public el:ElementRef) {
    this.elam=el.nativeElement
   }

   @HostListener ('input') log(){
     let num = this.el.nativeElement.value
     if(num>9) {
       console.log("number is",num);
     }else{
       alert("eroor,number is"+num)
     }
   }

}
