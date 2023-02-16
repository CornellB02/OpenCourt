import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getRestaurant } from '../../store/restaurants'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMessages } from '@fortawesome/free-solid-svg-icons';



const RestaurantShowPage = () => {
  // debugger
    const dispatch = useDispatch()
    const { restaurantId } = useParams()
    const restaurant = useSelector((state) => state.restaurants[restaurantId])
    
    useEffect(() => {dispatch(getRestaurant(restaurantId))}, [dispatch])

    // useEffect(() =)

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
        <div className='img_c'>
        <a href="#">
                  <img src={`https://steak-book-seeds.s3.amazonaws.com/picture${restaurant.id}.jpeg`} alt="Restaurant" /></a>
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
            </div>
          </div>
      <h1 className='names'>{restaurant.name}</h1>
      <p>Review Stars&Num &nbsp;&nbsp; <i class="fa-thin fa-messages"></i> {restaurant.price_range} {restaurant.neighborhood}</p>
      {/* <p>{restaurant.neighborhood}</p> */}
      </div>
      </div>
      </div>
    </div>
  )
}

export default RestaurantShowPage
