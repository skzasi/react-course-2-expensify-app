import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {

    const momentDate = moment();
    const action = setStartDate(momentDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: momentDate
    });
});

test('should generate set text filter action object with provided value', () => {
    const action = setTextFilter('Bill');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Bill'
    });
});


test('should generate set text filter action object with default value', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});


test('should generate set sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
       type: 'SORT_BY_Date'
    });
});

test('should generate set sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

