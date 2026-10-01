/**
 * ============================================================================
 * NODES STUDIO - Single-Page Marketing Website Script
 * ============================================================================
 * All studio content is centralized in STUDIO_CONFIG below for easy customization.
 */

const STUDIO_CONFIG = {
  studioName: "Nodes Studio",
  shortName: "NODES STUDIO",
  tagline: "Where Vision Meets Design!",
  description: "Nodes Studio is a design practice based in Semarang, specializing in architecture, urban design, and computational & parametric design with a deep focus on daylight, natural materials, and social spaces.",
  contactEmail: "nodes.architect@gmail.com",
  phone: "Semarang, Indonesia",
  address: "Semarang, Central Java, Indonesia",

  // Core disciplines
  heroPills: ["Architecture", "Urban Design", "Computational and Parametric Design"],

  // Footer & Branding
  craftedBy: "BENCHCODE™",

  // Created together tab data
  createdTogetherTabs: {
    nature: {
      label: "Nature",
      items: [
        {
          num: 1,
          title: "Social and environmental sustainability",
          desc: "A holistic methodology and responsible practice with parametric environmental simulation, solar optimization, and circular materials."
        },
        {
          num: 2,
          title: "Computational & Parametric Design",
          desc: "Algorithmic exploration of responsive building envelopes, passive climate performance, and geometrically optimized timber structures."
        },
        {
          num: 3,
          title: "Regenerative urban design",
          desc: "Context-driven masterplanning and public realm design that harmonizes natural water systems, urban microclimates, and vibrant community life."
        }
      ],
      footerNote: "All our buildings, urban masterplans, and spatial systems are created to inspire human interactions, designed in close collaboration with communities across Indonesia and beyond."
    },
    social: {
      label: "Social",
      items: [
        {
          num: 1,
          title: "Community-driven spaces",
          desc: "Designing communal gathering spots and intergenerational hubs that foster meaningful human connection, belonging, and shared civic pride."
        },
        {
          num: 2,
          title: "Inclusive universal design",
          desc: "Crafting barrier-free environments that welcome every individual regardless of age, mobility, or background, prioritizing human dignity."
        },
        {
          num: 3,
          title: "Democratic co-creation",
          desc: "Conducting user workshops, on-site interviews, and interactive mockups to align architecture with real daily community rituals."
        }
      ],
      footerNote: "We believe true architectural longevity stems from deep empathy, listening closely to community stakeholders at every single phase of development."
    },
    materials: {
      label: "Materials",
      items: [
        {
          num: 1,
          title: "Mass timber & low embodied carbon",
          desc: "Prioritizing certified regional timber, clay plasters, and biophilic surfaces that sequester carbon and age gracefully over decades."
        },
        {
          num: 2,
          title: "Circular construction & re-use",
          desc: "Designing for disassembly, reclaiming historic brickwork, and testing modular building components for infinite life cycles."
        },
        {
          num: 3,
          title: "Non-toxic & healthy indoor climate",
          desc: "Selecting natural acoustic wool, breathable facades, and volatile-free finishes that promote respiratory health and restorative tranquility."
        }
      ],
      footerNote: "Every material is vetted for chemical purity, embodied emissions, and circular recyclability before entering our architectural palette."
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initTabSwitcher();
  initCarousels();
  initSmoothScroll();
});

/**
 * Enhanced Navbar with sticky scroll effects
 */
function initNavbar() {
  const navbar = document.getElementById("main-nav");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const closeBtn = document.getElementById("mobile-menu-close");
  const menuOverlay = document.getElementById("mobile-menu-overlay");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !menuOverlay) return;

  const openMenu = () => {
    menuOverlay.classList.remove("opacity-0", "pointer-events-none");
    menuOverlay.classList.add("opacity-100", "pointer-events-auto");
    document.body.style.overflow = "hidden";
    toggleBtn.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    menuOverlay.classList.remove("opacity-100", "pointer-events-auto");
    menuOverlay.classList.add("opacity-0", "pointer-events-none");
    document.body.style.overflow = "";
    toggleBtn.setAttribute("aria-expanded", "false");
  };

  toggleBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menuOverlay.classList.contains("opacity-0")) {
      closeMenu();
    }
  });
}

