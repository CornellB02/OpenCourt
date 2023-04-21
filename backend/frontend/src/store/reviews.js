
import csrfFetch from "./csrf";

const RECEIVE_USER_REVIEWS = "reviews/receiveUserReviews"
const RECEIVE_RESTAURANT_REVIEWS = "reviews/receiveRestaurantReviews"
const ADD_NEW_REVIEW ="reviews/addNewReview"
const UPDATE_REVIEW ="reviews/updateReview"
const DELETE_REVIEW = "reviews/removeReviews"


const receiveUserReviews = (reviews) => ({
    type: RECEIVE_USER_REVIEWS,
    reviews
})

const addNewReview = (review) => ({
    type: ADD_NEW_REVIEW,
    review
})

const updateReview = (review) => ({
    type: UPDATE_REVIEW,
    review
})

const receiveRestaurantReviews = (reviews) => ({
    type: RECEIVE_RESTAURANT_REVIEWS,
    reviews
})

const deleteReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
});

export const getRestaurantReviews = (restaurantId) => async dispatch => {
    const res = await csrfFetch(`/api/restaurants/${restaurantId}/reviews`)
    if (res.ok) {
    const data = await res.json()
    dispatch(receiveRestaurantReviews(data))
    return data;
    }
}

export const getUserReviews = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/users/${userId}/reviews`)
    // debugger
    if (res.ok) {
      const data = await res.json();
    //   debugger
      dispatch(receiveUserReviews(data))
    }
};

export const composeReview = (reviewData, restaurantId) => async (dispatch) => {
    const response = await csrfFetch(`/api/restaurants/${restaurantId}/reviews`, {
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addNewReview(data));
        // return data;
    }
    return response;
}



export const removeReview = (reviewId) => async (dispatch) => {
    await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    });

    dispatch(deleteReview(reviewId)); 
}


const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_RESTAURANT_REVIEWS:
        return {
          ...state,
          ...action.reviews.reduce((accumulator, review) => {
            accumulator[review.id] = review;
            return accumulator;
          }, {})
        };
      case RECEIVE_USER_REVIEWS:
        return {
          ...state,
          ...action.reviews.reduce((accumulator, review) => {
            accumulator[review.id] = review;
            return accumulator;
          }, {})
        };
      case ADD_NEW_REVIEW:
        return {
          ...state,
          [action.review.id]: action.review
        };
      case UPDATE_REVIEW:
        return {
          ...state,
          [action.review.id]: action.review
        };
      case DELETE_REVIEW:
        const newState = { ...state };
        delete newState[action.reviewId];
        return newState;
      default:
        return state;
    }
  };
  

export default reviewsReducer
