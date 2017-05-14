import { Component } from '@angular/core';

@Component({
    selector: 'first-depth',
    template: `
    <div class="first">1번째 깊이</div>
    <span class="first">span</span>
    <second-depth></second-depth>
    <button>host context</button>
    `,
    styles: [`
    :host{display:block;width:250px;padding:10px;border:5px solid #000}
    :host(.active){display:block;width:250px;padding:10px;border:5px dotted blue}
    :host-context(.first-group) button{font-weight:bold}
    `]
})
export class FirstDepthComponent{}
