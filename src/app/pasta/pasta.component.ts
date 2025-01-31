import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { product } from '../models/product';

@Component({
  selector: 'app-pasta',
  imports: [CardComponent],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {

  allProducts : product[] = [
    {pImgPath : "/imgs/usywpp1511189717.jpg" , pTitle : "Chilli prawn linguine" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/0jv5gx1661040802.jpg" , pTitle : "Fettuccine Alfredo" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/uquqtu1511178042.jpg" , pTitle : "Fettucine alfredo" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/xutquv1505330523.jpg" , pTitle : "Grilled Mac and Cheese Sandwich" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/xr0n4r1576788363.jpg" , pTitle : "Lasagna Sandwiches" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/wtsvxx1511296896.jpg" , pTitle : "Lasagne" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/vvtvtr1511180578.jpg" , pTitle : "Pilchard puttanesca" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/llcbn01574260722.jpg" , pTitle : "Spaghetti alla Carbonara" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/qvrwpt1511181864.jpg" , pTitle : "Venetian Duck Ragu" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} 
    
  ]

}
