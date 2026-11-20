(() => {
  const business = window.KIA_BUSINESS;
  const dialog = document.querySelector("#service-drawer");
  const openers = document.querySelectorAll("[data-service-open]");
  if (!business || !dialog || !openers.length) return;

  const drawerTitle = dialog.querySelector("#service-drawer-title");
  const drawerEyebrow = dialog.querySelector("#service-drawer-eyebrow");
  const drawerDescription = dialog.querySelector("#service-drawer-description");
  const drawerLimit = dialog.querySelector("#service-drawer-limit");
  const drawerSteps = dialog.querySelector("#service-drawer-steps");
  const drawerCta = dialog.querySelector("#service-drawer-cta");
  const closeButton = dialog.querySelector(".service-drawer__close");
  const services = {
    store: {
      eyebrow: "BELI LANGSUNG DI TOKO",
      title: "Beli Beras Langsung di Toko",
      description: "Datang langsung ke Toko Beras KIA untuk memilih beras sesuai kebutuhan Anda.",
      steps: [
        "Datang langsung ke toko.",
        "Pilih jenis beras yang diinginkan.",
        "Tentukan jumlah beras yang akan dibeli."
      ],
      cta: "Petunjuk Lokasi Toko",
      destination: "store"
    },
    delivery: {
      eyebrow: "PESANAN ANTAR KE RUMAH",
      title: "Pesan Sekarang, Kami Antar ke Rumah",
      description: "Pesan beras dari rumah dan kami antarkan langsung ke alamat Anda.",
      limit: "MAKSIMAL JARAK PENGANTARAN 5 KM DARI TOKO.",
      steps: [
        "Hubungi WhatsApp toko.",
        "Informasikan jenis dan jumlah beras yang ingin dipesan.",
        "Kirim alamat pengantaran.",
        "Tentukan waktu pengantaran, yaitu hari ini atau terjadwal."
      ],
      cta: "Pesan via WhatsApp",
      message: "Halo Toko Beras KIA, saya ingin memesan beras untuk diantar ke rumah."
    },
    wholesale: {
      eyebrow: "GROSIR & PENGGILINGAN",
      title: "Pesan Banyak, Kami Gilingkan dan Antar Terjadwal",
      description: "Layanan pesanan beras dalam jumlah besar dengan proses penggilingan dan pengantaran sesuai jadwal yang disepakati.",
      limit: "MINIMAL PESANAN 50 KG.",
      steps: [
        "Hubungi WhatsApp toko.",
        "Sampaikan kebutuhan dan jumlah pesanan.",
        "Diskusikan jenis beras yang diinginkan.",
        "Tentukan atau sepakati jadwal pengantaran."
      ],
      cta: "Konsultasi Pesanan Grosir",
      message: "Halo Toko Beras KIA, saya ingin bertanya mengenai pesanan grosir dan layanan penggilingan beras. Saya ingin mengetahui proses pemesanan dan jadwal pengantaran."
    }
  };

  let opener = null;
  let lockedScroll = 0;
  let savedBodyStyles = null;

  function setCta(service) {
    drawerCta.textContent = "";
    drawerCta.append(document.createTextNode(service.cta));
    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = " ↗";
    drawerCta.append(arrow);
    drawerCta.dataset.destination = service.destination ? "maps" : "whatsapp";
    if (service.destination) {
      const location = business.locations[service.destination];
      drawerCta.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;
    } else {
      drawerCta.href = `https://wa.me/${business.whatsapp.primary.international}?text=${encodeURIComponent(service.message)}`;
    }
  }

  function openDrawer(serviceKey, button) {
    const service = services[serviceKey];
    if (!service || dialog.open) return;
    opener = button;
    drawerEyebrow.textContent = service.eyebrow;
    drawerTitle.textContent = service.title;
    drawerDescription.textContent = service.description;
    drawerLimit.hidden = !service.limit;
    drawerLimit.querySelector("strong").textContent = service.limit || "";
    drawerSteps.replaceChildren(...service.steps.map((step, index) => {
      const item = document.createElement("li");
      const number = document.createElement("span");
      number.setAttribute("aria-hidden", "true");
      number.textContent = String(index + 1).padStart(2, "0");
      const text = document.createElement("p");
      text.textContent = step;
      item.append(number, text);
      return item;
    }));
    setCta(service);
    lockedScroll = window.scrollY;
    savedBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow
    };
    document.body.classList.add("service-drawer-open");
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScroll}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    dialog.showModal();
    closeButton.focus({ preventScroll: true });
  }

  openers.forEach((button) => button.addEventListener("click", () => {
    openDrawer(button.dataset.serviceOpen, button);
  }));
  closeButton.addEventListener("click", () => dialog.close("dismiss"));
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close("backdrop");
  });
  dialog.addEventListener("close", () => {
    if (savedBodyStyles) {
      Object.assign(document.body.style, savedBodyStyles);
      document.body.classList.remove("service-drawer-open");
      savedBodyStyles = null;
      const root = document.documentElement;
      root.classList.add("service-drawer-restoring-scroll");
      void getComputedStyle(root).scrollBehavior;
      root.scrollTop = lockedScroll;
      requestAnimationFrame(() => root.classList.remove("service-drawer-restoring-scroll"));
    }
    if (opener?.isConnected) opener.focus({ preventScroll: true });
  });
})();
