// async function helloFridn() {
//     return `hello`;
// }
// console.log(helloFridn());

const hasMeeting = true;
const metting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const mettingDetails = {
            name: 'Technical Meeting',
            location: 'DIU',
            time: '5:00 AM',
        };
        resolve(mettingDetails);
    } else {
        reject(new Error(`meeting already scheduled`));
    }
});
const addToCalendar = (mettingDetails) => {
    const calendar = `${mettingDetails.name} has been scheduled on ${mettingDetails.location} at ${mettingDetails.time}`;
    return Promise.resolve(calendar);
};
// metting 
//     .then(addToCalendar)
//     .then((res) => {
//         console.log(JSON.stringify(res));
//     })
//     .catch((err)=>{
//         console.log(err.message);
//     })

async function myMeeting() {
    try {
        const meetingDetails = await metting;
        const calender = await addToCalendar(meetingDetails);
        console.log(calender);
    }
    catch {
        console.log(`Something wrong Happend`);
    }
}

myMeeting();