import { UtilsService } from './../../shared/utils.service';
import { Component, OnInit } from '@angular/core';
import { MenuList } from './../../shared/menu';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
    public navList: object[];

    constructor( public _utils: UtilsService ) { }

    ngOnInit() {
        this.navList = MenuList;
    }

    public goToTopic (hook) {
        this._utils.sctollToE(hook);
    }

}
