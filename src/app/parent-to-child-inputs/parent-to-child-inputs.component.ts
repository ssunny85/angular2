import { Component } from '@angular/core';

@Component({
    selector: 'app-parent-to-child-inputs',
    template: `<div>부모
        <child-inputs [name1]="val1" [name2]="val2"></child-inputs>
    </div>`,
    styles: [`div{border:2px solid #666;padding:10px;width:400px;height:200px}`]
})
export class ParentToChildInputsComponent{
    val1 = '사과';
    val2 = '바나나';
}