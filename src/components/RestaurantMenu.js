import { useEffect, useState } from "react";
import { MENU_API_URL, MENU_IMG_BASE_PATH } from "../../utils/constants";
import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCards";


const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState();

    const { resId } = useParams();    

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
        console.log(menuCard);
    }

    if(resInfo === null || resMenu === null) return (
        <div className="container">
            <div style={{ display: "flex", gap: "20px", margin: "102px 0", flexWrap: "wrap" }}>
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
            </div>
        </div>
    );

    // FOR RESTAURANT INFO & NOT FOR ITS MENU
    const { name, avgRating, costForTwoMessage
    } = resInfo?.data?.cards[2]?.card?.card?.info; 

    return(
        <div className="container body">
            <h1>{name}</h1>
            <h3 style={{color: "#666"}}>{avgRating}</h3>
            <h3 style={{color: "#666"}}>{costForTwoMessage}</h3>

            <div className="cardListWrapper">
                {resMenu.map((item,i) => {
                    const {name, imageId, isVeg, description, price, defaultPrice} = item?.card?.info;
                    return(
                        <>
                            <div className="cardList" key={i}>
                                <div>
                                    {isVeg ? <div className="isVeg"></div> : <div className="isNonVeg"></div>}
                                    <h3 style={{padding: "6px 0"}}>{name}</h3>
                                    <h3 style={{padding: "0 0 6px"}}>Rs. {price/100 || defaultPrice/100}</h3>
                                    <p>{description}</p>
                                </div>
                                {imageId !== undefined && <img src={MENU_IMG_BASE_PATH+imageId} alt={name} height="100px" width="100px"/>}
                            </div>
                            {i !== resMenu.length - 1 && <div className="cardListBorder"></div>}
                        </>
                    );
                })}
            </div>
        </div>
    )
}

export default RestaurantMenu;