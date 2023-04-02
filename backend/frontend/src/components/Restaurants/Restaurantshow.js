import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getRestaurant } from '../../store/restaurants'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMessages } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMessage, faMoneyBill, faUtensils } from "@fortawesome/free-solid-svg-icons";
import ReviewsBox from '../Reviews/reviewbox'


const RestaurantShowPage = () => {
  // debugger
    const dispatch = useDispatch()
    const { restaurantId } = useParams()
    const restaurant = useSelector((state) => state.restaurants[restaurantId])
    
    useEffect(() => {dispatch(getRestaurant(restaurantId))}, [dispatch])

    // useEffect(() =)

  //   let priceRange = '';
  // if (restaurant) {
  //   if (restaurant.price_range === "$50 and over") {
  //     priceRange = "$$$$";
  //   } else if (restaurant.price_range === "$31 and 50") {
  //     priceRange = "$$$";
  //   } else if (restaurant.price_range === "$30 and under") {
  //     priceRange = "$$";
  //   }
  // }

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
        <div className='under-pic'>
          {/* <div className='main_whole_show'> */}
          <div className='main_left_show'>
              <div className='outer_opmr'>
                <div className='opmr'>
                  <div className='obuttns'>
              <button class="o-button active">Overview</button>
              <button class="o-button ">Photos</button>
              <button class="o-button">Menu</button>
              <button class="o-button">Reviews</button>
              </div>
              <div className='under-buttons'>
              {/* <h1 className='names'>{restaurant.name}</h1>
      <p>Review Stars&Num &nbsp;&nbsp; <i class="fa-thin fa-messages"></i> {restaurant.price_range} {restaurant.neighborhood}</p> */}
              </div>
            </div>
          </div>
          {/* <div className='under-pic'> */}
      <h1 className='names'>{restaurant.name}</h1>
      <div className='info-show'
>     <div className="starsshow">
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} /> 
                &nbsp;
                <FontAwesomeIcon icon={faStar} /> 
                &nbsp; 
                <FontAwesomeIcon icon={faStar} />
                </div>
                <div className='reviews'>
                <FontAwesomeIcon icon={faMessage} className="m-icon" />
                <div className='reviewstext'>Reviews</div>
                </div>
                <div className='priceCon'>
                <FontAwesomeIcon icon={faMoneyBill} className="p-icon"/>
                <div className='price'> {restaurant.priceRange} </div>
                </div>
                <div className='att'>
                <FontAwesomeIcon icon={faUtensils} className="a-icon"/>
                <div className='cuisine'> {restaurant.cuisines} </div>
                </div> 
                {/* &nbsp;&nbsp; {restaurant.price_range} {restaurant.neighborhood} */}
                {/* &nbsp;&nbsp;  */}

                </div> 
                <ul className='toptags'>
                  <button className='tagbuttons'>1</button>
                  <button className='tagbuttons'>2</button>
                  <button className='tagbuttons'>3</button>
                </ul>
      </div>
      </div>
      <div class="descrip" id="description">
        <p>{restaurant.description}</p>
          <a href="#description" class="read-more">... Read more</a>
          <a href="#d" class="read-less">Read less</a>
      </div>
                <div className='underDes'>
                  {/* llklkl */}
                <ReviewsBox/>
                </div>
            </div>
        </div>
    // </div>
  )
}

export default RestaurantShowPage
