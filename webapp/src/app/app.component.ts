import { UtilsService } from './shared/utils.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'app';

    constructor (private _utils: UtilsService) {}

    public goTop() {
        const headerHook = 'header-hook';
        this._utils.sctollToE(headerHook);
    }
}
