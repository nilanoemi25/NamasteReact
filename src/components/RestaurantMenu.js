import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../common/constant";
import useRestaurantMenu from "../common/useRestaurantMenu";

const RestaurantMenu = () =>
{

    const {id} = useParams();

    const resInfo = useRestaurantMenu(id);
  

if(resInfo === null) return <Shimmer />; 

    if(resInfo!==null){
  var  { name, cuisines, avgRating, costForTwoMessage } = resInfo.cards[0].card?.card?.info;
    };
 
  
  const {itemCards} = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  // Watch out. There are no ItemCards inside ItemCards. Either destructure or assign to variable. 

 console.log(itemCards);

 return (
 
    <div> 
    <h1> {name}  </h1>
    <h2> {cuisines.join(", ")} </h2>
    <h3> {avgRating} </h3>
    <h3> {costForTwoMessage}  </h3>
    <h4> Menu </h4>
    <ul>
       {itemCards.map((item)=> (<li key={item.card.info.id}> {item.card.info.name }</li>)) }
    </ul>
    </div>
   
 );

};




export default RestaurantMenu;