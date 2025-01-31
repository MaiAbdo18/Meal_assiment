import { Component, Input } from '@angular/core';
import { product } from '../models/product';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

@Input({required : true}) currentProduct : product = {} as product ;


}
