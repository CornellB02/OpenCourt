
import csrfFetch from "./csrf";

const RECEIVE_REVIEW = "reviews/receiveReview"
const RECEIVE_REVIEWS = "reviews/receiveReviews"
const DELETE_REVIEW = "reviews/removeReviews"


const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const deleteReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
});

export const getReviews = () => async dispatch => {
    const res = await csrfFetch(`/api/reviews`)
    if (res.ok) {
    const data = await res.json()
    dispatch(receiveReviews(data))
    return res;
    }
}

export const getReview = (reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`)
    // debugger
    if (res.ok) {
      const data = await res.json();
    //   debugger
      dispatch(receiveReview(data))
    }
};

export const composeReview = (review) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveReview(data.review));
    }
    return response;
}



export const removeReview = (reviewId) => async (dispatch) => {
    await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    });

    dispatch(deleteReview(reviewId)); 
}


const reviewsReducer = (state={}, action) => {
    const newState = { ...state }

    switch(action.type) {
        case RECEIVE_REVIEW:
            // debugger
            newState[action.review.id] = action.review
            return newState
        case RECEIVE_REVIEWS:
            // debugger
            return { ...state, ...action.reviews }
        case DELETE_REVIEW:
            delete newState[action.reviewId];
            return newState;
        default:
            return state
    }
}

export default reviewsReducer
