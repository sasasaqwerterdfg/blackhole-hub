const images = [
  { src: "images/2.png", title: "سایه‌ی جادویی", link: "page1.html" },
  { src: "images/63992341-88a8-4ace-b742-ec8b18e446de.png", title: "سیاه‌چاله آبی", link: "page2.html" },
  { src: "images/3.png", title: "موجود مرموز", link: "page3.html" }
];

window.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  images.forEach(item => {
    const card = document.createElement("a");
    card.href = item.link;
    card.className = "card";
    card.innerHTML = `
      <img src="${item.src}" alt="${item.title}" />
      <div class="caption">${item.title}</div>
    `;
    gallery.appendChild(card);
  });
});
