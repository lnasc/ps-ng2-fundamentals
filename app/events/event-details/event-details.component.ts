import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent, ISession } from '../shared/event.model'

@Component({
    selector: 'event-details',
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px;  }
        a { cursor: pointer }
    `]
})
export class EventDetailsComponent implements OnInit {
    event:IEvent
    addMode: boolean

    constructor(
        private eventService:EventService,
        private route:ActivatedRoute) {
     }

     ngOnInit() {
         this.event = this.eventService.getEvent(
             +this.route.snapshot.params['id']);
     }

     addSession() {
         this.addMode = true
     }

     saveNewSession(session:ISession) {
         
     }
}