/**
 * Smooth Scroll Intersection Observer for Reveal-on-Scroll animations
 */
function initScrollAnimations() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const elements = document.querySelectorAll(".reveal-on-scroll");

  if (prefersReduced) {
    elements.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Tab Switcher in "Created together" section
 */
function initTabSwitcher() {
  const tabButtons = document.querySelectorAll(".tab-switch-btn");
  const tabContainer = document.getElementById("tab-items-container");
  const footerNoteEl = document.getElementById("tab-footer-note");

  if (!tabButtons.length || !tabContainer) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      const data = STUDIO_CONFIG.createdTogetherTabs[targetTab];
      if (!data) return;

      // Update button styles
      tabButtons.forEach((b) => {
        b.classList.remove("bg-[#6B6D62]", "text-white", "shadow-sm");
        b.classList.add("text-white/70", "hover:text-white");
        b.setAttribute("aria-selected", "false");
      });

      btn.classList.add("bg-[#6B6D62]", "text-white", "shadow-sm");
      btn.classList.remove("text-white/70");
      btn.setAttribute("aria-selected", "true");

      // Smooth fade transition of content
      tabContainer.style.opacity = "0";
      tabContainer.style.transform = "translateY(8px)";
      if (footerNoteEl) footerNoteEl.style.opacity = "0";

      setTimeout(() => {
        // Render new items
        tabContainer.innerHTML = data.items
          .map(
            (item) => `
          <div class="flex flex-col gap-3 group">
            <div class="w-9 h-9 rounded-full bg-[#1E201B] border border-white/20 flex items-center justify-center text-xs font-semibold text-[#F4F3EE] shadow-inner transition-transform group-hover:scale-105">
              ${item.num}
            </div>
            <h3 class="font-heading text-xl lg:text-2xl text-[#F4F3EE] font-semibold leading-tight">
              ${item.title}
            </h3>
            <p class="font-body text-sm text-[#F4F3EE]/80 leading-relaxed max-w-sm">
              ${item.desc}
            </p>
          </div>
        `
          )
          .join("");

        if (footerNoteEl) {
          footerNoteEl.textContent = data.footerNote;
        }

        tabContainer.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        tabContainer.style.opacity = "1";
        tabContainer.style.transform = "translateY(0)";
        if (footerNoteEl) {
          footerNoteEl.style.transition = "opacity 0.4s ease";
          footerNoteEl.style.opacity = "1";
        }
      }, 200);
    });
  });
}

/**
 * Mobile Carousel scroll indicators
 */
function initCarousels() {
  const carousel = document.querySelector(".mobile-carousel");
  const dotsContainer = document.getElementById("carousel-dots");
  if (!carousel || !dotsContainer) return;

  const cards = carousel.children;
  dotsContainer.innerHTML = "";

  for (let i = 0; i < cards.length; i++) {
    const dot = document.createElement("button");
    dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${
      i === 0 ? "bg-[#2B2D28] w-6" : "bg-[#2B2D28]/30"
    }`;
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    dot.addEventListener("click", () => {
      cards[i].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
    dotsContainer.appendChild(dot);
  }

  carousel.addEventListener(
    "scroll",
    () => {
      const scrollPos = carousel.scrollLeft;
      const cardWidth = cards[0]?.offsetWidth || 300;
      const activeIndex = Math.min(Math.round(scrollPos / cardWidth), cards.length - 1);

      Array.from(dotsContainer.children).forEach((dot, index) => {
        if (index === activeIndex) {
          dot.className = "w-6 h-2 rounded-full bg-[#2B2D28] transition-all duration-300";
        } else {
          dot.className = "w-2 h-2 rounded-full bg-[#2B2D28]/30 transition-all duration-300";
        }
      });
    },
    { passive: true }
  );
}

/**
 * Smooth anchor scrolling
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
}

// Global modal trigger helper for CTA buttons
window.openContactModal = function () {
  const ctaSection = document.getElementById("contact");
  if (ctaSection) {
    ctaSection.scrollIntoView({ behavior: "smooth" });
    const emailInput = document.getElementById("newsletter-email");
    if (emailInput) emailInput.focus();
  }
};
