/* ==========================================
   MIR Electronics JavaScript — Updated fixes
   - Hide/remove preloader after window load
   - Ensure scroll-to-top button class matches CSS (.top-btn)
   - IntersectionObserver feature-detect fallback
   - Small accessibility and robustness improvements
========================================== */

// Smooth Scroll (anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        // only handle same-page anchors
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});

/* ==========================================
   Scroll To Top Button
========================================== */
const topBtn = document.createElement("button");
topBtn.id = "topBtn";
// Also add the .top-btn class so it matches common CSS selectors
topBtn.className = "top-btn";
topBtn.setAttribute('aria-label', 'Scroll to top');
topBtn.title = 'Back to top';

topBtn.innerHTML = "↑";
// start hidden
topBtn.style.display = 'none';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ==========================================
   Product Search
========================================== */
const searchBox = document.getElementById("searchBox");
if (searchBox) {
    searchBox.addEventListener("keyup", function () {
        let filter = searchBox.value.toLowerCase();
        let cards = document.querySelectorAll(".product-card");
        cards.forEach(function (card) {
            let text = card.innerText.toLowerCase();
            card.style.display = text.includes(filter) ? "block" : "none";
        });
    });
}

/* ==========================================
   Active Navigation (mark current page)
========================================== */
(function setActiveNav() {
    const current = window.location.pathname.split("/").pop() || 'index.html';
    document.querySelectorAll(".nav-links a").forEach(link => {
        const href = link.getAttribute("href");
        if (!href) return;
        if (href === current || (href === 'index.html' && current === '')) {
            link.classList.add("active");
        }
    });
})();

/* ==========================================
   Fade Animation (IntersectionObserver)
   - Feature-detect IntersectionObserver to avoid errors in old browsers
========================================== */
(function initReveal() {
    const items = document.querySelectorAll(".card,.product-card,.about-box,.features div");
    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "all .6s ease";
    });

    if ('IntersectionObserver' in window) {
        try {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            });
            items.forEach(item => observer.observe(item));
        } catch (err) {
            // If any error occurs, fallback to showing items immediately
            items.forEach(item => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            });
            console.warn('IntersectionObserver failed, reveal fallback applied', err);
        }
    } else {
        // Fallback: show everything
        items.forEach(item => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        });
    }
})();

/* ==========================================
   Console Message
========================================== */
console.log("MIR Electronics Website Loaded Successfully");

/* ==========================================
   Mobile Menu Toggle
========================================== */
(function mobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
})();

/* ==========================================
   Preloader — hide when the page fully loads
   If a preloader element exists, fade it out then remove from flow.
========================================== */
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // gentle fade out for better UX
        preloader.style.transition = 'opacity 450ms ease, visibility 450ms';
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        // remove from layout after the transition
        setTimeout(() => {
            if (preloader && preloader.parentNode) preloader.parentNode.removeChild(preloader);
        }, 500);
    }
});

/* ==========================================
   Image Lightbox
========================================== */
(function lightboxInit() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.getElementById("close-lightbox");

    if (lightbox && lightboxImg && closeLightbox) {
        document.querySelectorAll(".featured-card img, .product-card img").forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener("click", function () {
                lightbox.style.display = "flex";
                lightboxImg.src = this.src;
                lightboxImg.alt = this.alt || 'Product Image';
            });
        });

        closeLightbox.addEventListener("click", function () {
            lightbox.style.display = "none";
        });

        lightbox.addEventListener("click", function (e) {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }
})();
