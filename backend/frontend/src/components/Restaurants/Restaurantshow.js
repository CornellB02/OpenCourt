import React from 'react'
import { Link, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getRestaurant } from '../../store/restaurants'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMessages } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMessage, faMoneyBill, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Reviews from '../Reviews/restaurantsReviews'
import ReviewsBox from '../Reviews/reviewbox'
import PhotosCarousel from './pictures'
import ReservationForm from '../Reservations/reservationform'
import "./restaurants.css"

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
            <li className='current-loca'>
                <a href='/' className='home_class'>Home</a>
            </li>
            <li className='current-loca'>
                <div className='country_class' >United States</div>
            </li>
            <li className='current-loca'>
                <div className='city_class' >New York</div>
            </li>
        </ol>
        <div className='img_d'>
        <a href="#">
                  <img src={`https://steak-book-seeds.s3.amazonaws.com/steak${restaurant.id}.jpeg`} alt="Restaurant" className='img_c'/></a>
                  {/* https://steak-book-seeds.s3.amazonaws.com/steak1.jpeg */}
        {/* <a href="https://placeholder.com"><img src="https://via.placeholder.com/1440x460"></img></a> */}
        </div>
        <div className='under-pic'>
        <div className="main_right_show">
                <ReservationForm  restaurant={restaurant}/>
            </div>
          {/* <div className='main_whole_show'> */}
          <div className='main_left_show'>
              <section className='outer_opmr'>
                <div className='opmr'>
                    <ol>
                    <li className="opmr-li-1">
              <button class="o-button active">Overview</button>
              </li>
              <li className="opmr-li">
              <button class="o-button ">Photos</button>
              </li>
              <li className="opmr-li">
              <button class="o-button">Menu</button>
              </li>
              <li className="opmr-li">
              <button class="o-button">Reviews</button>
              </li>
              {/* </div> */}
              </ol>
                </div>
              <div className='under-buttons'>
              {/* <h1 className='names'>{restaurant.name}</h1>
      <p>Review Stars&Num &nbsp;&nbsp; <i class="fa-thin fa-messages"></i> {restaurant.price_range} {restaurant.neighborhood}</p> */}
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
                <div className='reviewstext'><FontAwesomeIcon icon={faMessage} className="m-icon" /> Reviews</div>
                </div>
                <div className='priceCon'>
                <div className='price'><FontAwesomeIcon icon={faMoneyBill} className="p-icon"/> {restaurant.priceRange} </div>
                </div>
                <div className='att'>
                <div className='cuisine'> <FontAwesomeIcon icon={faUtensils} className="a-icon"/> {restaurant.cuisines} </div>
                </div> 
                {/* &nbsp;&nbsp; {restaurant.price_range} {restaurant.neighborhood} */}
                {/* &nbsp;&nbsp;  */}

                </div> 
                <div className="tags">
              <span className="top-tags">Top Tags:
                <ul className='toptags'>
                  <li className='tagbuttons'><p>Neighborhood Gem</p></li>
                  <li className='tagbuttons'><p>Lively</p></li>
                  <li className='tagbuttons'><p>Good For Special Occasions</p></li>
                </ul>
              </span>
              </div> 
      </div>
      </section>
      <div class="descrip" id="descrip">
      <div class="desctext">

        <p>{restaurant.description}</p>
          <a href="#descrip" class="read-more">... Read more</a>
          <a href="#descri" class="read-less">Read less</a>
      </div>
      </div>
                <div className='underDes'>
                <PhotosCarousel restaurant={restaurant}/>
                <div className='reviewSec'>
                <Link to={`/restaurant/${restaurant.id}/review`}  className="write-review-button" >
          Write a review
        </Link>
        {/* <Link to={`/restaurant/${restaurant.id}/reservs`}  className="write-review-button" >
          Make A Reservation
        </Link> */}
                  {/* llklkl */}
                <Reviews restaurant={restaurant}/>
                {/* <ReservationForm restaurant={restaurant}/> */}
{/* //  <ReviewsBox restaurant={restaurant}/> */}
        </div>
      </div>
                </div>
                </div>
            </div>
        </div>
    // </div>
  )
}

export default RestaurantShowPage

//  {/* llklkl */}
//  <Reviews restaurant={restaurant}/>
//  <ReviewsBox restaurant={restaurant}/>
