let vidImg=document.querySelector('.homepage-vid');
let btnVid=document.querySelector('.vid-btn');
let ytVid=document.querySelector('.ytvid');

vidImg.addEventListener('click', function(){
    // console.log('clicked');
    if(ytVid.classList.contains('hidden')){
        ytVid.classList.remove('hidden');
    }
    else{
        ytVid.classList.add('hidden');
    }
})

btnVid.addEventListener('click', function(){
    // console.log('clicked');
    if(ytVid.classList.contains('hidden')){
        ytVid.classList.remove('hidden');
    }
    else{
        ytVid.classList.add('hidden');
    }
})