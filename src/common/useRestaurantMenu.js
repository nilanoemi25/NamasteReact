import { useEffect } from "react";
import { MENU_API } from "./constant";
import { useState } from "react";

// 16049

const useRestaurantMenu = (id) => {

    const [resInfo, setResInfo] = useState(null); 

    useEffect( () => {

        fetchData();

    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + id);

        const json = await data.json();
        setResInfo(json.data);

    }; 

    return resInfo; 
}; 

export default useRestaurantMenu; 