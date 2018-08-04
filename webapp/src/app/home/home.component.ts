import { MenuList } from '../shared/menu';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    public topics: object[];

    constructor() {
        this.topics = MenuList;
    }

    ngOnInit() {
    }

}
