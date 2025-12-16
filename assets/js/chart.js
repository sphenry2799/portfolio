// Data
const allData = [
  { label: "Web Design & UI", value: 90, category: "Design" },
  { label: "CMS & Site Management", value: 85, category: "Technical" },
  { label: "UX & Collaboration", value: 80, category: "Strategy" },
  { label: "SEO & Analytics", value: 70, category: "Strategy" },
  { label: "Performance & Compatibility", value: 75, category: "Technical" },
  { label: "Visual & Presentation Design", value: 85, category: "Design" },
];

const chartContainer = document.getElementById("bar-chart");

// Render function
function renderChart(data) {
  chartContainer.innerHTML = "";
  data.forEach((item) => {
    const barItem = document.createElement("div");
    barItem.className = "bar-item";

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = item.label;

    const bar = document.createElement("div");
    bar.className = "bar";

    const fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.width = "0%";

    const percent = document.createElement("div");
    percent.className = "bar-percent";
    percent.textContent = item.value + "%";

    bar.appendChild(fill);
    barItem.appendChild(label);
    barItem.appendChild(bar);
    barItem.appendChild(percent);
    chartContainer.appendChild(barItem);

    // Animate fill
    setTimeout(() => {
      fill.style.width = item.value + "%";
    }, 50);
  });
}

// Filters
function showAll() {
  renderChart(allData);
  setActive(0);
}
function filterDesign() {
  renderChart(allData.filter((i) => i.category === "Design"));
  setActive(1);
}
function filterTechnical() {
  renderChart(allData.filter((i) => i.category === "Technical"));
  setActive(2);
}
function filterStrategy() {
  renderChart(allData.filter((i) => i.category === "Strategy"));
  setActive(3);
}

function setActive(index) {
  document
    .querySelectorAll("#about-section .filter-tabs button")
    .forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
}

// Initial render
showAll();
