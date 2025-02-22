import RESTAURANT_DATA from "../../utils/mockData";
import RestaurantsCards from './RestaurantsCards'

const Body = () => {
    return(
        <div className="body">
            <div className="container">
                <div className="searchContainer">
                    <input type="search" placeholder="Search for fresh eats..." />
                </div>
                <div className="restroCardsContainer">
                    {RESTAURANT_DATA.map((restaurant) => {
                        return(
                            <RestaurantsCards restaurant={restaurant?.data}/>
                        );
                    })}
                    
                </div>
            </div>
        </div>
    );
}

export default Body;