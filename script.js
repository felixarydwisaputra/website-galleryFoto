const container = document.querySelector('.sidebar');
const gambarJumbo = document.querySelector('.jumbo-foto');

const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    if(e.target.className == 'thumb'){
        gambarJumbo.src = e.target.src;
        gambarJumbo.classList.add('fade');
        setTimeout(() => {
            gambarJumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb){
            thumb.className = 'thumb';
        })

        e.target.classList.add('active'); 
    }
})

