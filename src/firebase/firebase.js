import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_Auth_Domain,
    databaseURL: process.env.FIREBASE_Database_URL,
    projectId: process.env.FIREBASE_Project_ID,
    storageBucket: process.env.FIREBASE_Storage_Bucket,
    messagingSenderId: process.env.FIREBASE_Messaging_Sender_ID,
    appId: process.env.FIREBASE_App_ID,
    measurementId: process.env.FIREBASE_Measurement_ID
};

// console.log('config', config);
// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

const database = firebase.database();

export { firebase, database as default };

// database.ref().set({
//     name: 'Zaid',
//     age: 29,
//     isSingle: false,
//     location: {
//         city: 'Mumbai',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch(error => {
//     console.log(error);
// });

// // database.ref('age').set(31);
// // database.ref('location/city').set('New Delhi');

// database.ref('attributes').set({
//     height: 73,
//     weight: 150
// }).then(()=> {
//     console.log('attributes saved');
// }).catch(error => {
//     console.log(error);
// });

// database.ref('isSingle').remove()
// .then(() =>{
//     console.log('isSingle was removed');
// })
// .catch(error => {
//     console.log(error);
// });

// database.ref().update({
//     name: 'Mike',
//     age: 27,
//     job: 'Software Engineer' // new property can also be added and can also be used to remove existing property
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const value = snapshot.val();
//         console.log(value);
//     })
//     .catch(error => {
//         console.log(error);
//     });


// database.ref('location')
//     .on('value', (snapshot) => {
//         const value = snapshot.val();
//         console.log(value);
//     });

// const onVvalueChange = database.ref('age')
//     .on('value', (snapshot) => {
//         const value = snapshot.val();
//         console.log('age: ', value);
//     }, error => {
//         console.log('on subscription erro: ', error);
//     });

// setTimeout(() => {
//     database.ref('age').set(33);
// }, 8000)


// setTimeout(() => {
//     database.ref('age').off(onVvalueChange);
// }, 11000)    

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 15000)    

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 12000,
//     createdAt: 1500000
// });

// database.ref('expenses').push({
//     description: 'Phone Bill',
//     note: '',
//     amount: 5000,
//     createdAt: 891500000
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 15000,
//     createdAt: 850500000
// });


// database.ref('expenses')
//     .once('value')
//     .then(snapshot => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });


// database.ref('expenses')
//     .on('value', snapshot => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });