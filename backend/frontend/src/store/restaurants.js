// import csrfFetch from "./csrf";

// const RECEIVE_RESTAURANT = "restaurants/receiveRestaurant"
// const RECEIVE_RESTAURANTS = "restaurants/receiveRestaurant"

// const receiveRestaurant = (restaurant) => ({
//     type: RECEIVE_RESTAURANT,
//     restaurant
// })

// const receiveRestaurants = (restaurants) => ({
//     type: RECEIVE_RESTAURANTS,
//     restaurants
// })

// export const getRestaurants = () => async dispatch => {
//     const res = await csrfFetch(`/api/restaurants`)
//     if (res.ok) {
//     const data = await res.json()
//     dispatch(receiveRestaurants(data))
//     return res;
//     }
// }

// export const getRestaurant = (restaurantId) => async dispatch => {
//     const res = await csrfFetch(`/api/restaurants/${restaurantId}`)

//     const data = await res.json()
//     dispatch(receiveRestaurant(data))
//     return data    
// }

// const restaurantsReducer = (state={}, action) => {
//     const newState = { ...state }

//     switch(action.type) {
//         case RECEIVE_RESTAURANT:
//             newState[action.restaurant.id] = action.restaurant
//             return newState
//         case RECEIVE_RESTAURANTS:
//             return { ...state, ...action.restaurants }
//         default:
//             return state
//     }
// }

// export default restaurantsReducer

// import csrfFetch from "./csrf";

// const RECEIVE_RESTAURANT = "restaurants/receiveRestaurant"
// const RECEIVE_RESTAURANTS = "restaurants/receiveRestaurants"

// const receiveRestaurant = (restaurant) => ({
//     type: RECEIVE_RESTAURANT,
//     restaurant
// })

// const receiveRestaurants = (restaurants) => ({
//     type: RECEIVE_RESTAURANTS,
//     restaurants
// })

// export const getRestaurants = () => async dispatch => {
//     const res = await csrfFetch(`/api/restaurants`)
//     if (res.ok) {
//     const data = await res.json()
//     dispatch(receiveRestaurants(data))
//     return res;
//     }
// }

// export const getRestaurant = (restaurantId) => async dispatch => {
//     const res = await csrfFetch(`/api/restaurants/${restaurantId}`)

//     const data = await res.json()
//     dispatch(receiveRestaurant(data))
//     return data    
// }

// const restaurantsReducer = (state={}, action) => {
//     const newState = { ...state }

//     switch(action.type) {
//         case RECEIVE_RESTAURANT:
//             newState[action.restaurant.id] = action.restaurant
//             return newState
//         case RECEIVE_RESTAURANTS:
//             return { ...state, ...action.restaurants }
//         default:
//             return state
//     }
// }

// export default restaurantsReducer 

import csrfFetch from "./csrf";

const RECEIVE_RESTAURANT = "restaurants/receiveRestaurant"
const RECEIVE_RESTAURANTS = "restaurants/receiveRestaurants"

const receiveRestaurant = (restaurant) => ({
    type: RECEIVE_RESTAURANT,
    restaurant
})

const receiveRestaurants = (restaurants) => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

export const getRestaurants = () => async dispatch => {
    const res = await csrfFetch(`/api/restaurants`)
    if (res.ok) {
    const data = await res.json()
    dispatch(receiveRestaurants(data))
    return res;
    }
}

export const getRestaurant = (restaurantId) => async dispatch => {
    const res = await csrfFetch(`/api/restaurants/${restaurantId}`)
    // debugger
    if (res.ok) {
      const data = await res.json();
    //   debugger
      dispatch(receiveRestaurant(data))
    }
};

const restaurantsReducer = (state={}, action) => {
    const newState = { ...state }

    switch(action.type) {
        case RECEIVE_RESTAURANT:
            // debugger
            newState[action.restaurant.id] = action.restaurant
            return newState
        case RECEIVE_RESTAURANTS:
            // debugger
            return { ...state, ...action.restaurants }
        default:
            return state
    }
}

export default restaurantsReducer
