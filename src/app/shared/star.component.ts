import { Component, Input, OnChanges, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: 'star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number = 4;
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> 
        = new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
        console.log('In OnChanges');
    }

    onClick(): void {
        this.ratingClicked.emit(`Star rating is ${this.rating}`);
    }
}