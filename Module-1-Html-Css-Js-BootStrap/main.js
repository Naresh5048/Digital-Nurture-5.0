console.log('========================================');
console.log('Community Event Portal - Module 1 Training');
console.log('========================================');

window.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Loaded');
    initializePortal();
});

const eventsData = [
    {
        id: 1,
        name: 'Python Workshop',
        date: '2026-06-15',
        time: '10:00 AM',
        location: 'Community Center',
        category: 'workshop',
        price: 15,
        seats: 30,
        description: 'Learn Python basics in 2 hours'
    },
    {
        id: 2,
        name: 'Digital Marketing Seminar',
        date: '2026-06-20',
        time: '2:00 PM',
        location: 'City Hall',
        category: 'seminar',
        price: 25,
        seats: 50,
        description: 'Social media and content strategy'
    },
    {
        id: 3,
        name: 'Community Sports Day',
        date: '2026-06-22',
        time: '8:00 AM',
        location: 'Central Park',
        category: 'sports',
        price: 10,
        seats: 100,
        description: 'Soccer, basketball, and running race'
    },
    {
        id: 4,
        name: 'Cultural Festival',
        date: '2026-07-01',
        time: '5:00 PM',
        location: 'Town Square',
        category: 'cultural',
        price: 0,
        seats: 200,
        description: 'Music, food, and art exhibition'
    },
    {
        id: 5,
        name: 'Business Networking',
        date: '2026-07-05',
        time: '6:00 PM',
        location: 'Grand Hotel',
        category: 'networking',
        price: 20,
        seats: 75,
        description: 'Meet entrepreneurs and investors'
    }
];
const eventsData = [
    {
        id: 1,
        name: 'Python Workshop',
        date: '2026-06-15',
        time: '10:00 AM',
        location: 'Community Center',
        category: 'workshop',
        price: 15,
        seats: 30,
        description: 'Learn Python basics in 2 hours'
    },
    {
        id: 2,
        name: 'Digital Marketing Seminar',
        date: '2026-06-20',
        time: '2:00 PM',
        location: 'City Hall',
        category: 'seminar',
        price: 25,
        seats: 50,
        description: 'Social media and content strategy'
    },
    {
        id: 3,
        name: 'Community Sports Day',
        date: '2026-06-22',
        time: '8:00 AM',
        location: 'Central Park',
        category: 'sports',
        price: 10,
        seats: 100,
        description: 'Soccer, basketball, and running race'
    },
    {
        id: 4,
        name: 'Cultural Festival',
        date: '2026-07-01',
        time: '5:00 PM',
        location: 'Town Square',
        category: 'cultural',
        price: 0,
        seats: 200,
        description: 'Music, food, and art exhibition'
    },
    {
        id: 5,
        name: 'Business Networking',
        date: '2026-07-05',
        time: '6:00 PM',
        location: 'Grand Hotel',
        category: 'networking',
        price: 20,
        seats: 75,
        description: 'Meet entrepreneurs and investors'
    }
];

// Global state for registrations (EXERCISE 3: Managing state)
let registrations = [];

// ========================================
// EXERCISE 3: CONDITIONALS & LOOPS
// ========================================
// Core Logic for Interview:
// - if/else for conditional logic
// - for loop: iterate fixed number of times
// - forEach: iterate array elements
// - filter: get array subset matching condition
// - map: transform array elements
// - find: get first matching element
// - some: check if ANY element matches
// - every: check if ALL elements match

/**
 * Initialize Portal - Load data and render UI
 * Called on page load
 */
function initializePortal() {
    if (!Array.isArray(eventsData) || eventsData.length === 0) return;
    renderEventsList();
    renderGallery();
    loadUserData();
}

/**
 * EXERCISE 6: Render events to page using DOM manipulation
 * Core Logic:
 * - innerHTML vs textContent (innerHTML allows HTML, textContent is plain)
 * - createElement: Create new DOM elements
 * - appendChild: Add element to parent
 * - querySelector: Select single element
 * - querySelectorAll: Select multiple elements
 */
function renderEventsList() {
    const eventsList = document.querySelector('#eventsList');
    if (!eventsList) return;
    eventsList.innerHTML = '';
    eventsData.forEach(event => eventsList.appendChild(createEventCard(event)));
}

