


interface PersonDetails2{
    prefix?:number;
    phones:{id:number,mob:number}[];
    address:string;
    email:string;
    firstname:string;
    lastname:string;
    middlename?:string
}

let person:PersonDetails2={
    phones:[
        {id:1,mob:7654839189},
        {id:2,mob:87654467987}
    ],
    address:"Kodema",
    email:"suman@gmail.com",
    firstname:"suman",
    lastname:"saurav",
    


}
