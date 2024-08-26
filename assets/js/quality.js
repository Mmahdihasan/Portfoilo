// Get all table rows
const tableRows = document.querySelectorAll('tbody tr');

// Function to apply gradient background
function applyGradientBackground(row) {
    row.style.background = 'linear-gradient(135deg, var(--brand_color), var(--brand_color2))';
    row.style.color = '#fff';
}

// Function to reset row background
function resetRowBackground(row) {
    row.style.background = ''; // Reset to default
    row.style.color = '';       // Reset text color
}

// Function to highlight the first row when the cursor leaves the table
function highlightFirstRow() {
    tableRows.forEach((row, index) => {
        if (index === 0) {
            applyGradientBackground(row);
        } else {
            resetRowBackground(row);
        }
    });
}

// Add hover event listeners to each row
tableRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        // Reset all rows before applying hover style
        tableRows.forEach(r => {
            resetRowBackground(r);
        });
        applyGradientBackground(row);
    });
});

// Add mouseleave event listener to the table to highlight the first row
document.querySelector('table').addEventListener('mouseleave', highlightFirstRow);

// Initially highlight the first row
highlightFirstRow();
