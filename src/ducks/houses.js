import axios from "axios";

export const types = {
    FETCH_HOUSES_REQUEST: "FETCH_HOUSES_REQUEST",
    FETCH_HOUSES_SUCCESS: "FETCH_HOUSES_SUCCESS",
    FETCH_HOUSES_FAILURE: "FETCH_HOUSES_FAILURE",
}

const DEFAULT_STATE = {
    results: [],
    loading: false,
    error: null,
}

export function reducer(state = DEFAULT_STATE, action = {}) {
    switch(action.type) {
        case types.FETCH_HOUSES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.FETCH_HOUSES_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    fetchHouses(){
        return function(dispatch) {
            dispatch({
                type: types.FETCH_HOUSES_REQUEST,
            })

            return axios.get('/data.json')
            .then((response) => {
                console.log('houses-axios:', response.data.results)
                dispatch({
                    type: types.FETCH_HOUSES_SUCCESS,
                    payload: response.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: types.FETCH_HOUSES_FAILURE,
                    payload: err.message,
                })
            })
        }
    }

}