// const person = {
//     name: 'Max',
//     age: 29,
//     greet() {
//         console.log('Hi, I am ' + this)

//     }
// };

// const hobbies = ['Sports', 'Cooking'];
// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }

// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies);
// hobbies.push('Programming');
// console.log(hobbies);

const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
        console.log(text);
        return fetchData();
    }).then(text2 => {
        console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');
