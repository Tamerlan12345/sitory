(() => {
  const counters = Array.from(document.querySelectorAll("[data-counter]"));
  for (const counter of counters) {
    const target = Number(counter.getAttribute("data-counter") || "0");
    if (!Number.isFinite(target) || target <= 0) continue;
    let current = 0;
    const step = Math.max(1, Math.round(target / 20));
    const timer = setInterval(() => {
      current = Math.min(target, current + step);
      counter.textContent = String(current);
      if (current >= target) clearInterval(timer);
    }, 38);
  }

  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = "© " + new Date().getFullYear();
  }
})();
