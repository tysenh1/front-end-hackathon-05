const [
    mcdonaldsHistory,
    mcdonaldsTimeline,
    mcdonaldsFacts,
    oldHistoryButton,
    newHistoryButton,
] = [
    document.getElementById('McDonaldsHistory'),
    document.getElementById('McDonaldsTimeline'),
    document.getElementById('McDonaldsFacts'),
    document.getElementById('oldHistoryButton'),
    document.getElementById('newHistoryButton'),
];

// Initialize the current slide variable
let historyCounter = 0;

// Event listeners for button clicks
oldHistoryButton.addEventListener('click', oldHistorySlide);
newHistoryButton.addEventListener('click', newHistorySlide);

// Function to handle "Previous" button functionality
function oldHistorySlide() {
    if (historyCounter === 0) {
        historyCounter = 2; // Go to facts
        mcdonaldsHistory.style.display = 'none';
        mcdonaldsTimeline.style.display = 'none';
        mcdonaldsFacts.style.display = 'grid';
    } else if (historyCounter === 1) {
        historyCounter = 0; // Go to history
        mcdonaldsFacts.style.display = 'none';
        mcdonaldsHistory.style.display = 'grid';
    } else {
        historyCounter = 1; // Go to timeline
        mcdonaldsFacts.style.display = 'none';
        mcdonaldsTimeline.style.display = 'grid';
    }
}

// Function to handle "Next" button functionality
function newHistorySlide() {
    if (historyCounter === 0) {
        historyCounter = 1; // Go to timeline
        mcdonaldsHistory.style.display = 'none';
        mcdonaldsTimeline.style.display = 'grid';
    } else if (historyCounter === 1) {
        historyCounter = 2; // Go to facts
        mcdonaldsTimeline.style.display = 'none';
        mcdonaldsFacts.style.display = 'grid';
    } else {
        historyCounter = 0; // Go to history
        mcdonaldsFacts.style.display = 'none';
        mcdonaldsHistory.style.display = 'grid';
    }
}

// Populate the timeline and facts
const mcdonaldsHistoryList = [
    '1940: The McDonald brothers opened their first restaurant in San Bernardino, California.',
    '1948: They simplified their menu to focus on hamburgers and fries, introducing the “Speedee Service System.”',
    '1954: Ray Kroc visited the McDonald brothers and proposed franchising their model.',
    '1955: The first McDonald’s franchise opened in Des Plaines, Illinois.',
    '1961: Kroc bought the rights to McDonald’s from the brothers for $2.7 million.',
    '1960s-70s: McDonald’s expanded rapidly, becoming a global fast-food icon.',
    '1980s-2000s: New menu items were introduced to appeal to changing consumer preferences.',
    'Present: McDonald’s operates over 38,000 locations worldwide, serving millions daily.'
];

const mcdonaldsHistoryListElement = document.getElementById('McDonaldsHistoryList');

// Populate the history list
for (let event of mcdonaldsHistoryList) {
    let eventLi = document.createElement('li');
    eventLi.innerHTML = event;
    mcdonaldsHistoryListElement.appendChild(eventLi);
}

const mcdonaldsFactList = [
    'The original McDonald’s was a barbecue restaurant.',
    'The iconic golden arches were designed in 1953.',
    'McDonald’s is the world’s largest chain of fast food restaurants.',
    'The Big Mac is one of the best-selling items in the McDonald’s menu.',
    'McDonald’s serves more than 69 million customers daily in over 100 countries.'
];

const mcdonaldsFactListElement = document.getElementById('McDonaldsFactList');

// Populate the facts list
for (let fact of mcdonaldsFactList) {
    let factLi = document.createElement('li');
    factLi.innerHTML = fact;
    mcdonaldsFactListElement.appendChild(factLi);
}

// Initialize the display to show only the history section
mcdonaldsTimeline.style.display = 'none';
mcdonaldsFacts.style.display = 'none';


// Hackathon 5
// API Section
const apiButton = document.getElementById('fetchApiData');
const apiDataList = document.getElementById('apiDataList');

async function fetchApiData() {
    try {
        const response = await fetch('https://run.mocky.io/v3/a9b655b4-4165-4db0-89c3-dfddc073bc0d');
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

        apiDataList.innerHTML = '';

        data.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = `${post.title}`;
            apiDataList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

apiButton.addEventListener('click', fetchApiData);