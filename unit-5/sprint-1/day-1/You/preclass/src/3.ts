const arr1 : number[] =[1,2,3];
arr1.push(5)//OK
// arr1.push("hello")//ERROR


const arr3 : string[] =["a","b","c","d"];

// arr3.push(5) //ERROR

arr3.push("hello")//OK


const arr2 : Array<number | string> =[1,2,3];

arr2.push(5)

arr2.push("hello")



const arr4 : readonly string[] =["A","B","C"];

// arr4.push(5)//ERROR

// arr4.push("hello")//ERROR