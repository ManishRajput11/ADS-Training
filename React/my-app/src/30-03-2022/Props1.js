import Props2 from "./Props2";

function Props1() {
    var fname="manish"
    var lname="rajput"
  return (
    <div>
        <h1>{fname}</h1>
        <Props2 firstn={lname}/>
    </div>
  )
}

export default Props1;