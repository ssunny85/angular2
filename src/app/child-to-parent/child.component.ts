import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child',
    template: `<div>자식<br>
        <button type="button" (click)="updateParent(active)">부모에게 이벤트보내기</button>
    </div>`,
    styles: [`div{border:2px dotted #666;padding10px;margin-top:5px;width:90%;height:50%}`]
})
export class ChildComponent{
    active:boolean = false;
    @Output() outputProperty = new EventEmitter<boolean>();
    updateParent(active:boolean){
        this.active = !active;
        this.outputProperty.emit(this.active);
    }
}