/**
 * Create individual event card element
 * Returns: DOM element
 */
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4';
    const seatsStatus = event.seats > 0 ? `<span class="badge bg-success">${event.seats} Seats</span>` : '<span class="badge bg-danger">Sold Out</span>';
    const priceText = event.price === 0 ? 'FREE' : `$${event.price}`;
    card.innerHTML = `
        <div class="card event-card h-100">
            <div class="card-header">
                <h5 class="card-title">${event.name}</h5>
                <small class="text-muted">${event.category.toUpperCase()}</small>
            </div>
            <div class="card-body">
                <p class="card-text">${event.description}</p>
                <ul class="list-unstyled small">
                    <li><i class="fas fa-calendar"></i> ${event.date}</li>
                    <li><i class="fas fa-clock"></i> ${event.time}</li>
                    <li><i class="fas fa-map-pin"></i> ${event.location}</li>
                    <li><strong class="event-price">${priceText}</strong></li>
                </ul>
            </div>
            <div class="card-footer bg-light">
                ${seatsStatus}
                <button class="btn btn-sm btn-primary w-100 mt-2" onclick="handleEventRegistration(${event.id})" ${event.seats === 0 ? 'disabled' : ''}>Register</button>
            </div>
        </div>
    `;
    return card;
}

/**
 * EXERCISE 4: Event handler for registration button
 * Core Logic:
 * - onclick handler
 * - querySelector for accessing form elements
 * - Validation of input fields
 * - Event creation (CRUD Create)
 */
function handleEventRegistration(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;
    if (event.seats <= 0) { alert('This event is sold out!'); return; }
    const form = document.getElementById('registrationForm');
    document.getElementById('eventType').value = event.category;
    displayEventFee(document.getElementById('eventType'));
    form.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('name').focus();
}

/**
 * Render gallery table with image placeholders
 * EXERCISE 7: Table manipulation with forEach
 */
function renderGallery() {
    const galleryTable = document.getElementById('galleryTable');
    if (!galleryTable) return;
    galleryTable.innerHTML = '';
    for (let i = 0; i < eventsData.length; i += 3) {
        const row = document.createElement('tr');
        const rowEvents = eventsData.slice(i, i + 3);
        rowEvents.forEach(event => {
            const cell = document.createElement('td');
            cell.className = 'text-center';
            cell.style.verticalAlign = 'middle';
            cell.innerHTML = `
                <img src="https://via.placeholder.com/200x150?text=${encodeURIComponent(event.name)}" alt="${event.name}" title="${event.name} - ${event.date}" class="gallery-image" style="width: 100%; max-width: 200px; height: auto; border-radius: 8px;">
                <p class="mt-2 mb-0"><strong>${event.name}</strong></p>
                <small class="text-muted">${event.date}</small>
            `;
            row.appendChild(cell);
        });
        galleryTable.appendChild(row);
    }
}

// ========================================
// EXERCISE 5 & 9: FORM HANDLING & VALIDATION
// ========================================
// Core Logic for Interview:
// - form.elements: Access form fields programmatically
// - event.preventDefault(): Stop default form submission
// - Input validation patterns
// - Regular expressions for validation
// - Error messages for user feedback

/**
 * Handle form submission - EXERCISE 11 from assignments
 * Validates all inputs before processing
 */
function handleFormSubmitAdvanced(event) {
    event.preventDefault();
    const form = document.getElementById('registrationForm');
    const formData = new FormData(form);
    const registration = {
        id: Date.now(),
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        eventType: formData.get('eventType'),
        date: formData.get('eventDate'),
        attendees: parseInt(formData.get('attendees')),
        message: formData.get('message'),
        registeredAt: new Date().toLocaleString()
    };
    if (!validateRegistration(registration)) return;
    registrations.push(registration);
    submitRegistrationToServer(registration);
    saveRegistrationLocally(registration);
    form.reset();
}

/**
 * Validate registration data
 * Returns: boolean
 */
function validateRegistration(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) { alert('Please enter a valid email address'); return false; }
    if (data.name.trim().length < 3) { alert('Name must be at least 3 characters'); return false; }
    if (data.attendees < 1 || data.attendees > 5) { alert('Attendees must be between 1 and 5'); return false; }
    return true;
}

/**
 * EXERCISE 9: Simulate async API call
 * Core Logic:
 * - Simulate server delay with setTimeout
 * - Promise-based approach
 * - Error handling
 */
async function submitRegistrationToServer(registration) {
    try {
        const button = document.querySelector('button[type="submit"]');
        const originalText = button ? button.textContent : '';
        if (button) { button.disabled = true; button.textContent = 'Processing...'; }
        await new Promise(resolve => setTimeout(resolve, 1500));
        showSuccessMessage(registration);
    } catch (error) {
        alert('Failed to submit registration. Please try again.');
    } finally {
        const button = document.querySelector('button[type="submit"]');
        if (button) { button.disabled = false; button.textContent = originalText; }
    }
}

/**
 * Show success confirmation message
 */
