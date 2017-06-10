import {Component} from '@angular/core'; 

@Component({
    selector: 'app-custom-orderby',
    template: `
    <div>
    정렬방법 : <select [(ngModel)]="sortMethod">
        <option value="asc">오름차순</option>
        <option value="desc">내림차순</option>
    </select>

    정렬키 : <select [(ngModel)]="">
        <option></option>
    </select>
    </div>
    `
})
export class CustomOrderbyComponent{

}
