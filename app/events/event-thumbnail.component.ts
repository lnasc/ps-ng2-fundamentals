import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
    moduleId: module.id,
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
     styles: [`
        .well div { color: #bbb }
        .pad-left { margin-left: 10px; }
        .thumbnail { min-height: 210px; }
        .green { color: green !important; }
        .bold { font-weight: bold; }
    `]
})
export class EventThumbnailComponent {
    constructor() { }

    @Input() event:IEvent

    getStartTimeClass() {
      const isEarlyStart = this.event && this.event.time === '8:00 am';   
      return { green: isEarlyStart, bold: isEarlyStart }
    }
}