function showSuccessMessage(registration) {
    const confirmDiv = document.getElementById('confirmationMessage');
    const confirmText = document.getElementById('confirmationText');
    confirmText.innerHTML = `
        <strong>${registration.name}</strong>, your registration is confirmed!<br>
        Confirmation email sent to <strong>${registration.email}</strong><br>
        Event: <strong>${registration.eventType.toUpperCase()}</strong> on <strong>${registration.date}</strong><br>
        Attendees: <strong>${registration.attendees}</strong>
    `;
    confirmDiv.classList.remove('d-none');
    setTimeout(() => confirmDiv.classList.add('d-none'), 5000);
}

// ========================================
// EXERCISE 8: STORAGE APIs (localStorage & sessionStorage)
// ========================================
// Core Logic:
// - localStorage.setItem(key, value): Persistent storage
// - localStorage.getItem(key): Retrieve value
// - localStorage.removeItem(key): Delete specific item
// - localStorage.clear(): Delete all items
// - sessionStorage: Temporary (cleared on tab close)

/**
 * Save single registration to localStorage
 */
function saveRegistrationLocally(registration) {
    try {
        const existing = localStorage.getItem('registrations');
        const allRegistrations = existing ? JSON.parse(existing) : [];
        allRegistrations.push(registration);
        localStorage.setItem('registrations', JSON.stringify(allRegistrations));
    } catch (error) {}
}

/**
 * Load user data (preferences and registrations)
 * Called on page initialization
 */
function loadUserData() {
    try {
        const savedPreference = localStorage.getItem('preferredEventType');
        if (savedPreference) document.getElementById('preferredType').value = savedPreference;
        const storedRegistrations = localStorage.getItem('registrations');
        if (storedRegistrations) registrations = JSON.parse(storedRegistrations);
    } catch (error) {}
}

/**
 * Clear all user data - EXERCISE from assignments
 */
function clearUserData() {
    localStorage.clear();
    sessionStorage.clear();
    registrations = [];
}

// ========================================
// EXERCISE 6 & 10: ARRAY METHODS (map, filter, reduce)
// ========================================
// Core Logic:
// - map(): Transform array, returns new array
// - filter(): Select items matching condition, returns new array
// - reduce(): Accumulate values, returns single value
// - find(): Get first match, returns element
// - forEach(): Execute for each, no return

/**
 * Filter events by category - EXERCISE 1 from JS assignments
 * Returns: Array of filtered events
 */
function filterEventsByCategory(category) {
    if (category === '' || category === 'all') return eventsData;
    return eventsData.filter(event => event.category === category);
}

/**
 * Calculate total registrations by category
 * EXERCISE: Using reduce() to accumulate
 */
function getRegistrationStats() {
    const categories = registrations.map(r => r.eventType);
    return categories.reduce((acc, category) => { acc[category] = (acc[category] || 0) + 1; return acc; }, {});
}

/**
 * Get available events (EXERCISE: using some() and every())
 */
function getAvailableEvents() { return eventsData.filter(event => event.seats > 0); }

/**
 * Get fully booked events
 */
function getFullyBookedEvents() { return eventsData.filter(event => event.seats === 0); }

// ========================================
// EXERCISE 2 & 4: HIGHER-ORDER FUNCTIONS & CALLBACKS
// ========================================
// Core Logic:
// - Functions that accept other functions as parameters
// - Callbacks: Functions called after async operation
// - Arrow functions: Concise syntax
// - Default parameters

/**
 * Higher-order function: Search and process events
 * @param {function} searchFn - Callback function to test events
 * @param {function} processFn - Callback function to process results
 */
function searchEvents(searchFn, processFn = console.log) { const results = eventsData.filter(searchFn); processFn(results); return results; }

/**
 * Example usage of callbacks (EXERCISE 4)
 */
const searchByPrice = (maxPrice) => searchEvents(event => event.price <= maxPrice, results => console.log(`Found ${results.length} events under $${maxPrice}`));

// ========================================
// EXERCISE 3: CLOSURES & SCOPE
// ========================================
// Core Logic:
// - Closures: Inner function accessing outer function variables
// - Scope: Where variable is accessible
// - Block scope: let/const only in block they're defined

/**
 * Create counter function using closure
 * Each returned function maintains its own count
 */
function createCounter() { let count = 0; return { increment: () => ++count, decrement: () => --count, get: () => count }; }

/**
 * Track event registrations with closure
 */
function createEventTracker() { let registrationCount = 0; const categoryStats = {}; return { register: (category) => { registrationCount++; categoryStats[category] = (categoryStats[category] || 0) + 1; return registrationCount; }, getTotal: () => registrationCount, getStats: () => ({ ...categoryStats }) }; }
const eventTracker = createEventTracker();

