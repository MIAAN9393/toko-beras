const business = window.KIA_BUSINESS;
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Buka menu" : "Tutup menu");
    navigation.classList.toggle("is-open", !isOpen);
  });
  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Buka menu");
    navigation.classList.remove("is-open");
  }));
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

if (business) {
  document.querySelectorAll("[data-whatsapp-display]").forEach((node) => {
    const contact = business.whatsapp[node.dataset.whatsappDisplay];
    if (contact) node.textContent = contact.display;
  });

  document.querySelectorAll("[data-business-email]").forEach((link) => {
    link.href = `mailto:${business.email}`;
    link.textContent = business.email;
  });

  document.querySelectorAll("[data-location-address]").forEach((node) => {
    const location = business.locations[node.dataset.locationAddress];
    if (location) node.textContent = location.address;
  });

  document.querySelectorAll("[data-location-name]").forEach((node) => {
    const location = business.locations[node.dataset.locationName];
    if (location) node.textContent = location.name;
  });

  document.querySelectorAll("[data-location-note]").forEach((node) => {
    const location = business.locations[node.dataset.locationNote];
    if (location) node.textContent = location.note;
  });

  document.querySelectorAll("[data-map-link], [data-directions-link]").forEach((link) => {
    const key = link.dataset.mapLink || link.dataset.directionsLink;
    const location = business.locations[key];
    if (!location) return;
    const destination = encodeURIComponent(location.address);
    link.href = link.hasAttribute("data-map-link")
      ? `https://www.google.com/maps/search/?api=1&query=${destination}`
      : `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  });

  document.querySelectorAll(".wa-link").forEach((link) => {
    const key = link.dataset.whatsapp || "primary";
    const contact = business.whatsapp[key];
    if (!contact) return;
    link.href = `https://wa.me/${contact.international}?text=${encodeURIComponent(business.whatsappMessage)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
} else {
  document.querySelectorAll(".wa-link").forEach((link) => { link.href = "#kontak"; });
}
