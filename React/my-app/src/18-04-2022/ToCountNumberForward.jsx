import useCount from './customhookss1'
const ToCountNumberForward=()=>{
    const counter=useCount()
    return (
        <>
        {counter}
        </>
    )
}
export default ToCountNumberForward;