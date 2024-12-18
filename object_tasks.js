// //TASK 1

let book = {
    name:"ATTOMIC HABBITS",
    authour:"JAMSCLEAR",
    relese:1999
}
console.log(book);

book.authour = "sathish";
console.log(book);
book["relese"] = 2024;
console.log(book); 


// TASK 2

let book_2 = {
    name:"ATTOMIC HABBITS",
    authour:"JAMSCLEAR",
    relese:1999,
    book_2_summary(){
        console.log("Book name is:"+this.name+" "+"AUTHOUR NAME IS:"+this.authour);
    }
}
book_2.book_2_summary()


//TASK 3

let {name,relese} = book_2;
console.log(name);
console.log(relese);

// //TASK 4
let book_3 = {
    name:"ATTOMIC HABBITS",
    authour:"JAMSCLEAR",
    relese:1999
}

// let aad_book = {
//     sales:"3laks",
//     rupesa:300
// }

// let update_book_3 = {...book_3,aad_book};
// console.log(update_book_3);
let update_book_3 = {...book_3,sales:"3 laks",rupees:300};
console.log(update_book_3);



//TASK 5

for(keys in update_book_3){
    console.log(keys+":"+update_book_3[keys]);
}