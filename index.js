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
    title.style.transform = "rotateX(0.8turn)"
    title.style.textShadow = "4px 24px 33px #fff"
    document.querySelector("#base").appendChild(t)
    setTimeout(()=>{
        title.style.opacity = "1"
        title.style.top = "45vh"
        title.style.transform = "rotateX(1turn)"
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
        prepareGame()
        setTimeout(()=>{
            title.style.fontSize = "15px"
            title.style.opacity = "0"
            title.style.textShadow = "0px 0px 0px #000"
            title.style.transform = "rotateX(0.5turn)"
        },2000)
        setTimeout(()=>{t.remove();startGame()},4000)
    },2000)
    
}

function _arrayBufToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

let playerAnims = {}
let players = {}

async function getPlayerAnimations() {
    let metadataRaw = await fetch("img/player/metadata.json")
    let metadata = await metadataRaw.json()
    return metadata
}

async function loadPlayerAnimations() {
    let metadata = await getPlayerAnimations()
    playerAnims["bw_idle"] = []
    playerAnims["bw_walk"] = []
    for (let i = 0; i < metadata["bw_idle"].length; i++) {
        let imgData = await fetch(`img/player/${metadata["bw_idle"].base}${(i+1).toString().padStart(2,"0")}.png`)
        let img = await imgData.arrayBuffer()
        
        playerAnims["bw_idle"][i] = "data:image/png;base64," + _arrayBufToBase64(img)
    }
}

function prepareGame() {
    (async ()=>{
        await loadPlayerAnimations()
    })();
}

function startGame() {
    let r = document.querySelector("#root")
    r.style.backgroundImage = 'url("img/court.png")'
    r.style.backgroundSize = "contain"
    r.style.backgroundPosition = "center"
    let b = document.querySelector("#base")
    b.style.background = "rgba(0,0,0,0)"
    b.style.backdropFilter = "brightness(0.7)"
    

}