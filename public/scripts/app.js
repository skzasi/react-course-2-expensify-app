'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndecisionApp = require('./components/IndecisionApp');

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IndecisionApp.defaultProps = {
//     options: []
// };

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }


// class Action extends React.Component{

//     // handlePick() {
//     //     alert('option picked');
//     // }

//     render() {
//         return (
//             <div>
//                 <button disabled={!this.props.hasOptions} onClick={this.props.onHandlePickOption}>What should I do?</button>
//             </div>
//         );
//     }
// }

// class Options extends React.Component{

//     // constructor(props) {
//     //     super(props);
//     //     this.removeAll = this.removeAll.bind(this);
//     // }

//     // removeAll() {
//     //     // this.props.options = [];
//     // }

//     render() {
//         return (
//             <div>
//             <button onClick={this.props.onRemoveAllOptions}>Remove All</button>
//                 {
//                     this.props.options.map(option => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         );
//     }
// }


// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }


// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options></Options>
//         <AddOption />
//     </div>
// );


_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, null), document.getElementById('app'));
