import { NgStyle } from '@angular/common';
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBgRed]',
  standalone: true
})
export class BgRedDirective implements OnInit{

  @Input() bg:string='tomato';
  @Input() color:string='ccc';
  @Input() padding:string='20px';


  constructor(private el:ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor=this.bg
    this.el.nativeElement.style.padding=this.padding
    this.el.nativeElement.style.color=this.color
    console.log(this.el);
    
  }
  @HostListener('mouseenter') onMouseenter(){
    this.el.nativeElement.style.backgroundColor='#09c'
    
  }
  
  @HostListener('mouseleave',['$event']) onMouseLeave(event:MouseEvent){
    console.log(event)
    this.el.nativeElement.style.backgroundColor='tomato'
    this.el.nativeElement.style.padding='20px'
    this.el.nativeElement.style.color='#ccc'
  }
}
