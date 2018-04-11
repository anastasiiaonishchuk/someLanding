const navChoice = document.querySelector("#some");
const navChoice1 = document.querySelector("#some1");
const body = document.querySelector("body");

window.addEventListener("scroll", function(event){
    console.log(event);
    if(window.pageYOffset > 80){
        document.querySelector("#justNav").className = "nav-menu fixed-top";
    }
    else{
        document.querySelector("#justNav").className = "justNav fixed-top";
    }
})
let someCount;
let anotherCount;
function goTo(){
    window.scrollTo(0, window.pageYOffset + someCount);
    if(!(window.pageYOffset > anotherCount)){
        setTimeout(goTo, 30);
    }  
    body.addEventListener("click", function(event){
        if(event.isTrusted){
            break;
        }
    })
}
navChoice.addEventListener("click", function(event){
    event.preventDefault();
    someCount = 20;
    anotherCount = 736;
    goTo();
    if (event.isTrusted){
    document.querySelector("#some").className = "nav-link active";
    document.querySelector("#some1").className = "nav-link";
    
    }
})
navChoice1.addEventListener("click", function(event){
    event.preventDefault();
    someCount = -20;
    anotherCount = 10000;
    goTo();
    if (event.isTrusted){
    document.querySelector("#some1").className = "nav-link active";
    document.querySelector("#some").className = "nav-link";
    }
})
const m = document.querySelector("#m");
m.addEventListener("click", function(event){
    document.querySelector("#communication").className = "tab-pane fade";
    document.querySelector("#messages").className = "tab-pane fade show active";
    document.querySelector("#schedule").className = "tab-pane fade";
    document.querySelector("#livechat").className = "tab-pane fade";
    document.querySelector("#m").className = "nav-link active";
    document.querySelector("#s").className = "nav-link";
    document.querySelector("#c").className = "nav-link";
    document.querySelector("#l").className = "nav-link";

})
const s = document.querySelector("#s");
s.addEventListener("click", function(event){
    document.querySelector("#communication").className = "tab-pane fade";
    document.querySelector("#messages").className = "tab-pane fade";
    document.querySelector("#schedule").className = "tab-pane fade show active";
    document.querySelector("#livechat").className = "tab-pane fade";
    document.querySelector("#s").className = "nav-link active";
    document.querySelector("#m").className = "nav-link";
    document.querySelector("#c").className = "nav-link";
    document.querySelector("#l").className = "nav-link";

})
const c = document.querySelector("#c");
c.addEventListener("click", function(event){
    document.querySelector("#communication").className = "tab-pane fade show active";
    document.querySelector("#messages").className = "tab-pane fade";
    document.querySelector("#schedule").className = "tab-pane fade";
    document.querySelector("#livechat").className = "tab-pane fade";
    document.querySelector("#c").className = "nav-link active";
    document.querySelector("#s").className = "nav-link";
    document.querySelector("#m").className = "nav-link";
    document.querySelector("#l").className = "nav-link";

})
const l = document.querySelector("#l");
l.addEventListener("click", function(event){
    document.querySelector("#communication").className = "tab-pane fade";
    document.querySelector("#messages").className = "tab-pane fade";
    document.querySelector("#schedule").className = "tab-pane fade";
    document.querySelector("#livechat").className = "tab-pane fade show active";
    document.querySelector("#l").className = "nav-link active";
    document.querySelector("#s").className = "nav-link";
    document.querySelector("#c").className = "nav-link";
    document.querySelector("#m").className = "nav-link";

})
