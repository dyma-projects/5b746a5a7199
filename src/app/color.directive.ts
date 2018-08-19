import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  private touche :string;

  @HostListener('window:keyup',['$event']) KeyUp($event){
    this.touche = $event.key;

    switch ($event.key) {
      case  "ArrowUp":
      this.changeTextColor('Red');
      break;
        case  "ArrowDown":
        this.changeTextColor('Blue');        
        break;
        case  "ArrowRight":
        this.changeTextColor('Green');
        break;
        case  "ArrowLeft":
        this.changeTextColor('Orange');
        break;
    
      default:
      this.changeTextColor('Black')
        break;
    }
    
  }

  private changeTextColor(color:string){
    this.el.nativeElement.style.color=color;
  }

  public test : string;
  
  constructor(private el :ElementRef) { }
  
}
