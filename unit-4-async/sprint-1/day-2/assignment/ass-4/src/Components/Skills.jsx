import React from "react";

function Skills(props){
  const {skill1,skill2,skill3}=props
  return (
    <>
    <ol>
<li>{skill1}</li>
<li>{skill2}</li>
<li>{skill3}</li>
</ol>
    </>
  )
}
export default Skills