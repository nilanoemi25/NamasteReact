import RestaurantCard  from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {useState} from "react";
import {useEffect} from "react";
import useOnlineStatus from "../common/useOnlineStatus";



const Body = () =>
{
   
    const[listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);



    const [searchText, setSearchText] = useState("");

      useEffect(() =>{
        fetchData();
      }, []);

      
       const fetchData =  async() => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145800&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
         );
       
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
       };

      const onlineStatus = useOnlineStatus(); 
      
      if(onlineStatus === false)
        return (<h1> Looks like you are offline! 
          Please check your internet connection. </h1>);
      

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter"> 
            <div className="search">
            <input type="text" className="search-box" 
            value={searchText} onChange ={(e)=> {
              setSearchText(e.target.value);
            }} /> 
            <button onClick={()=>{
            const filteredRestaurant = 
            listOfRestaurants.filter((res)=> res.info.name.toLowerCase()?.includes(searchText.toLowerCase()));

            setFilteredRestaurant(filteredRestaurant); 

            }}
            >Search</button>


          </div>
            <button className="filter-btn"  onClick={() =>
                 { 
                   const filteredList = filteredRestaurant.filter(
                    (res) => res.info?.avgRating > 4 
                   );
                 
                   setFilteredRestaurant(filteredList)
                }}> 

            Top Rated Restaurants
            </button>

            </div>
            <div className="res-container">
              {filteredRestaurant?.map((restaurant) => (
                <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
              ))

              }
            </div>
        </div>
    );
};

export default Body; 