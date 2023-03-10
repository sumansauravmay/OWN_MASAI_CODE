function Artist(name, skill, profession){
    this.name=name;
    this.skill=skill;
    this.profession=profession;
}

var artistsObject = {
  name:"Rahul Dravid",
  skill:"Cricket",
  profession:"Cricketer"

}
Artist.prototype.getProfession=function(){
     return this.profession;
}
Artist.prototype.print=function(){
    
     return `I am ${this.name}`;
}
// Do not change this
export {Artist, artistsObject};
