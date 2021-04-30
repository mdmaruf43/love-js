// const processOrder = (customer) => {
//     console.log(`procesing order for customer`);

//     var currentTime = new Date().getTime();
//     while (currentTime + 3000 >= new Date().getTime());

//     console.log(`order processed for customer 1`);
// };

// console.log(`take order for customer 1`);
// processOrder();
// console.log(`complete order for customer 1`);

const processOrder = (customer) => {
    console.log(`procesing order for customer`);

    setTimeout(() => {
        console.log(`Cooking Completed`);
    }, 3000);

    console.log(`order processed for customer 1`);
};

console.log(`take order for customer 1`);
processOrder();
console.log(`complete order for customer 1`);

// CallBack Example 


const takeOrder = (customer, callback) => {
    console.log(`take order for ${customer}`);
    callback(customer);
};

const procedssOrder = (customer, callback) => {
    console.log(`procesing order for ${customer}`);

    setTimeout(() => {
        console.log(`cooking completed`);
        console.log(`order processed for ${customer}`);
        callback(customer);
    }, 3000)
};

const completeOrder = (customer) => {
    console.log(`complete order for ${customer}`);
};

takeOrder('Maruf', (customer) => {
    procedssOrder(customer, (customer) => {
        completeOrder(customer)
    })
});
