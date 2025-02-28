import RestaurantsCards from './RestaurantsCards';
import { useState, useEffect } from "react";
import ShimmerCard from './ShimmerCards';
import { API_URL } from '../../utils/constants';

const Body = () => {
    let [restaurantData, setRestaurantData] = useState([]);
    let [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [btnText, setBtnText] = useState('Search')

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const proxy_url = `https://api.allorigins.win/raw?url=${encodeURIComponent(API_URL)}`;
        const data = await fetch(proxy_url);
        const jsonData = await data.json();
        setRestaurantData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(restaurantData.length === 0){
        return (
            <div className="container">
                <div style={{ display: "flex", gap: "20px", margin: "102px 0", flexWrap: "wrap" }}>
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                </div>
            </div>
        )
    }

    const handleFilterData = () => {
        const filteredData = restaurantData.filter(res => res?.info?.avgRating > 4.5);
        setFilteredData(filteredData);
    }

    const handleSearch = () => {
        if(btnText === 'Search'){
            const filteredRestaurants = restaurantData.filter(data => data?.info?.name?.toLowerCase().includes(searchText));
            setFilteredData(filteredRestaurants);
            setBtnText('Clear');
        }else {
            setSearchText('');
            setBtnText('Search');
            setFilteredData(restaurantData);
        }
    }

    return(
        <div className="body">
            <div className="container">
                <div className="searchContainer">
                    <input 
                        type="search" 
                        placeholder="Search for fresh eats..."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }} />
                        <button onClick={handleSearch}>{btnText}</button>
                </div>
                <div>
                    <button onClick={handleFilterData}>Top Rated Restaurants</button>
                </div>
                <div className="restroCardsContainer">
                    {filteredData.length === 0 ? <h2> No Results Found</h2> 
                    :
                    filteredData.map((restaurant) => {
                        return(
                            <RestaurantsCards key={restaurant?.info?.id} restaurant={restaurant?.info}/>
                        );
                    })}
                    
                </div>
            </div>
        </div>
    );
}

export default Body;