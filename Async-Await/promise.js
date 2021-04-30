// const doSex = true;

// const sex = new Promise((resolve, reject) => {
//     if (!doSex) {
//         const sexDetails = {
//             sexPosition: 'Doggyyyyyyyyy',
//             location: 'Our Bed',
//             time: '5:00 AM',
//         };
//         resolve(sexDetails);
//     } else {
//         reject(new Error(`No need to sex!`));
//     }
// });

// sex 
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err.message);
//     })


// const hasMeeting = false;

// const metting = new Promise((resolve, reject) => {
//     if (!hasMeeting) {
//         const mettingDetails = {
//             name: 'Technical Meeting',
//             location: 'DIU',
//             time: '5:00 AM',
//         };
//         resolve(mettingDetails);
//     } else {
//         reject(new Error(`meeting already scheduled`));
//     }
// });

// const addToCalendar = (mettingDetails) => {
//     const calendar = `${mettingDetails.name} has been scheduled on ${mettingDetails.location} at ${mettingDetails.time}`;
//     return Promise.resolve(calendar);
// };

// metting 
//     .then(addToCalendar)
//     .then((res) => {
//         console.log(JSON.stringify(res));
//     })
//     .catch((err)=>{
//         console.log(err.message);
//     })

// Multiple Promise with one log

const promise1 = Promise.resolve(`Promise 1 resolve`);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(`Promise 2 resolved`);
    }, 2000);
});

// promise1.then(res => {
//     console.log(res);
// })
// promise2.then(res => {
//     console.log(res);
// })

Promise.all([promise1, promise2]).then(res=> {
    console.log(res);
});

Promise.race([promise1, promise2]).then(res=> {
    console.log(res);
});