/* ============================================
   PRORAPTOR PORTFOLIO — INTERACTIVE LAYER
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── CUSTOM CURSOR ───
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  if (cursor && follower) {
    document.addEventListener('mousemove', e => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    document.querySelectorAll('a, button, .project-card, .scroll-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        follower.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        follower.classList.remove('hover');
      });
    });
  }

  // ─── MOBILE NAV ───
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-nav-close');

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => mobileNav.classList.add('open'));
    if (mobileClose) mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // ─── SCROLL REVEAL ───
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach((el, i) => {
    el.style.transitionDelay = (i * 0.07) + 's';
    observer.observe(el);
  });

  // ─── ACTIVE NAV LINK ───
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    if (a.getAttribute('href') === currentPath) a.classList.add('active');
  });

  // ─── TOPBAR DATE ───
  const dateEl = document.querySelector('.topbar-date');
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = now.getFullYear() + '.' + String(now.getMonth()+1).padStart(2,'0') + '.' + String(now.getDate()).padStart(2,'0');
  }

  // ─── HERO PARALLAX ───
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }, { passive: true });
  }

  // ─── SCROLL DRAG ───
  const tracks = document.querySelectorAll('.scroll-track');
  tracks.forEach(track => {
    let isDown = false, startX, scrollLeft;
    track.addEventListener('mousedown', e => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => isDown = false);
    track.addEventListener('mouseup', () => isDown = false);
    track.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
    });
  });

});
