/* 我们的故事 · 渲染与交互 */
(function () {
  "use strict";

  const data = MEMORY_DATA;

  // 注入首页文字
  document.getElementById("heroTitle").textContent = data.heroTitle || "我们的故事";
  document.getElementById("heroSubtitle").textContent = data.heroSubtitle || "";
  document.getElementById("footerText").textContent = data.footerText || "Made with ❤ for you";

  const tabs = document.getElementById("tabs");
  const sectionTitle = document.getElementById("sectionTitle");
  const sectionDesc = document.getElementById("sectionDesc");
  const cardsEl = document.getElementById("cards");

  const SECTIONS = {
    places: data.places,
    food: data.food,
    activities: data.activities,
    future: data.future,
  };

  // ---- 渲染卡片 ----
  function render(key) {
    const sec = SECTIONS[key];
    if (!sec) return;
    sectionTitle.textContent = sec.title || "";
    sectionDesc.textContent = sec.desc || "";

    cardsEl.innerHTML = "";
    const items = sec.items || [];

    if (key === "future") {
      cardsEl.className = "timeline";
      items.forEach((it, i) => {
        const node = document.createElement("div");
        node.className = "tl-item";
        node.style.animationDelay = i * 0.06 + "s";
        node.innerHTML =
          '<span class="tl-dot"></span>' +
          '<div class="tl-card">' +
          '<div class="tl-when">' + (it.when || "") + "</div>" +
          '<div class="tl-name">' + escapeHtml(it.name || "") + "</div>" +
          '<div class="tl-desc">' + escapeHtml(it.desc || "") + "</div>" +
          "</div>";
        cardsEl.appendChild(node);
      });
    } else {
      cardsEl.className = "cards";
      items.forEach((it, i) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = i * 0.06 + "s";

        const photo = it.img
          ? '<img class="card-photo" src="' + escapeAttr(it.img) + '" alt="' + escapeAttr(it.name) + '" loading="lazy" />'
          : '<div class="card-photo"><span class="card-emoji">' + (it.emoji || "❤️") + "</span></div>";

        const date = it.date ? '<span class="card-date">' + escapeHtml(it.date) + "</span>" : "";
        card.innerHTML =
          photo +
          date +
          '<div class="card-name">' + escapeHtml(it.name || "") + "</div>" +
          '<div class="card-desc">' + escapeHtml(it.desc || "") + "</div>";
        cardsEl.appendChild(card);
      });
    }
    // 高亮当前 tab
    document.querySelectorAll(".tab").forEach((t) => {
      t.classList.toggle("active", t.dataset.key === key);
    });
  }

  // 选项点击
  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    render(btn.dataset.key);
    document.getElementById("content").scrollIntoView({ behavior: "smooth" });
  });

  // 默认展示第一个分类
  render("places");

  // 回到顶部
  document.getElementById("backTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ---- 漂浮爱心背景 ----
  const bg = document.getElementById("heartBg");
  const HEARTS = ["❤️", "💕", "💗", "💖", "🩷", "🌸"];
  function spawnFloatHeart() {
    const el = document.createElement("span");
    el.className = "float-heart";
    el.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
    el.style.left = Math.random() * 100 + "vw";
    const dur = 7 + Math.random() * 8;
    el.style.animationDuration = dur + "s";
    el.style.fontSize = 14 + Math.random() * 22 + "px";
    bg.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000);
  }
  setInterval(spawnFloatHeart, 600);
  for (let i = 0; i < 8; i++) setTimeout(spawnFloatHeart, i * 400);

  // ---- 点击大爱心爆发 ----
  const heartWrap = document.getElementById("heartWrap");
  function burst() {
    const rect = heartWrap.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    for (let i = 0; i < 18; i++) {
      const h = document.createElement("span");
      h.className = "burst-heart";
      h.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
      h.style.left = cx + "px";
      h.style.top = cy + "px";
      const angle = (Math.PI * 2 * i) / 18;
      const dist = 80 + Math.random() * 120;
      h.style.setProperty("--dx", Math.cos(angle) * dist + "px");
      h.style.setProperty("--dy", Math.sin(angle) * dist + "px");
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 1000);
    }
  }
  heartWrap.addEventListener("click", burst);
  heartWrap.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); burst(); }
  });

  // 转义，防止内容破坏页面
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }
  function escapeAttr(s) { return escapeHtml(s); }
})();
