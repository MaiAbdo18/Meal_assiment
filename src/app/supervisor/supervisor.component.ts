import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-supervisor',
  imports: [],
  templateUrl: './supervisor.component.html',
  styleUrl: './supervisor.component.css'
})
export class SupervisorComponent {

@Output()  eventCust : EventEmitter<boolean> = new EventEmitter();

disapear()
{
  this.eventCust.emit(false)
}

}
