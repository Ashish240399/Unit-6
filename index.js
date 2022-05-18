let timerId;
let func=()=>{
    console.log("hi")
}
const debounce=(func,delay)=>{
    if(timerId){
        clearTimeout(timerId)
    }
    timerId=setTimeout(()=>{
        func()
    },delay)
}



function throtller(callback,delay){
    setTimeout(()=>{
        callback()
    },delay)
}
function callback(){
    console.log("Call back")
}



