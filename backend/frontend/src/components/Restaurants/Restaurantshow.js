import React, {useState} from 'react'
import { Link, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getRestaurant } from '../../store/restaurants'
import { useParams } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMessages } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMessage, faMoneyBill, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Reviews from '../Reviews/restaurantsReviews'
import ReviewsBox from '../Reviews/reviewbox'
import PhotosCarousel from './pictures'
import ReservationForm from '../Reservations/reservationform'
import "./restaurants.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
// import { faCircleParking } from '@fortawesome/free-solid-svg-icons';
// import 'font-awesome/css/font-awesome.css';


const RestaurantShowPage = () => {
  // debugger
    const dispatch = useDispatch()
    const { restaurantId } = useParams()
    const restaurant = useSelector((state) => state.restaurants[restaurantId])
    const [showFullDescription, setShowFullDescription] = useState(false);
    const isLoggedIn = useSelector((state) => state.session.user);


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

  
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    const linesToShow = showFullDescription ? '100%' : '3'; // Number of lines to show

    return (
      <div
        className={`desctext ${showFullDescription ? 'expanded' : ''}`}
        style={{ '--linesToShow': linesToShow }}
      >
        <p>{restaurant.description}</p>
        {restaurant.description.length > 3 }
      </div>
    );
  };


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
          <div className='reservation_st'>
                <ReservationForm  restaurant={restaurant}/>
                </div>
                <div className='additional_info'>
                  <h2 className="add-h2">Additional Info</h2>
                  <ol className='add-ol'>
                    <span className='add-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0042221,7.00000436 C11.046625,6.34790658 11.405963,5.75411959 11.9710085,5.41509227 L14.9710085,3.61509227 C15.6043733,3.23507341 16.3956267,3.23507341 17.0289915,3.61509227 L20.0289915,5.41509227 C20.6314023,5.77653877 21,6.42755242 21,7.13007812 L21,17.9976974 C21,19.1022669 20.1045695,19.9976974 19,19.9976974 L11.0968245,19.9976974 C11.0647419,19.9992266 11.0324613,20 11,20 L5,20 C3.8954305,20 3,19.1045695 3,18 L3,9 C3,7.8954305 3.8954305,7 5,7 L11,7 C11.0014077,7 11.0028151,7.00000145 11.0042221,7.00000436 Z M11,9 L5,9 L5,18 L11,18 L11,9 Z M13,7 L13,18.0000782 L19,18.0000782 L19,7 L16,5.07741671 L13,7 Z M7.5,11 L8.5,11 C8.77614237,11 9,11.2238576 9,11.5 L9,12.5 C9,12.7761424 8.77614237,13 8.5,13 L7.5,13 C7.22385763,13 7,12.7761424 7,12.5 L7,11.5 C7,11.2238576 7.22385763,11 7.5,11 Z M7.5,14 L8.5,14 C8.77614237,14 9,14.2238576 9,14.5 L9,15.5 C9,15.7761424 8.77614237,16 8.5,16 L7.5,16 C7.22385763,16 7,15.7761424 7,15.5 L7,14.5 C7,14.2238576 7.22385763,14 7.5,14 Z M15.5,11 L16.5,11 C16.7761424,11 17,11.2238576 17,11.5 L17,12.5 C17,12.7761424 16.7761424,13 16.5,13 L15.5,13 C15.2238576,13 15,12.7761424 15,12.5 L15,11.5 C15,11.2238576 15.2238576,11 15.5,11 Z M15.5,14 L16.5,14 C16.7761424,14 17,14.2238576 17,14.5 L17,15.5 C17,15.7761424 16.7761424,16 16.5,16 L15.5,16 C15.2238576,16 15,15.7761424 15,15.5 L15,14.5 C15,14.2238576 15.2238576,14 15.5,14 Z M15.5,8 L16.5,8 C16.7761424,8 17,8.22385763 17,8.5 L17,9.5 C17,9.77614237 16.7761424,10 16.5,10 L15.5,10 C15.2238576,10 15,9.77614237 15,9.5 L15,8.5 C15,8.22385763 15.2238576,8 15.5,8 Z"></path>
                    </svg>
                  </span>
                  <li className='additional-list'>
                  {/* <i className="fa fa-thin fa-buildings"></i> */}
                    Neighborhood
                  <p className='add-p'>{restaurant.neighborhood}</p>
                  </li>
                  <span className='add-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.1923881,7.19238816 C13.8147448,7.19238816 16.4332749,7.88002892 19.0481719,9.24949945 C20.3663707,9.93987064 21.1923881,11.3049175 21.1923881,12.7929562 L21.1923881,15.1923882 C21.1923881,16.2969577 20.2969576,17.1923882 19.1923881,17.1923882 L15.8386797,17.1923882 C14.9458358,17.1923934 14.1611367,16.600599 13.9157119,15.74215 C13.5311739,14.3971097 13.051748,13.8597684 12.4435462,13.8590555 L12.2445137,13.8590532 C11.9797378,13.8590516 11.9797378,13.8590516 11.1923912,13.8590525 L10.5908984,13.8590535 L9.94238815,13.8590549 C9.36404307,13.8590549 8.89692488,14.3907007 8.48907223,15.7623886 C8.23683842,16.610715 7.45704835,17.1923882 6.57201858,17.1923882 L3.19238815,17.1923882 C2.08781864,17.1923882 1.19238815,16.2969577 1.19238815,15.1923882 L1.19238815,12.7929431 C1.19239394,11.3049036 2.0184157,9.93985867 3.33661714,9.24949272 C5.95150798,7.88002719 8.5700348,7.19238816 11.1923881,7.19238816 Z M3.19238815,12.7929469 L3.19238815,15.1923882 L6.57201858,15.1923839 C7.20290417,13.0705928 8.26739372,11.8590549 9.94238599,11.8590549 L10.5908946,11.8590535 L11.1923885,11.8590525 C11.9797362,11.8590516 11.9797362,11.8590516 12.2445326,11.8590532 L12.4447301,11.8590562 C14.1421938,11.8610438 15.2370999,13.0882166 15.8386738,15.1923882 L19.1923881,15.1923882 L19.1923881,12.7929562 C19.1923881,12.0489367 18.7793784,11.3664115 18.1202811,11.021227 C15.7828612,9.79707646 13.4802133,9.19238816 11.1923881,9.19238816 C8.90456585,9.19238816 6.60192098,9.79707492 4.26450398,11.0212224 C3.60540308,11.3664055 3.19239104,12.0489299 3.19238815,12.7929469 Z"></path>
                    </svg>
                  </span>
                  <li className='additional-list'>
                    Phone Number
                  <p className='add-p'>{restaurant.phoneNumber}</p>
                  </li>
                  <span className='add-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <path d="M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z M9.5,7.97771 C9.5,7.85871 9.596,7.74971 9.728,7.74971 L12.546,7.74971 C14.021,7.74971 15.233,8.94871 15.233,10.40071 C15.233,11.88771 14.021,13.09971 12.558,13.09971 L11.059,13.09971 L11.059,15.91771 C11.059,16.03671 10.951,16.14571 10.831,16.14571 L9.728,16.14571 C9.596,16.14571 9.5,16.03671 9.5,15.91771 L9.5,7.97771 Z M12.498,11.63571 C13.17,11.63571 13.685,11.09671 13.685,10.38871 C13.685,9.72971 13.17,9.22571 12.498,9.22571 L11.059,9.22571 L11.059,11.63571 L12.498,11.63571 Z"></path>
                    </svg>
                  </span>
                  <li className='additional-list'>
                    Parking Details
                  <p className='add-p'>{restaurant.parkingDetails}</p>
                  </li>
                  <span className='add-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.58,11.53 C17.4266401,11.1416536 17.3986659,10.7150477 17.5,10.31 L18.68,5.66 C18.9359464,4.6576009 18.3851789,3.62545408 17.41,3.28 L14,2.09 L13.68,3.09 C13.47,3.72 12.89,4.04 11.95,4.04 C11.01,4.04 10.45,3.72 10.24,3.1 L9.92,2.1 L6.59,3.28 C5.61955417,3.62512239 5.06991046,4.65083545 5.32,5.65 L6.49,10.3 C6.59133406,10.7050477 6.5633599,11.1316536 6.41,11.52 L3.08,20 L4.01,20.36 C6.55296711,21.3932302 9.265496,21.9459079 12.01,21.99 C14.7522514,21.9642714 17.4642871,21.4143968 20,20.37 L20.92,20 L17.58,11.53 Z M8.85,4.6 C9.60629927,5.55574661 10.7837814,6.07907199 12,6 C13.2152867,6.07388266 14.3904734,5.55157745 15.15,4.6 L16.74,5.16 L15.56,9.81 C15.56,9.87 15.56,9.93 15.56,10 L8.46,10 C8.46,9.94 8.46,9.88 8.46,9.81 L7.25,5.16 L8.85,4.6 Z M12.05,20 C9.87756989,19.9727298 7.72482585,19.5840868 5.68,18.85 L8.27,12.26 C8.27,12.17 8.32,12.09 8.35,12 L15.63,12 C15.63,12.09 15.63,12.17 15.71,12.26 L18.31,18.86 C16.3022506,19.5891869 14.1859133,19.9745901 12.05,20 Z"></path>
                    </svg>
                  </span>
                  <li className='additional-list'>
                    Dress Code
                  <p className='add-p'>{restaurant.dressCode}</p>
                  </li>
                  <span className='add-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 14c2.26 0 4-1.894 4-4.23 0-2.337-1.832-4.232-4.09-4.232-.428 0-.84.068-1.228.194M7.09 7.848C7.09 5.171 9.106 3 11.59 3s4.5 2.17 4.5 4.848c0 1.436-.58 2.726-1.5 3.613m-7.5-5.923C4.83 5.538 3 7.433 3 9.77 3 12.106 4.832 14 7.09 14c.922 0 1.772-.315 2.456-.846M7 14v7h10v-7M11 17h6"></path>
                    </svg>
                  </span>
                  <li className='additional-list'>
                    Executive Chef
                  <p className='add-p'>{restaurant.executiveChef}</p>
                  </li>
                  <span className='add-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg">
                      <path d="M11,20 L11,18 L5,18 C4.44771525,18 4,17.5522847 4,17 L4,16.5 C4,16.2238576 4.22385763,16 4.5,16 L19.5,16 C19.7761424,16 20,16.2238576 20,16.5 L20,17 C20,17.5522847 19.5522847,18 19,18 L13,18 L13,20 L14.5,20 C14.7761424,20 15,20.2238576 15,20.5 L15,21.5 C15,21.7761424 14.7761424,22 14.5,22 L9.5,22 C9.22385763,22 9,21.7761424 9,21.5 L9,20.5 C9,20.2238576 9.22385763,20 9.5,20 L11,20 Z M9.00417359,5.4035781 C9.00139886,5.34650803 9,5.28913741 9,5.23151007 C9,3.44679634 10.3431457,2 12,2 C13.6568543,2 15,3.44679634 15,5.23151007 C15,5.28914395 14.9986008,5.34652105 14.9958255,5.40359753 C18.4009049,6.45156941 20.0249274,9.56291275 19.9997109,15 L4.00029014,14.9999824 C3.97502821,9.56287514 5.5990558,6.45153039 9.00417359,5.4035781 Z M11.0648956,5.03309447 C11.3666212,5.01099572 11.6782939,5 11.9999677,5 C12.3216638,5 12.6333575,5.01099726 12.9351029,5.0330991 C12.9775121,4.90683455 13,4.77109821 13,4.63102852 C13,4.00637872 12.5522848,3.5 12,3.5 C11.4477152,3.5 11,4.00637872 11,4.63102852 C11,4.7710965 11.0224873,4.90683124 11.0648956,5.03309447 Z M17.9997832,13 C18.0235785,8.89548434 16.0892795,7 11.9999758,7 C7.91067197,7 5.97637963,8.89548371 6.00021761,12.9999894 L17.9997832,13 Z"></path>
                    </svg>
                  </span>
                  <li className='additional-list'>
                    Delivery
                  <p className='add-p'>{restaurant.delivery}</p>
                  </li>
                  <span className='add-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg">
                      <path d="M13,11 L14.5,11 C14.7761424,11 15,11.2238576 15,11.5 L15,12.5 C15,12.7761424 14.7761424,13 14.5,13 L12.5,13 L11.5,13 C11.2238576,13 11,12.7761424 11,12.5 L11,7.5 C11,7.22385763 11.2238576,7 11.5,7 L12.5,7 C12.7761424,7 13,7.22385763 13,7.5 L13,11 Z M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z"></path>
                    </svg>
                  </span>
                  <li className='additional-list'>
                  Hours of operation
                  <p className='add-p'>Sun-Mon {restaurant.opentime} - {restaurant.closetime}</p>
                  </li>
                  <li className='additional-list'>
                  </li>
                  </ol>
                </div>
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
              <button href='#photos' class="o-button">Photos</button>
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
                  <li className='tagli'><p>Neighborhood Gem</p></li>
                  <li className='tagli'><p>Lively</p></li>
                  <li className='tagli'><p>Good For Special Occasions</p></li>
                </ul>
              </span>
              </div> 
      </div>
      </section>
      <div class="descrip" id="descrip">
      <div className="descrip">
      <div class="desctext">
      {renderDescription()}</div>
      <div className="description-toggle" onClick={toggleDescription}>
        {showFullDescription ? 'Read less' : 'Read more'}
      </div>
        {/* <p>{restaurant.description}</p> */}
          {/* <a href="#descrip" class="read-more">... Read more</a>
          <a href="#descri" class="read-less">Read less</a> */}
      </div>
      </div>
                <div className='underDes'>
                <PhotosCarousel restaurant={restaurant} id="photos"/>
                <div className="reviewSec">
                {isLoggedIn && (
                  <Link to={`/restaurant/${restaurant.id}/review`} className="write-review-button">
                    Write a review
                  </Link>
                )}
        </div>
                <Reviews restaurant={restaurant}/>
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
