import axios from "axios";

export const types = {
    FETCH_HOUSES_REQUEST: "FETCH_HOUSES_REQUEST",
    FETCH_HOUSES_SUCCESS: "FETCH_HOUSES_SUCCESS",
    FETCH_HOUSES_FAILURE: "FETCH_HOUSES_FAILURE",
    SELECT_HOUSE: "SELECT_HOUSE",
    TOGGLE_IS_DETAIL: "TOGGLE_IS_DETAIL",
    SEARCH_HOUSE: 'SEARCH_HOUSE'
    
}

const DEFAULT_STATE = {
    results: [],
    loading: true,
    error: null,
    isDetail: false,
    selectedHouse: [],
    searchField: ''
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
                results: action.payload,
            }
        case types.FETCH_HOUSES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.SELECT_HOUSE:
            return {
                ...state,
                selectedHouse: action.payload,
                isDetail: true
            }
        case types.TOGGLE_IS_DETAIL:
            return {
                ...state,
                isDetail: true,
            }
        case types.SEARCH_HOUSE:
            return {
                ...state,
                searchField: action.payload
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
    },

    selectHouse(house) {
        return function(dispatch) {
            dispatch({
                type: types.SELECT_HOUSE,
                payload: house
            })
        }
    },

    toggleIsDetail() {
        return function(dispatch) {
            dispatch({
                type: types.TOGGLE_IS_DETAIL
            })
        }
    },

    searchHouse(text) {
        return function(dispatch) {
            dispatch({
                type: types.SEARCH_HOUSE,
                payload: text,
            })
        }
    }
}