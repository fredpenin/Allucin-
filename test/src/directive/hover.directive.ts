import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class HoverDirective {

    constructor( private el: ElementRef ){}

    @HostListener('mouseenter') onMouseEnter(){
        this.setBackground( 'red' );
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBackground( null );
    }

    private setBackground( color: string ){
        this.el.nativeElement.style.backgroundColor = color;
    }
}
