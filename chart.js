function createBarChart(data) {
    // Define the chart container element
    const chartContainer = document.getElementById("chart-container");

    // Create a div element for each data point
    data.forEach((item) => {
        const barWrapper = document.createElement("div");
        barWrapper.className = "bar-wrapper";

        // Create a div element for the label
        const label = document.createElement("div");
        label.className = "label";
        label.innerText = item.label;
        barWrapper.appendChild(label);

        const bar = document.createElement("div");
        bar.className = "bar";

        // Set the width and height of the bar based on the data value
        bar.style.width = "0%";
        bar.style.height = "20px";
        // Set the background color of the bar
        bar.style.backgroundColor = item.color;

        barWrapper.appendChild(bar);

        // Create a div element for the label
        const label2 = document.createElement("div");
        label2.className = "label2";
        label2.innerText = item.label2;
        barWrapper.appendChild(label2);

        // Add the bar to the chart container
        chartContainer.appendChild(barWrapper);

        // Animate the bar width using CSS transitions
        setTimeout(() => bar.style.width = `${item.value}%`, 100);
    });
}


const data = [
    { label: "District 1", value: 112 / 129 * 55, color: "#004b8e", label2: "123 Pledges" },
    { label: "District 2", value: 98 / 129 * 55, color: "#004b8e", label2: "123 Pledges" },
    { label: "District 3", value: 119 / 129 * 55, color: "#004b8e", label2: "123 Pledges" },
    { label: "District 4", value: 126 / 129 * 55, color: "#004b8e", label2: "123 Pledges" },
    { label: "District 5", value: 129 / 129 * 55, color: "#004b8e", label2: "123 Pledges" },
    { label: "District 6", value: 44 / 129 * 55, color: "#004b8e", label2: "123 Pledges" },
    { label: "District 7", value: 118 / 129 * 55, color: "#004b8e", label2: "123 Pledges" },
    { label: "District 8", value: 125 / 129 * 55, color: "#004b8e", label2: "123 Pledges" },
    { label: "District 9", value: 101 / 129 * 55, color: "#004b8e", label2: "123 Pledges" },
    { label: "District 10", value: 27 / 129 * 55, color: "#004b8e", label2: "123 Pledges" },
];
createBarChart(data);