console.log(1);

function fn1 () {

    console.log(2);

}

function fn2 () {

    console.log(3);

    fn1();

}

setTimeout (function () {

    console.log(4);

}, 2000);

fn2();

console.log(5);

