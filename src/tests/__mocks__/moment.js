const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    // console.log('zaid moment', moment(0).startOf('month'));
    return moment(timestamp);
}