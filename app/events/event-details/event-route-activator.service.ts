import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from "../shared/event.service"

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService, private router:Router) {
    }

    canActivate(routeSnapshot:ActivatedRouteSnapshot):boolean {
        const eventExists = !!this.eventService.getEvent(+routeSnapshot.params['id']);
        if (!eventExists) this.router.navigate(['/404']);
        return eventExists;
    }
}