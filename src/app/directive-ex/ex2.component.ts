import { Component, Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[mystyle],[myfontsize]'
})
export class CustomAttrDirective{
    private _el: HTMLElement;
    constructor(public el:ElementRef){
        this._el = el.nativeElement;
        this._el.style.padding = '10px'
    }
    @Input('mystyle') myBackground:string; //변수에 직접 할당하는 방식
    @Input() set myfontsize(status:string){
        this._el.style.fontSize = status;
    }
    
    @HostListener('mouseenter') onMouseEnter(){
        this._el.style.backgroundColor = this.myBackground;
    }
    @HostListener('mouseleave') onMouseLeave(){
        this._el.style.backgroundColor = null;
    }   
}

@Component({
    selector: 'app-attr-directive',
    template: `
    <div [mystyle]="'Lavender'" [myfontsize]="fontsize">Directive Attribute</div>
    `
})
export class CustomAttrComponent{
    fontsize:string = '30px';
}
