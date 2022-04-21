import useCount from "./customhookss1";
const ToCountNumberBackward =()=>{
   const count=useCount(false)
   return (
       <>
       {count}
       </>
   )
}
export default ToCountNumberBackward;