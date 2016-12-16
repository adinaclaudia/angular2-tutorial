import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective implements OnInit{
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('click', ['$event']) onClick(event){
    console.log("Event target "+event.target);
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @Input() defaultColor='white';
  @Input('dirHighlight') highlightColor='green';

  private backgroundColor: string;
  //inject the element and the renderer and use the renderer to change properties of the element
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //this.elementRef.nativeElement.style.backgroundColor='green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
