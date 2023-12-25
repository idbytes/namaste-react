import { useState, useEffect } from 'react';
import RestuarantCard from './RestuarantCard';
import Shimmer from './Shimmer';
import resList from '../utils/mockData';

// let filteredResList = resList;

const Body = () => {
    // State variable
    const [listOfResturants, setListOfResturants] = useState([]);
    const [filteredResturants, setFilteredResturants] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            );
        
        const jsonData = await data.json();
        
        setListOfResturants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setFilteredResturants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleSearch = () => {
        const filteredResturant = listOfResturants.filter((res) =>
           res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        console.log(filteredResturant);
        setFilteredResturants(filteredResturant);
    }

    return listOfResturants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className='search'>
                    <input type='text' className='search-box' value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={handleSearch}>Search</button>
                </div>
               <button className="filter-btn" onClick={() => {
                 setListOfResturants(listOfResturants.filter(
                    (res) => res.info.avgRating > 4
                ));
               }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredResturants.map((restuarant) => (
                    <RestuarantCard key={restuarant?.info?.id} resData={restuarant?.info}/>
                ))}
            </div>
        </div>
    )
}

export default Body;