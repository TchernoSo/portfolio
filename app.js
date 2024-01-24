let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 35000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 35000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


// typewrititing effect 

document.addEventListener("DOMContentLoaded", function() {
    const words = ['Coder', 'Artist', 'Writer', 'Mentor'];
    const typeTextElement = document.getElementById('typewriter');

    function typeWriter() {
        let wordIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < words[wordIndex].length) {
                typeTextElement.textContent += words[wordIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Adjust typing speed here
            } else {
                setTimeout(erase, 1500); // Delay before erasing
            }
        }

        function erase() {
            if (charIndex > 0) {
                typeTextElement.textContent = words[wordIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50); // Adjust erasing speed here
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); // Delay before typing the next word
            }
        }

        type();
    }

    typeWriter(); // Start the typewriting effect
});


// email section 

// Sent button 

function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
  
    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);
  
        success.style.display = 'block';
    }
  
  
    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
  
  }