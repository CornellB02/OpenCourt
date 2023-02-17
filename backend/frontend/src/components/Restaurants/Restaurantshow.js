import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getRestaurant } from '../../store/restaurants'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMessages } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



const RestaurantShowPage = () => {
  // debugger
    const dispatch = useDispatch()
    const { restaurantId } = useParams()
    const restaurant = useSelector((state) => state.restaurants[restaurantId])
    
    useEffect(() => {dispatch(getRestaurant(restaurantId))}, [dispatch])

    // useEffect(() =)

    let priceRange = restaurant.price_range;
  if (priceRange === "$50 and over") {
    priceRange = "$$$$";
  } else if (priceRange === "$31 and 50") {
    priceRange = "$$$";
  } else if (priceRange === "$30 and under") {
    priceRange = "$$";
  }

    if (!restaurant){
      // debugger
        return "loading..."
    }

  return (
    <div className='show_container'>
      <div className='info-container'>
      <ol className='location_route'>
            <li className='home-location-list'>
                {/* ::before */}
                <a href='/' className='link-style'>Home</a>
                {/* ::after */}
            </li>
            <li className='Usa'>
                {/* ::before */}
                <div className='country_class' >United States</div>
                {/* ::after */}
            </li>
        </ol>
        <div className='img_d'>
        <a href="#">
                  <img src={`https://steak-book-seeds.s3.amazonaws.com/steak${restaurant.id}.jpeg`} alt="Restaurant" className='img_c'/></a>
                  {/* https://steak-book-seeds.s3.amazonaws.com/steak1.jpeg */}
        {/* <a href="https://placeholder.com"><img src="https://via.placeholder.com/1440x460"></img></a> */}
        </div>
          <div className='main_whole_show'>
          <div className='main_left_show'>
              <div className='outer_opmr'>
                <div className='opmr'>
              <button class="o-button active">Overview</button>
              <button class="o-button">Photos</button>
              <button class="o-button">Menu</button>
              <button class="o-button">Reviews</button>
              <div className='under-buttons'>
              {/* <h1 className='names'>{restaurant.name}</h1>
      <p>Review Stars&Num &nbsp;&nbsp; <i class="fa-thin fa-messages"></i> {restaurant.price_range} {restaurant.neighborhood}</p> */}
              </div>
            </div>
          </div>
      <h1 className='names'>{restaurant.name}</h1>
      <div className='info-show'
>     <p><div className="ratingreviews">
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} /> 
                &nbsp;
                <FontAwesomeIcon icon={faStar} /> 
                &nbsp; 
                <FontAwesomeIcon icon={faStar} />   
                </div> &nbsp;&nbsp; {restaurant.price_range} {restaurant.neighborhood}
                &nbsp;&nbsp; 
                <br/>
                <br/>
                </p>
                </div> 
      <p>{restaurant.neighborhood}</p>
      </div>
      </div>
                <div className='descrip'>
                {restaurant.description}
                </div>
      </div>
    </div>
  )
}

export default RestaurantShowPage
