
// let v = Number(prompt("please enter text"));
// let m = Number(prompt("please enter text"));
// let z = Number(prompt("please enter text"));
// document.write(m*v+z)


// let f = 6;
// let a = 6;
// let z=(a*f);
// console.log(z);

// const pieValue = 3.1427;
// let radius = 3;
// let answer = 2 * pieValue * radius / pieValue * radius**2;
// console.log(answer);

// let pieValue = Number(prompt("please enter text"));
// let radius = Number(prompt("please enter text"));
// window.alert(2 * pieValue * radius / pieValue * radius**2);

let cars = ["Toyota", "benz", "camry", "BMW", 1, 2, 3, 4];
//  cars.push("ferrari");
cars.splice(3);
console.log(cars); 
// console.log(cars[2]);
// console.log(cars[3]);

// function miss(b, c, d) {
//     let p = b+c+d;
//     return (p);
    
// }
// console.log(miss(31, 4, 7));
// console.log(miss(31, 10, 5));
// console.log(miss(10, 4, 5));
// console.log(miss(30, 4, 5));
// console.log(miss(31, 4, 5));


// function sayHi() {
//     console.log("Good Morning");
// }
// console.log(sayHi());

// let n = String(prompt("please enter name"));
// let w = String(prompt("please enter name"));
// let p = Number(prompt("please enter text"));
// let r = Number(prompt("please enter text"));
// let t = Number(prompt("please enter text"));
// let result = (`Hi ${n} ${w} ${p*r*t}`);
// document.write(result);


// let b = Number(prompt("please enter a text"));
// let a = Number(prompt("please enter a text"));
// let c = Number(prompt("please enter a text"));
// let firstans = (-b-Math.sqrt(Math.pow(b)-(4*a*c)))
// document.write()



// function Bold(a, b) {
//     let Bold = a * b;
//     return (Bold);
// }

// document.write(Bold(4, 8));

// function sayHi(){
//     console.log("Good Morning");
// }

// console.log(sayHi());


// let n = String(prompt("please enter a name"))
// let w = String(prompt("please enter a name"))
// let p = Number(prompt("please enter a text"))
// let r = Number(prompt("please enter a text"))
// let t = Number(prompt("please enter a text"))
// let result = ( `Hi ${n} ${w} ${p*r*t/100}`);
// console.log(result);





// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log (fruits.toString());

// const nuts = ["Banana", "Orange", "Apple", "Mango"];
// console.log (fruits.join("+"));

// const cot = ["Banana", "Orange", "Apple", "Mango"];
// console.log(cot.pop());


// const well = ["Banana", "Orange", "Apple", "Mango"];
// well.push("kiwi");
// console.log(well);


// const welb = ["Banana", "Orange", "Apple", "Mango"];
// well.shift();
// console.log(well);

// const wely = ["Banana", "Orange", "Apple", "Mango"];
// wely.unshift("coconut");
// console.log(wely);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myTwo = ["Ijeoma", "My Love"];
// const myChildren = myGirls.concat(myBoys, myTwo);
// console.log(myBoys.concat(myGirls, myTwo));


var points = [2,4,1,5,3,7,8,10,9,0,];
points.sort(function(a,b) {return a-b});
console.log(points.sort());



// let like = document.querySelector("p")
let button = document.querySelector(".button")
let list = document.querySelectorAll(".ul")
let div = document.querySelector(".pitems")
    

let addItem = ()=>{
    div.innerHTML += `<p>new item</p>`
}


// let connect = document.querySelectorAll(".connect")
// connect.forEach((listItem)=>{
//     connect.addEventListener("click", (e)=>{
//         console.log(e.target.tagName);
//         // console.log(e.target);
//       n  // listItem.style.textDecoration = "line-through"
//         // listItem.style.backgroundColor = "blue"
//         // e.target.remove()
//     } )
// })


let listItems = document.querySelectorAll(".listItems")
let buttons = document.querySelectorAll(".love")
listItems.forEach((listItem)=>{
    listItem.addEventListener("click", (e)=>{
        // console.log(e.target.tagName);
        // console.log(e.target);
       listItem.style.textDecoration = "line-through"
        listItem.style.backgroundColor = "blue"
        // e.target.remove()
    } )
})

    
    // let addItem = ()=>{
    //         div.innerHTML += `<p>new item</p>`
    // }


//       likes.forEach((like) => {
        
    
// });

<label htmlFor=""></label>