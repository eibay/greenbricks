import { types, reducer } from '../../houses';

describe('Fetching houses', () => {
    describe('Request start', () => {
        it('should set loading property to TRUE when fetching starts', () => {
            const result = reducer(undefined, {
                type: types.FETCH_HOUSES_REQUEST
            });
            expect(result.loading).toEqual(true);
        });
    });

    describe('Successfull fetch', () => {
        it('should set loading property to false', () => {
            const result = reducer(
                { loading: true }, 
                { type: types.FETCH_HOUSES_SUCCESS },
            )
            expect(result.loading).toEqual(false);
        });
    });
});