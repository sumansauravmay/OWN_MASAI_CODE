function MyArray(){
    this.length=0;
    Object .defineProperty(this,"length",{
      value:0,
      enumerable:false,
      writable:true,
    });
    for(let key in arguments)
    {
      this.keys=arguments[key];
    }
  }
  
  MyArray.prototype.push = function(elem){
      this[this.length]=elem
      this.length++;
      return this.length;
  }
  
  MyArray.prototype.pop = function(value){
    this.length--;
    this[this.length]=value;
    delete this[this.length];
    return this.length;
  }
  
  MyArray.prototype.map = function(cb){
  let new_arr=new MyArray();
  for(let key in this){
    if(this.hasOwnProperty(key))
    {
      new_arr.push(cb(this[key],key,this))
    }
  }
  return new_arr;
  
    
  }
  
  MyArray.prototype.filter = function(fill){
    const new_filter=[];
    for(let i=0;i<this.length;i++)
    {
      if(fill(this[i]))
      {
        new_filter.push(this[i]);
      }
    }
    return new_filter;
  }
  
  MyArray.prototype.reduce = function(cp,value){
    let reduce=value;
    for(let index=reduce ? 0:1;index<this.length;index++)
    {
      if(this.hasOwnProperty(index))
      {
        reduce=cp(reduce?reduce:this[0],this[index],index,this)
      }
    }
    return reduce;
  }
  
  export default MyArray;