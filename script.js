window.onload = function(){
    // Hero text fade-in
    const heroText = document.querySelector(".hero-text");
    if(heroText){
        heroText.style.animation = "show 1s ease forwards";
    }

    // Hero image zoom-in
    const heroImg = document.querySelector(".hero-img");
    if(heroImg){
        heroImg.classList.add("show");
    }

    // Scroll reveal for cards
    const cards = document.querySelectorAll(".card");
    window.addEventListener("scroll", () => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100){
                card.classList.add("show");
            }
        });
    });

    // Scroll reveal for timeline items
    const timelineItems = document.querySelectorAll(".timeline-item");
    window.addEventListener("scroll", () => {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100){
                item.classList.add("show");
            }
        });
    });

    // Modal logic
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("click", () => {
            modalTitle.textContent = project.dataset.title;
            modalDesc.textContent = project.dataset.desc;
            modal.style.display = "block";
            modal.querySelector(".modal-content").style.animation = "bounceIn 0.5s ease";
        });
    });

    if(closeBtn){
        closeBtn.onclick = () => {
            modal.style.display = "none";
        };
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
};
// Scroll reveal for timeline items
const timelineItems = document.querySelectorAll(".timeline-item");
window.addEventListener("scroll", () => {
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            item.classList.add("show");
        }
    });
});

// Popup for timeline and certificates
document.querySelectorAll(".timeline-item, .cert").forEach(el => {
    el.addEventListener("click", () => {
        modalTitle.textContent = el.dataset.title;
        modalDesc.textContent = el.dataset.desc;
        modal.style.display = "block";
        modal.querySelector(".modal-content").style.animation = "bounceIn 0.5s ease";
    });
});

