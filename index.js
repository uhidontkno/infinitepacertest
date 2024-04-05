function onlaunch() {
document.querySelector("#wait_beforeplay").remove()
document.querySelector("#beforeplay button#play").addEventListener("click",()=>{
    document.querySelector("#beforeplay").remove();
    startTitleAnim()
})
}
setTimeout(()=>{
    onlaunch();
},250)

function startTitleAnim() {
    let t = document.createElement("div")
    
    t.style.display = "flex"
    t.style.flexDirection = "row"
    t.style.justifyContent = "center"
    t.style.alignItems = "middle"
    t.style.alignContent = "middle"
    t.style.width = "100%"
    t.style.height = "100%"
    t.innerHTML = `
    <h1 style="font-weight:bold; font-size:36px;"><span>rare™</span></h1>
    `
    let title = t.querySelector("h1")
    title.style.opacity = "0"
    title.style.top = "0px"
    title.style.transition = "all 0.5s, transform 2s"
    title.style.position = "relative"
    title.style.textShadow = "4px 24px 33px #fff"
    document.querySelector("#base").appendChild(t)
    setTimeout(()=>{
        title.style.opacity = "1"
        title.style.top = "45vh"
        title.style.textShadow = "4px 4px 64px #fff"
    },300)
    setTimeout(() => {
        title.innerHTML += " | "
        setTimeout(() => {
            title.innerHTML += "inf"
        },400)
        setTimeout(() => {
            title.innerHTML += "ini"
        },433)
        setTimeout(() => {
            title.innerHTML += "te"
        },466)
        setTimeout(() => {
            title.innerHTML += "pac"
        },500)
        setTimeout(() => {
            title.innerHTML += "er"
        },520)
        setTimeout(() => {
            title.innerHTML += "test"
        },600)
        setTimeout(()=>{
            title.style.fontSize = "15px"
            title.style.opacity = "0"
            title.style.textShadow = "0px 0px 0px #000"
            title.style.transform = "rotateX(0.5turn)"
        },1000)
        setTimeout(()=>{title.remove()},3000)
    },1000)
}