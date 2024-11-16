document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById('image-scroll');

    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        const zoomFactor = 1 + scroll / 1000;

      img.style.transform = `scale(${zoomFactor})`;
      console.log(`Scroll: ${scroll}, ZoomFactor: ${zoomFactor}`);
    });
    console.log("hello");
  });

  