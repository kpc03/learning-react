import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [ resInfo, setResInfo] = useState(null);
    const [ resMenu, setResMenu ] = useState(null);

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const data = await fetch(MENU_API_URL+resId);
        const json = await data.json();
        setResInfo(json);

        const cardArray = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const menuCard = cardArray.find((card) => card?.card?.card?.itemCards);

        setResMenu(menuCard?.card?.card?.itemCards);
    }
    return {resInfo, resMenu};
}

export default useRestaurantMenu;