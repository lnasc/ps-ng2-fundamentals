import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { CreateEventComponent } from './events/create-event.component'
import { CreateSessionComponent } from './events/event-details/create-session.component'
import { SessionListComponent } from './events/event-details/session-list.component'
import { Error404Component } from './errors/404.component'
import { NavBarComponent } from './nav/navbar.component'

import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventsListResolver } from './events/events-list-resolver.service'
import { AuthService } from './user/auth.service'

import { appRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventDetailsComponent,
        EventThumbnailComponent,
        CreateSessionComponent,
        CreateEventComponent,
        SessionListComponent,
        Error404Component,
        NavBarComponent],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventsListResolver,
        AuthService]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    return component.isDirty
        ? window.confirm('You have not saved this event, do you really want to cancel ?')
        : true;
}