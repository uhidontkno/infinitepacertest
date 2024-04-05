function onlaunch() {
document.querySelector("#wait_beforeplay").remove()
document.querySelector("#beforeplay button#play").addEventListener("click",()=>{
    document.querySelector("#beforeplay").remove()
})
}
setTimeout(()=>{
    onlaunch()
},250)