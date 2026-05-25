// document.getElementById('owl').onclick = function() {
//     alert("Owl Clicked");
// }

// attachEvent()
//jQuery - on

//type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// document.getElementById('images').addEventListener('click', function(e) {
//     console.log("clicked inside the ul");
// }, false)

// document.getElementById('owl').addEventListener('click', function(e) {
//     console.log("owl clicked");
//     e.stopPropagation();
// }, false)

// document.getElementById('google').addEventListener('click', function(e) {
//     e.preventDefault()
//     e.stopPropagation(); 
//     console.log("google clicked");
// }, false) // here "false" is eventPropogation, default value is "false".

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);

    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
    
    // removeIt.parentNode.removeChild(removeIt) 
})



