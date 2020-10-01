import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
        // console.log('updated', expense);
    }

    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render() {
        // console.log('EditExpense', this.props)

        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )};
}

// const EditExpensePage = (props) => {
//     console.log('props', props);
//     return (
//         <div>
//             <ExpenseForm 
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     props.dispatch(editExpense(props.expense.id, expense));
//                     props.history.push('/');
//                     console.log('updated', expense);
//                 }}
//             />
//             <button onClick={()=>{
//                 props.dispatch(removeExpense({id: props.expense.id}));
//                 props.history.push('/');
//             }}>Remove</button>
//         </div>
//     );
// };

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => {
        // console.log('dispatchremoveExpense', id);
        dispatch(removeExpense({ id: id }))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);