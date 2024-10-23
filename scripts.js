function showSection(sectionId) {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    
    document.getElementById(sectionId).style.display = "block";
  }

  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
});

function handleSubmit(event) {
    event.preventDefault();
    let form = document.getElementById('contactForm');
    if (form.checkValidity()) {
        document.getElementById('formFeedback').style.display = 'block';
        form.reset(); // Reset form after submission
    }
}

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();

// Function to show scroll carousel (Organizing section)
function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const itemWidth = carousel.querySelector('.carousel-item').offsetWidth + 20;
    carousel.scrollBy({
        left: direction * itemWidth,
        behavior: 'smooth'
    });
}

