import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {
    @Input() topic;
    public category;

    constructor() { }

    ngOnInit() {
        this.category = this.topic;
    }

}
