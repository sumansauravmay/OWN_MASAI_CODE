function student(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=`web${b}`;
}
function storeData(e){
    e.preventDefault();
    let form=document.querySelector("#Students_data");
    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;
// console.log(name,course,unit,image,batch);
let s1=new student(name,course,unit,image,batch);
// console.log(s1)
let data=JSON.parse(localStorage.getItem("studenthello"))||[];
data.push(s1)
localStorage.setItem("studenthello",JSON.stringify(data));

}

function calculate(){
    let data=JSON.parse(localStorage.getItem("studenthello"))||[];
   let obj={};
    for(let i=0;i<data.length;i++)
    {
        if(!obj[data[i].batch])
        {
            obj[data[i].batch]=1;
        }
        
    }
        for(let i=0;i<data.length;i++)
        {
                obj[data[i].batch]++;
    }
    console.log(obj)


    document.querySelector("#navbar").innerText=obj
}
calculate()