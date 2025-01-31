import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { product } from '../models/product';

@Component({
  selector: 'app-seafood',
  imports: [CardComponent],
  templateUrl: './seafood.component.html',
  styleUrl: './seafood.component.css'
})
export class SeafoodComponent {

  allProducts : product[] = [
    {pImgPath :'/imgs/1548772327.jpg' , pTitle : "Baked salmon with fennel & tomatoes", pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    { pImgPath : "/imgs/uvuyxu1503067369.jpg" , pTitle : "Cajun spiced fish tacos" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/1520084413.jpg" , pTitle : "Escovitch Fish" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/a15wsa1614349126.jpg" , pTitle : "Fish fofos" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/ysxwuq1487323065.jpg" , pTitle : "Fish pie" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/7n8su21699013057.jpg" , pTitle : "Fish Soup (Ukha)" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/vptqpw1511798500.jpg" , pTitle : "Fish Stew with Rouille" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/wuvryu1468232995.jpg" , pTitle : "Garides Saganaki" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/lpd4wy1614347943.jpg" , pTitle : "Grilled Portuguese sardines" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/xxyupu1468262513.jpg" , pTitle : "Honey Teriyaki Salmon" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/utxqpt1511639216.jpg" , pTitle : "Kedgeree" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/1525873040.jpg" , pTitle : "Kung Po Prawns" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/rvypwy1503069308.jpg" , pTitle : "Laksa King Prawn Noodles" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/wvqpwt1468339226.jpg" , pTitle : "Mediterranean Pasta Salad" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/xquakq1619787532.jpg" , pTitle : "Mee goreng mamak" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/wai9bw1619788844.jpg" , pTitle : "Nasi lemak" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/do7zps1614349775.jpg" , pTitle : "Portuguese fish stew (Caldeirada de peixe)" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/vptqpw1511798500.jpg" , pTitle : "Recheado Masala Fish" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/1549542994.jpg" , pTitle : "Salmon Avocado Salad" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/xxrxux1503070723.jpg" , pTitle : "Salmon Prawn Risotto" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/vytypy1511883765.jpg" , pTitle : "Saltfish and Ackee" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/wqqvyq1511179730.jpg" , pTitle : "Seafood fideuà" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/1529445434.jpg" , pTitle : "Shrimp Chow Fun" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/7ttta31593350374.jpg" , pTitle : "Sledz w Oleju (Polish Herrings)" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/1c5oso1614347493.jpg" , pTitle : "Spring onion and prawn empanadas" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/g046bb1663960946.jpg" , pTitle : "Sushi" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/spswqs1511558697.jpg" , pTitle : "Three Fish Pie" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/2dsltq1560461468.jpg" , pTitle : "Tuna and Egg Briks" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content."} ,
    {pImgPath : "/imgs/yypwwq1511304979.jpg" , pTitle : "Tuna Nicoise" , pDsec : "Some quick example text to build on the card title and make up the bulk of the card's content.s"} 
    
  ]

}
