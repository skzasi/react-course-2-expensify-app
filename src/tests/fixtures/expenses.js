import moment from 'moment';

const expenses = [{ 
    id: '1',
    description: 'Water Bill', 
    amount: 500,
    createdAt:  0
}, { 
    id: '2',
    description: 'Gum', 
    amount: 1200,
    createdAt:  moment(0).subtract(4, 'days').valueOf()
}, { 
    id: '3',
    description: 'Rent', 
    amount: 45000,
    createdAt:  moment(0).add(4, 'days').valueOf()
}];

export default expenses;