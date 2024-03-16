document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const items = document.querySelectorAll('.slider .list .item');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const thumbnails = document.querySelectorAll('.thumbnail .item');

    // Configuration parameters
    let countItem = items.length;
    let itemActive = 0;
    let refreshInterval;

    // Event listeners for next and previous buttons
    next.addEventListener('click', () => {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
    });

    prev.addEventListener('click', () => {
        itemActive = (itemActive - 1 + countItem) % countItem;
        showSlider();
    });

    // Function to show slider
    function showSlider() {
        // Get the active item and thumbnail elements
        const activeItem = document.querySelector('.slider .list .item.active');
        const activeThumbnail = document.querySelector('.thumbnail .item.active');
    
        // Check if the elements exist before accessing their properties
        if (activeItem && activeThumbnail) {
            // Remove active class from old items
            activeItem.classList.remove('active');
            activeThumbnail.classList.remove('active');
    
            // Add active class to new items
            if (items[itemActive] && thumbnails[itemActive]) {
                items[itemActive].classList.add('active');
                thumbnails[itemActive].classList.add('active');
            } else {
                console.error("Item or thumbnail element not found");
            }
    
            // Reset auto interval
            clearInterval(refreshInterval);
            refreshInterval = setInterval(() => {
                next.click();
            }, 35000);
        } else {
            console.error("Active item or thumbnail element not found");
        }
    }
    

    // Auto run slider
    refreshInterval = setInterval(() => {
        next.click();
    }, 35000);

    // Click on thumbnail
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        });
    });
});




// typewrititing effect

document.addEventListener("DOMContentLoaded", function() {
    const words = ['Artist', 'Coder', 'Writer', 'Mentor'];
    const typeTextElement = document.getElementById('typewriter');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentWord = words[wordIndex];
        if (!isDeleting && charIndex < currentWord.length) {
            typeTextElement.textContent += currentWord.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100); // Adjust typing speed here
        } else if (isDeleting && charIndex > 0) {
            typeTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeWriter, 50); // Adjust erasing speed here
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(typeWriter, isDeleting ? 1500 : 500); // Delay before erasing or typing next word
        }
    }

    typeWriter(); // Start the typewriting effect
});





// read more 
function myRead() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {

        dots.style.display = "inline";
  
        btnText.innerHTML = "Read more";
  
        moreText.style.display = "none";
    } else {

        dots.style.display = "none";
  
        btnText.innerHTML = "Read less";
  
        moreText.style.display = "inline";
  
      }
}




//   scroll id effect 
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var yOffset = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
}



// Email Effect 
const hoverTrigger = document.querySelector('.hover-trigger');
const targetElement = document.querySelector('.target-element');

// Adding event listener for hover on the trigger element
hoverTrigger.addEventListener('mouseenter', () => {
    // Changing background color of the target element
    targetElement.style.backgroundColor = '#10c3ff';
});

hoverTrigger.addEventListener('mouseleave', () => {
    // Resetting background color of the target element
    targetElement.style.backgroundColor = '#000000';
});