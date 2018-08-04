import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Slides } from '../../shared/slides';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.less'],
    providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit {
    public slides: string[];

    constructor(carousel: NgbCarouselConfig) {
        carousel.showNavigationArrows = false;
        carousel.showNavigationIndicators = false;
        carousel.interval = 10000;
    }

    ngOnInit() {
        this.slides = Slides;
    }
}
