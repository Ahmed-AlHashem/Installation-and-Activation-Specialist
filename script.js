let installedCount = 94; // Example value
let repairedCount = 4; // Example value

document.getElementById('installedDevices').innerText = installedCount;
document.getElementById('repairedDevices').innerText = repairedCount;

// Calculate days at Ninja
const startDate = new Date('2024-12-29');
const currentDate = new Date();
const timeDiff = currentDate - startDate;
const daysAtNinja = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

document.getElementById('daysCounter').innerText = `Days at Ninja: ${daysAtNinja}`;

// Function to draw pie chart
function drawPieChart(canvasId, data, labels, colors) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const total = data.reduce((sum, value) => sum + value, 0);
    let startAngle = 0;

    data.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(150, 150); // Center of the pie
        ctx.arc(150, 150, 100, startAngle, startAngle + sliceAngle); // Draw the slice
        ctx.fillStyle = colors[index];
        ctx.fill();
        startAngle += sliceAngle;
    });
}

// Draw the combined chart
drawPieChart('combinedChart', [installedCount, repairedCount], ['Installed Devices', 'Repaired Devices'], ['#1ecad3', '#ff5733']);