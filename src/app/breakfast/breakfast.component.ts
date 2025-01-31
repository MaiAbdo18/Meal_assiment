import { Component } from '@angular/core';
import { product } from '../models/product';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-breakfast',
  imports: [CardComponent],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.css'
})
export class BreakfastComponent {

  allProducts : product[] = [
    {pImgPath : "/imgs/1.jpg" , pTitle : "Bread omelette" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/2.jpg" , pTitle : "Breakfast Potatoes" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/3.jpg" , pTitle : "English Breakfast" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/4.jpg" , pTitle : "Fruit and Cream Cheese Breakfast Pastries" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/5.jpg" , pTitle : "Full English Breakfast" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/6.jpg" , pTitle : "Home-made Mandazi" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/7.jpg" , pTitle : "Salmon Eggs Eggs Benedict" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/8.jpg" , pTitle : "Smoked Haddock Kedgeree" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
  ]

}
