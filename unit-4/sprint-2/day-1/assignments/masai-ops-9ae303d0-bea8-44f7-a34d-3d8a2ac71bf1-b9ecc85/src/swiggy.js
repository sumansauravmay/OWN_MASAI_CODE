function UserInfo(name,location) {
    this.name=name;
this.location=location;
}

function serveFood(food) {

return  `Serving ${food} to ${this.name} in ${this.location}`
}
function serveIn(name,location,food) {
    const suman=new UserInfo(name,location);
return serveFood.call(suman,food)
}
function billNote(total) {
    return `${this.name}'s bill is INR ${total}`
}
function generateInVoice(name,location,quantity,price) {
    const saurav=new UserInfo(name,location)
 return billNote.apply(saurav,[quantity*price])
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
