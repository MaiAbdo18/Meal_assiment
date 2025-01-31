import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [NavComponent , RouterOutlet],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {

}
