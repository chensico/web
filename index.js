
/*
'use strict';

let profiles = document.getElementsByClassName('carousel-item');


for (let profile of profiles) {
    
    let bio = profile.getElementsByClassName('row')[0];
    console.log(profile);
   
    console.log("1");


    let portrait = profile.getElementsByClassName('btn')[0];
    console.log(portrait);
    profile.onmouseover = () => {
        portrait.classList.remove('backdrop');
        bio.style.display = 'none';
    }
    profile.onmouseout = () => {
       
        portrait.classList.add('backdrop');
        bio.style.display = 'block';
    }
}
*/

'use strict';


let profiles = document.getElementsByClassName('profile');
console.log(document.getElementsByClassName('bio'));

// We need to use 'of' instead of 'in' here to iterate through the _values_ instead of the _keys_ of the selection
for (let profile of profiles) {
    console.log(profile);
    let bio = profile.getElementsByClassName('bio')[0];
    console.log(profile.getElementsByClassName('bio'));
    console.log("1");


    let portrait = profile.getElementsByClassName('portrait')[0];

    profile.onmouseover = () => {
        portrait.classList.add('backdrop');
        bio.style.display = 'block';
    }
    profile.onmouseout = () => {
        portrait.classList.remove('backdrop');
        bio.style.display = 'none';
    }
}





$("h1").on ("click",function() {
$("h1").css("color","rgb(158, 158, 162)")
$("h1").slideUp().slideDown().animate({opacity:0.8});


})
$("img").on ("click",function() {
   
    $("img").slideUp().slideDown().animate({opacity:0.8});
    
    
    })

    $("button").on ("click",function() {
   
        $("button").slideUp().slideDown().animate({opacity:0.8});
        
        
        })