let ball = document.querySelector('.ball')
let body = document.body
let levievr = document.querySelector(".levie-vorota")
let pravievr = document.querySelector(".pravie-vorota")
let pr_verx = document.querySelector(".pr-vr")
let pr_vniz = document.querySelector(".pr-vn")
let lv_verx = document.querySelector(".lv-vr")
let lv_vniz = document.querySelector(".lv-vn")

ball.ondragstart = () => {
    setTimeout(() => {
        ball.style.display = "none"
    }, 0);
}
ball.ondragend = () => {
    ball.style.display = "block"
    console.log('end');
}


body.ondragover = (e) => {
    e.preventDefault();
    console.log('over me');
}
body.ondragenter = (e) => {
    e.preventDefault();
    console.log('entered');
}
// body.ondragleave = () => {
//     alert('out')
// }
body.ondrop = (event) => {
    let {x, y} = event

    ball.style.left = x + "px"   
    ball.style.top = y + "px"   
}

levievr.ondrop = () => {
    alert("goooooooooooooooooooooooooooooool")
}
pravievr.ondrop = () => {
    alert("goooooooooooooooooooooooooooooool")
}
pr_verx.ondrop = () => {
    alert("pr-verx")
}
pr_vniz.ondrop = () => {
    alert("pr-vniz")
}
lv_vniz.ondrop = () => {
    alert("lv-vniz")
}
lv_verx.ondrop = () => {
    alert("lv-verx")
}