// ========================================
// EXERCISE 6 & 7: DOM MANIPULATION
// ========================================
// Core Logic:
// - querySelector: Select by CSS selector
// - innerHTML: Set HTML content
// - textContent: Set plain text
// - classList: Manage CSS classes
// - addEventListener: Attach event listeners

/**
 * Update UI based on search filter
 * Demonstrates DOM manipulation
 */
function updateEventDisplay(filteredEvents) { const container = document.getElementById('eventsList'); container.innerHTML = ''; if (filteredEvents.length === 0) { container.innerHTML = `<div class="col-12"><div class="alert alert-info text-center">No events found. Try another category!</div></div>`; return; } filteredEvents.forEach(event => container.appendChild(createEventCard(event))); }

// ========================================
// EXERCISE 9: PROMISE & FETCH API
// ========================================
// Core Logic:
// - Fetch returns Promise
// - .then(): Handle success
// - .catch(): Handle errors
// - await: Wait for promise resolution
// - async: Function contains async code

/**
 * Fetch events from API (simulated)
 * Can be replaced with real API endpoint
 */
async function fetchEventsFromAPI(endpoint = '/api/events') { return new Promise((resolve) => setTimeout(() => resolve(eventsData), 500)); }

/**
 * POST registration to server (simulated)
 */
async function postRegistration(registration) { return new Promise(resolve => setTimeout(() => resolve({ status: 'success', message: 'Registration received', data: registration }), 1000)); }

// ========================================
// EXERCISE 8: MODERN JS FEATURES
// ========================================
// Core Logic:
// - Destructuring: Extract values from array/object
// - Spread operator: Copy/expand arrays
// - Default parameters: Set default values
// - Template literals: Embed variables in strings

/**
 * Destructuring example
 */
function displayEventDetails(event) { const { name, date, price, category } = event; console.log(`Event: ${name}, Date: ${date}, Price: $${price}, Category: ${category}`); }

/**
 * Spread operator example
 */
function copyAndModifyEvents() { const eventsCopy = [...eventsData]; eventsCopy[0].price = 0; return eventsCopy; }

/**
 * Default parameters example
 */
function calculateDiscount(price, discountPercent = 10) { return price * (1 - discountPercent / 100); }

// ========================================
// EXERCISE 12: ERROR HANDLING
// ========================================
// Core Logic:
// - try..catch: Catch exceptions
// - throw: Manually throw error
// - finally: Runs regardless of try/catch result

/**
 * Safe event retrieval with error handling
 */
function getEventSafely(eventId) { const event = eventsData.find(e => e.id === eventId); return event || null; }

// ========================================
// EXERCISE 13: DEBUGGING & LOGGING
// ========================================
// Core Logic:
// - console.log(): General output
// - console.error(): Error messages
// - console.warn(): Warning messages
// - console.table(): Formatted table output
// - Breakpoints: Pause execution in DevTools

/**
 * Debug helper function
 */
function debugEvent(event) { console.group(`Event: ${event.name}`); console.log('Details:', event); console.table([event]); console.groupEnd(); }

/**
 * Performance monitoring
 */
function measurePerformance(label, callback) { console.time(label); const result = callback(); console.timeEnd(label); return result; }

// ========================================
// EXERCISE 14: OBJECTS & PROTOTYPES
// ========================================
// Core Logic:
// - Object literals: {key: value}
// - Prototypes: Share methods between instances
// - Constructor functions: Create instances
// - Classes: Modern OOP syntax

/**
 * Event constructor function (EXERCISE 5 from assignments)
 */
function Event(name, date, category, price) { this.name = name; this.date = date; this.category = category; this.price = price; }
Event.prototype.checkAvailability = function() { return this.price > 0; };
Event.prototype.getDetails = function() { return { keys: Object.keys(this), values: Object.values(this), entries: Object.entries(this) }; };

// ========================================
// INITIALIZATION & EVENT LISTENERS
// ========================================

document.addEventListener('DOMContentLoaded', function() { const form = document.getElementById('registrationForm'); if (form) form.addEventListener('submit', handleFormSubmitAdvanced); const filterSelect = document.getElementById('eventType'); if (filterSelect) filterSelect.addEventListener('change', e => console.log('Selected event type:', e.target.value)); });

// ========================================
// EXPORTS FOR TESTING (if using modules)
// ========================================

// Making functions available globally for inline onclick handlers
// window.filterEventsByCategory = filterEventsByCategory;
// window.searchByPrice = searchByPrice;
// window.getRegistrationStats = getRegistrationStats;

console.log('main.js loaded');
