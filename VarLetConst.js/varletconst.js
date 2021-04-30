if(true) {
    var x = 10;
}

console.log(x);

if(true) {
    let y = 15;
    y = 25;
    console.log(`${y} is let variable`)
}

if(true) {
    const z = 30;
    console.log(z);
}

if(true) {
    const mySelf = {
        name: 'Maruf Ahmed',
        age: 26,
    }
    mySelf.age = 22;
    console.log(mySelf);
}

var m = 5;

function demo() {
    console.log(m)
}
demo();

console.log(m);
