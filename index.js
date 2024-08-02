// Dynamic content for projects
document.getElementById('project1-summary').textContent = 'This project explores the economic impact of globalization on developing countries. The methodology involves econometric analysis using data from the World Bank.';
document.getElementById('project2-summary').textContent = 'This project investigates the relationship between education and economic growth in various regions. It utilizes regression analysis to uncover significant trends and correlations.';

// Interactive Chart using Chart.js
const ctx = document.getElementById('projectChart').getContext('2d');
const projectChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Globalization', 'Education', 'Health', 'Technology', 'Trade'],
        datasets: [{
            label: 'Impact Score',
            data: [8, 7, 6, 9, 5],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        document.getElementById('formResponse').textContent = 'Thank you for your message, ' + name + '! I will get back to you at ' + email + '.';
    } else {
        document.getElementById('formResponse').textContent = 'Please fill out all fields.';
    }

    // Clear the form
    document.getElementById('contactForm').reset();
});
