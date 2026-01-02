// Data
const allData = [
  { label: "Frontend Development (Bootstrap/JS)", value: 85, category: "Technical" },
  { label: "Backend & APIs (Python/Django)", value: 75, category: "Technical" },
  { label: "UI/UX & Figma Design", value: 90, category: "Design" },
  { label: "Information Architecture", value: 80, category: "Strategy" },
  { label: "Stakeholder Management", value: 95, category: "Strategy" },
  { label: "Visual Communication & Data Viz", value: 85, category: "Design" },
  { label: "Visual Design & Asset Creation", value: 80, category: "Design" },
];

const chartContainer = document.getElementById("bar-chart");

function renderChart(data) {
  chartContainer.innerHTML = "";
  data.forEach((item, index) => {
    const barItem = document.createElement("div");
    barItem.className = "bar-item";
    
    // 1. Create the label
    const label = document.createElement("div");
    label.className = "bar-label";
    label.id = "label-" + index; // Now 'index' is defined!
    label.textContent = item.label;

    // 2. Create the outer bar container
    const bar = document.createElement("div");
    bar.className = "bar";
    // Adding ARIA for accessibility
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuenow", item.value);
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", "100");
    bar.setAttribute("aria-labelledby", "label-" + index);

    // 3. Create the inner fill (This was the missing/misplaced part)
    const fill = document.createElement("div");
    fill.className = "bar-fill";
    // Now you can safely add the category class
    fill.classList.add(`fill-${item.category.toLowerCase()}`);
    fill.style.width = "0%"; // Start at 0 for animation

    // 4. Create the percentage text
    const percent = document.createElement("div");
    percent.className = "bar-percent";
    percent.textContent = item.value + "%";

    // 5. Append everything in the correct order
    bar.appendChild(fill);
    barItem.appendChild(label);
    barItem.appendChild(bar);
    barItem.appendChild(percent);
    chartContainer.appendChild(barItem);

    // 6. Trigger animation
    setTimeout(() => {
      fill.style.width = item.value + "%";
    }, 50);
  });
}

// Filter functions to call from your HTML buttons
function showAll() {
  renderChart(allData);
}

function filterDesign() {
  const filtered = allData.filter(item => item.category === "Design");
  renderChart(filtered);
}

function filterTechnical() {
  const filtered = allData.filter(item => item.category === "Technical");
  renderChart(filtered);
}

function filterStrategy() {
  const filtered = allData.filter(item => item.category === "Strategy");
  renderChart(filtered);
}

// Initial render on page load
renderChart(allData);
