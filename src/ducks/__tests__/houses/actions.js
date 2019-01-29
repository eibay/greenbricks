import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { actions, types } from '../../houses'

describe('fetchHouses()', () => {
    it('should dispatch the REQUEST action when it is dispatched', () => {
        const spy = jest.fn();
        const thunk = actions.fetchHouses();
        thunk(spy);

        expect(spy.mock.calls[0][0]).toEqual({
            type: types.FETCH_HOUSES_REQUEST,
        });
    });

    it('should dispatch SUCCESS action when data is fetched successfully', () => {
        const fakeData = { results: [1, 2, 3] }
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/data.json').reply(200, fakeData);

        const spy = jest.fn();
        const thunk = actions.fetchHouses();
        thunk(spy).then(function() {
            expect((spy.mock.calls[1][0])).toEqual({
                type: types.FETCH_HOUSES_SUCCESS,
                payload: fakeData.results,
            });
        })
    });
    
    it('should dispatch FAILURE action when data is not available', () => {
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/data.json').reply(404);

        const spy = jest.fn();
        const thunk = actions.fetchHouses();
        thunk(spy).then(function() {
            expect((spy.mock.calls[1][0])).toEqual({
                type: types.FETCH_HOUSES_FAILURE,
                payload
            });
        });
    });
});