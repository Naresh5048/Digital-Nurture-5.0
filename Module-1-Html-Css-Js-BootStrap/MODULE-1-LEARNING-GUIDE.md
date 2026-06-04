# Local Community Event Portal - Module 1 Training Guide
## Beginner Preparation for Cognizant FSE Technical Assessment

---

## Table of Contents
1. [Overview](#overview)
2. [HTML5 Deep Dive](#html5-deep-dive)
3. [CSS3 Deep Dive](#css3-deep-dive)
4. [JavaScript Deep Dive](#javascript-deep-dive)
5. [Bootstrap 5 Deep Dive](#bootstrap-5-deep-dive)
6. [Interview Preparation Tips](#interview-preparation-tips)
7. [Quick Reference](#quick-reference)
8. [Next Steps (Module 2 & 3)](#next-steps)

---

## Overview

### What You're Building
A **Local Community Event Portal** - a web application that allows residents to:
- Browse upcoming community events
- Filter events by category
- Register for events with their details
- View event galleries
- Submit feedback
- Save preferences

### Technologies Covered
- **HTML5**: Semantic markup, forms, media elements, APIs
- **CSS3**: Layout (Flexbox, Grid), responsive design, animations
- **JavaScript**: DOM manipulation, async/await, array methods, events
- **Bootstrap 5**: Pre-built components, responsive grid, utilities

### File Structure
```
Local-Community-Event-portal/
├── index.html           # Main portal page (HTML5)
├── help.html            # Help/Documentation page
├── styles.css           # All styling (CSS3)
├── main.js              # All JavaScript logic
├── mock-events.json     # Sample event data
└── MODULE-1-LEARNING-GUIDE.md  # This guide
```

---

## HTML5 Deep Dive

### Core Concepts for Interview

#### 1. **HTML5 Semantic Structure** (Exercise 1)

**What HTML5 Added:**
- Semantic tags that describe content meaning
- Better accessibility for screen readers
- Improved SEO
- Structure: `<!DOCTYPE html>` + semantic tags

**Key Semantic Tags:**
```html
<header>     <!-- Site header, logo, main navigation -->
<nav>        <!-- Navigation links -->
<main>       <!-- Main content -->
<article>    <!-- Blog post, news, standalone content -->
<section>    <!-- Thematic grouping -->
<aside>      <!-- Sidebar, related info -->
<footer>     <!-- Site footer, copyright -->
```

**Interview Answer:**
> "HTML5 introduced semantic tags that give meaning to content. Instead of generic `<div>`, we use `<section>`, `<article>`, `<nav>`. This improves accessibility - screen readers understand the structure better. It also helps SEO - search engines understand page hierarchy."

#### 2. **Navigation & Linking** (Exercise 2)

**Concepts:**
- `<nav>` for primary navigation
- Anchor links with `#` for page navigation
- `target="_blank"` for opening new tabs

```html
<!-- Main navigation -->
<nav>
  <a href="#home">Home</a>
  <a href="#events">Events</a>
  <a href="help.html" target="_blank">Help</a>
</nav>

<!-- Target sections -->
<section id="home">...</section>
<section id="events">...</section>
```

**Interview Answer:**
> "Navigation should use `<nav>` tag. Anchor links (#sectionId) let users jump to page sections without full reload. Using target='_blank' opens links in new tabs. Always include meaningful link text, not 'click here'."

#### 3. **ID vs Class** (Exercise 3)

| Aspect | ID (#) | Class (.) |
|--------|--------|----------|
| **Uniqueness** | Must be unique per page | Can be reused many times |
| **CSS Specificity** | 100 | 10 |
| **Usage** | Unique elements like #header | Styling multiple elements |
| **JavaScript** | `getElementById()` | `querySelector()`, `querySelectorAll()` |
| **Example** | `#welcomeBanner` | `.event-card`, `.button` |

```html
<!-- ID: Unique element -->
<div id="welcomeBanner">Welcome!</div>

<!-- Class: Reusable styling -->
<div class="event-card">Event 1</div>
<div class="event-card">Event 2</div>
<div class="event-card">Event 3</div>
```

**Interview Answer:**
> "ID is for unique, singular elements. Class is for styling multiple similar elements. IDs have higher CSS specificity (100 vs 10). I use classes for reusable components, IDs for unique landmarks like main banner or modal."

#### 4. **Forms & Input Types** (Exercise 5)

**HTML5 Input Types:**
```html
<input type="text">         <!-- Plain text -->
<input type="email">        <!-- Email validation built-in -->
<input type="tel">          <!-- Phone number -->
<input type="date">         <!-- Date picker -->
<input type="number">       <!-- Numbers only -->
<input type="password">     <!-- Masked text -->
<input type="checkbox">     <!-- Multiple selections -->
<input type="radio">        <!-- Single selection -->
<select><option></select>   <!-- Dropdown -->
<textarea></textarea>       <!-- Multi-line text -->
```

**Form Attributes:**
```html
<input required autofocus placeholder="Enter name"
       pattern="[A-Za-z ]+" title="Letters and spaces only"
       disabled readonly>

<label for="email">Email:</label>
<input id="email" type="email">
```

**Interview Answer:**
> "HTML5 input types provide built-in validation. type='email' validates email format clientside. Attributes like 'required', 'pattern', 'autofocus' improve UX. Always link labels to inputs with 'for' attribute - improves accessibility."

#### 5. **Data Attributes** (Exercise 5)

```html
<!-- Store custom data on elements -->
<div data-event-id="123" data-category="workshop">
  Event Card
</div>

<!-- Access in JavaScript -->
<script>
  const div = document.querySelector('div');
  console.log(div.dataset.eventId);     // "123"
  console.log(div.dataset.category);    // "workshop"
</script>
```

#### 6. **Multimedia** (Exercise 7)

```html
<!-- Video -->
<video width="400" height="300" controls>
  <source src="event.mp4" type="video/mp4">
  <source src="event.webm" type="video/webm">
  Your browser doesn't support HTML5 video.
</video>

<!-- Audio -->
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  Your browser doesn't support audio.
</audio>

<!-- Events -->
<script>
  video.addEventListener('canplay', () => {
    console.log('Video ready!');
  });
</script>
```

#### 7. **Browser APIs** (Exercise 8-10)

**localStorage** - Persistent client-side storage:
```javascript
localStorage.setItem('preference', 'workshop');
const pref = localStorage.getItem('preference');
localStorage.clear();
```

**Geolocation API:**
```javascript
navigator.geolocation.getCurrentPosition(
  position => console.log(position.coords),
  error => console.error(error),
  { enableHighAccuracy: true }
);
```

**Page Unload Warning:**
```javascript
window.addEventListener('beforeunload', e => {
  if (formHasData) {
    e.returnValue = '';
  }
});
```

---

## CSS3 Deep Dive

### Core Concepts for Interview

#### 1. **CSS Inclusion Methods**

| Method | Scope | Reusability | Performance | Use Case |
|--------|-------|-------------|-------------|----------|
| **Inline** | Single element | No | Worst | Quick fixes only (NOT recommended) |
| **Internal** | Single page | Within page only | Bad | One-off page styling |
| **External** | All pages | All pages | Best | Production (RECOMMENDED) |

**Best Practice:**
```html
<link rel="stylesheet" href="styles.css">
```

**Interview Answer:**
> "External CSS is best practice. Single stylesheet for all pages = DRY principle, easier maintenance, browser caches one file, better performance. Inline and internal styles are considered antipatterns in production."

#### 2. **CSS Specificity Hierarchy**

```
!important          → 10000 (Avoid using!)
ID (#)              → 100
Class (.), :pseudo  → 10
Element, ::pseudo   → 1
Inherited           → 0
```

**Example:**
```css
p { color: black; }           /* Specificity: 1 */
.highlight { color: blue; }   /* Specificity: 10 (wins) */
#main p { color: red; }       /* Specificity: 101 (wins all) */
```

**Interview Answer:**
> "Specificity determines which CSS rule applies. ID is highest (100), then class (10), then element (1). More specific rules override less specific. I avoid !important because it breaks cascade. If styles aren't applying, check selector specificity."

#### 3. **Selectors** (Exercise 3)

```css
/* Universal - all elements */
* { box-sizing: border-box; }

/* Element - all <h2> tags */
h2 { color: navy; }

/* Class - elements with class */
.button { padding: 10px; }

/* ID - unique element */
#header { position: fixed; }

/* Grouping - multiple selectors */
h1, h2, h3 { font-weight: bold; }

/* Descendant - elements inside another */
div p { color: gray; }

/* Child - direct children only */
ul > li { list-style: none; }

/* Attribute - elements with specific attributes */
input[type="email"] { border: 2px solid blue; }

/* Pseudo-class - element state */
a:hover { text-decoration: underline; }
li:nth-child(even) { background: #f0f0f0; }
input:focus { outline: 2px solid gold; }
```

#### 4. **Box Model** (Exercise 8)

```
┌─────────────────────────────────────┐
│         Margin (transparent)        │
│  ┌───────────────────────────────┐  │
│  │   Border (colored line)       │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │   Padding (inside)      │  │  │
│  │  │  ┌─────────────────┐    │  │  │
│  │  │  │   Content       │    │  │  │
│  │  │  │  (Text/Image)   │    │  │  │
│  │  │  └─────────────────┘    │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

**CSS Properties:**
```css
.element {
  width: 300px;              /* Content width */
  padding: 15px;             /* Inside spacing (adds to width) */
  border: 2px solid #333;    /* Border */
  margin: 20px;              /* Outside spacing */
  
  /* Make padding/border part of width */
  box-sizing: border-box;    /* RECOMMENDED */
}
```

**Interview Answer:**
> "Box model: content + padding + border + margin. Without box-sizing: border-box, padding and border increase total width (causes layout issues). With box-sizing: border-box (ALWAYS use this), width includes everything except margin. This prevents layout bugs."

#### 5. **Layout: Flexbox vs Grid**

**Flexbox (1D - Row OR Column):**
```css
.container {
  display: flex;
  flex-direction: row;        /* or column */
  justify-content: space-between;  /* Spacing horizontally */
  align-items: center;        /* Align vertically */
  gap: 1rem;                  /* Space between items */
}

.item {
  flex: 1;                    /* Equal width */
  flex-basis: 200px;          /* Base width */
}
```

**CSS Grid (2D - Rows AND Columns):**
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;  /* 3 columns */
  grid-template-rows: 100px auto;       /* 2 rows */
  gap: 1rem;
}

.item {
  grid-column: 1 / 3;         /* Span columns 1-3 */
  grid-row: 2;                /* Row 2 */
}
```

**Interview Answer:**
> "Use Flexbox for 1D layouts (navigation, buttons in row). Use Grid for complex 2D layouts (full page layout). Flexbox is simpler, Grid is more powerful. I often use Flexbox + Grid together - Grid for page layout, Flexbox for components."

#### 6. **Responsive Design with Media Queries** (Exercise 19)

**Mobile-First Approach:**
```css
/* Base: Mobile styles */
.container { width: 100%; padding: 10px; }
.grid { column: 1; } /* 1 column on mobile */

/* Tablet (≥768px) */
@media (min-width: 768px) {
  .container { width: 750px; }
  .grid { column: 2; } /* 2 columns */
}

/* Desktop (≥992px) */
@media (min-width: 992px) {
  .container { width: 960px; }
  .grid { column: 3; } /* 3 columns */
}
```

**Common Breakpoints:**
- **576px**: Small devices
- **768px**: Tablets
- **992px**: Desktops  
- **1200px**: Large desktops

**Interview Answer:**
> "Mobile-first means starting with mobile styles, then adding @media queries for larger screens. This improves performance - simpler CSS loads first. Breakpoints: 576px (small), 768px (tablet), 992px (desktop). I prefer min-width over max-width for cascading styles."

#### 7. **Animations & Transitions**

**Transitions** - Smooth property change:
```css
button {
  background-color: blue;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: darkblue;  /* Smooth animation */
}
```

**Keyframe Animations:**
```css
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slideIn 0.5s ease-out forwards;
}
```

---

## JavaScript Deep Dive

### Core Concepts for Interview

#### 1. **Variables & Data Types** (Exercise 2)

**Variable Declaration:**
```javascript
const name = "John";       // Constant - DON'T CHANGE
let age = 25;              // Block-scoped - CAN CHANGE
var old = "Don't use";     // Function-scoped - AVOID
```

**Data Types:**
```javascript
// Primitives (immutable)
const string = "text";
const number = 42;
const bool = true;
const nothing = null;      // Intentional absence
let undefined_var;         // Not assigned yet

// Objects (mutable)
const array = [1, 2, 3];
const obj = { name: "John", age: 25 };
```

**Interview Answer:**
> "Use const by default for immutability. Use let for variables that change. Avoid var - it's function-scoped (confusing). JavaScript has dynamic typing - type changes at runtime. Type coercion can cause bugs, so use === instead of == for comparison."

#### 2. **Array Methods** (Exercise 6)

**Mutating Methods** (change original):
```javascript
const arr = [1, 2, 3];
arr.push(4);           // Add to end → [1,2,3,4]
arr.pop();             // Remove from end → [1,2,3]
arr.splice(1, 1);      // Remove at index → [1,3]
arr.sort();            // Sort in place
```

**Non-Mutating Methods** (return new array):
```javascript
const events = [];
// forEach - execute for each (no return)
events.forEach(e => console.log(e.name));

// map - TRANSFORM to new array
const names = events.map(e => e.name);

// filter - SELECT matching items  
const expensive = events.filter(e => e.price > 20);

// find - GET FIRST match
const workshop = events.find(e => e.category === 'workshop');

// some - CHECK if ANY matches
const hasExpensive = events.some(e => e.price > 50);

// every - CHECK if ALL match
const allAffordable = events.every(e => e.price < 100);

// reduce - ACCUMULATE to single value
const totalPrice = events.reduce((sum, e) => sum + e.price, 0);

// sort - SORT (returns new arr if using arrow function)
const sorted = [...events].sort((a, b) => a.price - b.price);
```

**Interview Answer:**
> "map() TRANSFORMS data - returns new array. filter() SELECTS - returns new subset. reduce() ACCUMULATES - returns single value (like sum). forEach() just EXECUTES - no return. forEach can't chain, others can. I never mutate original arrays in UI code - creates hard-to-debug bugs."

#### 3. **Functions & Arrow Functions** (Exercise 4)

**Traditional Function:**
```javascript
function addNumbers(a, b) {
  return a + b;
}

// Invoke
addNumbers(5, 3);  // 8
```

**Arrow Function** (modern, shorter):
```javascript
const add = (a, b) => a + b;           // Implicit return
const greet = name => `Hello, ${name}`; // Single param, no parens
const noop = () => console.log('Done'); // No params
```

**Function with Callbacks:**
```javascript
function filter(array, callback) {
  return array.filter(callback);
}

// Using callback
filter([1,2,3,4], x => x > 2);  // [3, 4]
```

**Interview Answer:**
> "Arrow functions are concise and perfect for callbacks. Traditional functions needed for constructors and when 'this' context matters. Implicit return: if one expression, can omit braces. Callbacks accept functions as parameters - fundamental for JavaScript."

#### 4. **DOM Manipulation** (Exercise 6, 7)

**Select Elements:**
```javascript
// Single element
const element = document.getElementById('id');
const element = document.querySelector('.class');

// Multiple elements
const elements = document.querySelectorAll('.class');
```

**Modify Content:**
```javascript
element.textContent = 'Plain text';          // No HTML
element.innerHTML = '<b>HTML allowed</b>';   // With HTML

// Attributes
element.setAttribute('id', 'newId');
element.getAttribute('id');
element.removeAttribute('id');

// Data attributes
element.dataset.eventId = '123';  // Sets data-event-id
```

**Modify Classes:**
```javascript
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('selected');
```

**Create Elements:**
```javascript
const newDiv = document.createElement('div');
newDiv.textContent = 'New element';
parentElement.appendChild(newDiv);
parentElement.removeChild(newDiv);
```

**Interview Answer:**
> "querySelector is most flexible - use CSS selectors. textContent is safer than innerHTML. classList methods are cleaner than className manipulation. Always attach listeners after elements exist in DOM. createElement + appendChild for dynamic content is more efficient than innerHTML for multiple items."

#### 5. **Event Handling** (Exercise 6)

**Event Handlers:**
```html
<button onclick="handleClick()">Click</button>
```

**Event Listeners** (Better):
```javascript
button.addEventListener('click', (event) => {
  event.preventDefault();   // Stop default behavior
  event.stopPropagation();  // Stop bubbling
  console.log(event.target); // Element clicked
});
```

**Common Events:**
```javascript
// Mouse
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mouseover', handler);

// Keyboard
element.addEventListener('keydown', event => {
  if (event.key === 'Enter') handleSubmit();
});

// Form
element.addEventListener('change', handler);
element.addEventListener('blur', handler);  // Lost focus

// Window
window.addEventListener('load', handler);
window.addEventListener('beforeunload', handler);
```

**Interview Answer:**
> "addEventListener is better than onclick - can attach multiple listeners, cleaner code. event.preventDefault() stops default behavior (form submission). event.target is the clicked element. Event delegation: attach listener to parent, check event.target to know which child triggered it."

#### 6. **Async/Await & Promises** (Exercise 9)

**Promises (callback hell):**
```javascript
fetch('/api/events')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**async/await (cleaner):**
```javascript
async function getEvents() {
  try {
    const response = await fetch('/api/events');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getEvents();
```

**Interview Answer:**
> "async/await is syntactic sugar over Promises - cleaner to read. await pauses execution until Promise resolves. Error handling with try/catch is familiar (like sync code). Always check response.ok (status 200-299) and handle network errors. Parallel requests: Promise.all([fetch1, fetch2])."

#### 7. **localStorage** (Exercise 8)

**Save Data:**
```javascript
localStorage.setItem('preference', 'workshop');
```

**Retrieve Data:**
```javascript
const pref = localStorage.getItem('preference');
```

**Complex Objects:**
```javascript
const user = { name: 'John', age: 25 };
localStorage.setItem('user', JSON.stringify(user));

const loaded = JSON.parse(localStorage.getItem('user'));
```

**Interview Answer:**
> "localStorage persists across browser restarts. sessionStorage clears on tab close. Store only strings - use JSON.stringify for objects. Limit to ~5MB per domain. localStorage is synchronous (blocks), but fast enough for web apps. Never store sensitive data (passwords)."

#### 8. **Error Handling** (Exercise 12)

```javascript
try {
  riskyOperation();
} catch (error) {
  console.error('Error occurred:', error.message);
} finally {
  cleanup();  // Runs regardless
}

// Throw custom error
throw new Error('Custom error message');
```

---

## Bootstrap 5 Deep Dive

### Core Concepts for Interview

#### 1. **Grid System** (Exercise 3-5)

**Responsive Breakpoints:**
```
< 576px      : Extra small (no prefix)
≥ 576px      : Small (sm)
≥ 768px      : Medium (md)
≥ 992px      : Large (lg)
≥ 1200px     : Extra Large (xl)
≥ 1400px     : XXL (xxl)
```

**12-Column System:**
```html
<!-- Full width on mobile, 2 cols on tablet, 3 on desktop -->
<div class="row">
  <div class="col-md-6 col-lg-4">Card 1</div>
  <div class="col-md-6 col-lg-4">Card 2</div>
  <div class="col-md-6 col-lg-4">Card 3</div>
</div>

<!-- Sidebar layout: 3 cols sidebar, 9 cols content -->
<div class="row">
  <div class="col-lg-3">Sidebar</div>
  <div class="col-lg-9">Main Content</div>
</div>
```

**Interview Answer:**
> "Bootstrap uses 12-column grid. col-md-6 = 50% width on medium screens and up. Mobile-first: base styles apply to all sizes, then modified for larger screens via breakpoints. No breakpoint specified = mobile. col-6 = 50% on all screens."

#### 2. **Utility Classes** (Exercise 12)

**Margin & Padding:**
```html
<!-- m = margin, p = padding, 0-5 = multiplier -->
<div class="m-3">                    <!-- margin: 1rem -->
<div class="mt-4">                   <!-- margin-top: 1.5rem -->
<div class="mx-auto">                <!-- margin-left/right: auto (center) -->
<div class="p-2 py-4">               <!-- padding: 0.5rem, py: 1.5rem -->
```

**Display:**
```html
<div class="d-none">                 <!-- display: none -->
<div class="d-md-flex">              <!-- display: flex on md+ -->
<div class="d-flex justify-content-center">  <!-- Flexbox centered -->
```

**Text:**
```html
<p class="text-center">              <!-- text-align: center -->
<p class="text-uppercase fw-bold">   <!-- font-weight: bold -->
<p class="text-muted">               <!-- Gray text -->
```

**Colors:**
```html
<div class="bg-primary">             <!-- Blue background -->
<div class="text-danger">            <!-- Red text -->
<div class="bg-danger text-white">   <!-- Colored background + white text -->
```

#### 3. **Components**

**Buttons:**
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-small btn-lg">Sizes</button>
```

**Cards:**
```html
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
  <div class="card-footer">Footer</div>
</div>
```

**Forms:**
```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" required>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

**Interview Answer:**
> "Bootstrap accelerates development with pre-styled components. Grid system handles responsive layout automatically. Utility classes (m-3, p-2, text-center) replace custom CSS for spacing and alignment. Bootstrap's JavaScript plugins (modal, dropdown) add interactivity without coding. Trade-off: less customization, heavier CSS file."

---

## Interview Preparation Tips

### Technical Questions You'll Face

#### Q1: "Explain the HTML5 Semantic Structure"
**Answer:**
> "HTML5 introduced semantic elements like `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>` that describe content meaning. Benefits: 1) Screen readers understand page structure better (accessibility), 2) Search engines can parse page hierarchy (SEO), 3) Code is self-documenting. For example, `<article>` contains standalone content while `<section>` segments topics."

#### Q2: "What's the difference between CSS specificity and CSS cascade?"
**Answer:**
> "Cascade means later rules override earlier ones. Specificity is how browsers rank rules when multiple apply. ID (100) beats class (10) which beats element (1). If two selectors have same specificity, the later one wins. I avoid !important because it breaks cascade. High specificity everywhere makes code hard to maintain."

#### Q3: "Explain async/await in JavaScript"
**Answer:**
> "Async functions return promises. Await pauses execution until promise resolves. It's cleaner than .then().catch(). Errors are caught with try/catch (like sync code). Parallel requests: Promise.all([ fetch1, fetch2 ]) waits for all. Sequential: const r1 = await fetch1; const r2 = await fetch2; Promise.allSettled() gets results even if some fail."

#### Q4: "Why use localStorage and when?"
**Answer:**
> "localStorage persists data after browser closes. Use for: preferences, saved drafts, user settings. Don't use for: sensitive data (passwords), large amounts (slows page load - ~5MB limit), real-time syncing. sessionStorage is alternative - clears on tab close. Always JSON.stringify() objects before storing."

#### Q5: "What's the Bootstrap grid system?"
**Answer:**
> "Bootstrap divides screens into 12 columns. col-md-6 = 50% width on medium screens+. Mobile-first: no breakpoint = mobile. Breakpoints: sm(576px), md(768px), lg(992px), xl(1200px). Flexbox under the hood for alignment. Responsive: col-md-6 col-lg-4 = 50% on tablet, 33% on desktop."

### Common Coding Questions

#### Q: "Build an event filter without page reload"
**Answer Strategy:**
1. Get form input value
2. Filter events array with .filter()
3. Render results with DOM manipulation
4. Add loading state while fetching (if API)

```javascript
function filterEvents(category) {
  const filtered = events.filter(e => 
    e.category === category || category === 'all'
  );
  renderEvents(filtered);
}
```

#### Q: "Validate email without external library"
**Answer:**
```javascript
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

#### Q: "Fetch data and display in HTML"
**Answer:**
```javascript
async function loadEvents() {
  try {
    const response = await fetch('/api/events');
    const events = await response.json();
    displayEvents(events);
  } catch(error) {
    console.error('Failed:', error);
  }
}
```

#### Q: "Create responsive navbar with Bootstrap"
**Answer:**
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" 
            data-bs-toggle="collapse" data-bs-target="#nav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Events</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### How to Present Code in Interview

**Strong Delivery:**
1. **Explain before coding**: "I'll use an arrow function with array filter method"
2. **Write clean code**: Proper indentation, meaningful names
3. **Explain as you write**: "This checks if price > 50"
4. **Test your logic**: "This would filter events under $50"
5. **Consider edge cases**: "Empty array returns []"
6. **Mention performance**: "Filter is O(n) but simple and readable"

**Weak Delivery:**
- ❌ Writing without explaining
- ❌ All code on one line
- ❌ Copying syntax you're unsure about
- ❌ Not testing examples

---

## Quick Reference

### Most Important Concepts

#### 1. **HTML5 - 3 Things Interviewers Love**
- ✓ Semantic tags (`<section>`, `<article>`, `<nav>`)
- ✓ Input type validation (`type="email"`, `required`)
- ✓ APIs (`localStorage`, `geolocation`, `fetch`)

#### 2. **CSS3 - 3 Things Interviewers Love**
- ✓ Mobile-first responsive design (`@media min-width`)
- ✓ Flexbox layout (`display: flex`, `justify-content`)
- ✓ CSS specificity understanding (ID > Class > Element)

#### 3. **JavaScript - 3 Things Interviewers Love**
- ✓ Array methods (`filter`, `map`, `reduce`)
- ✓ async/await with error handling
- ✓ DOM manipulation with event listeners

#### 4. **Bootstrap - 3 Things Interviewers Love**
- ✓ 12-column responsive grid
- ✓ Utility classes for quick styling
- ✓ Component consistency (cards, buttons, forms)

### Phrases to Use in Interview

- "I would use `const` by default for immutability"
- "This follows the mobile-first responsive approach"
- "I would add error handling with try/catch"
- "This selector has higher specificity, so it wins"
- "Array methods are cleaner than loops"
- "I'd attach an event listener to avoid coupling HTML and JS"
- "localStorage for persistence, sessionStorage for temporary"
- "Flexbox for 1D, Grid for 2D layouts"

### Red Flags to Avoid

- ❌ Using `var` instead of `let`/`const`
- ❌ Using `==` instead of `===`
- ❌ Inline styles (`<div style="...">`) in production
- ❌ Not using semantic HTML
- ❌ Accessing DOM before it loads
- ❌ Unhandled promise rejections
- ❌ Mixing presentation and logic (no separation of concerns)

---

## Next Steps

### After Mastering Module 1

#### Module 2: SQL & MySQL Database Basics
**What you'll learn:**
- SQL SELECT, INSERT, UPDATE, DELETE (CRUD)
- JOIN, GROUP BY, Aggregates
- Database design and normalization
- MySQL query optimization

**Application:**
- Backend API to store events in database
- User registrations in persistent storage
- Advanced filtering with SQL queries

#### Module 3: Core Java Programming
**What you'll learn:**
- OOP (Classes, inheritance, polymorphism)
- Collections (ArrayList, HashMap, Stream API)
- Exception handling
- Multithreading basics
- File I/O

**Application:**
- Build REST API with Spring Boot
- Serve event data from database
- User authentication layer

### Suggested Learning Path

```
Week 1-2: Master Module 1 (This course)
├─ HTML5: 3 exercises
├─ CSS3: 4 exercises  
├─ JavaScript: 6 exercises
└─ Bootstrap: 3 exercises

Week 3-4: Module 2 (SQL/MySQL)
├─ Database design
├─ CRUD operations
└─ Query optimization

Week 5-6: Module 3 (Java)
├─ OOP principles
├─ Collections
└─ Spring Boot basics

Week 7: Integration Project
└─ Full-stack: Portal with Java backend + MySQL
```

### Practice Tips

1. **Hands-on Coding**
   - Build projects, don't just watch tutorials
   - Make mistakes and debug them
   - Use DevTools profusely

2. **Read Others' Code**
   - Open Bootstrap source on GitHub
   - Check React component libraries
   - Understand industry-standard patterns

3. **Mock Interviews**
   - Record yourself explaining code
   - Do whiteboard coding (paper/Figma)
   - Time yourself (5-10 minutes max per question)

4. **Documentation**
   - Keep notes on concepts
   - Create personal cheat sheet
   - Explain concepts to friends

---

## Debugging Checklist

When code doesn't work:

**HTML Issues:**
- [ ] DOCTYPE declared?
- [ ] All tags closed properly?
- [ ] IDs/classes spelled correctly?
- [ ] External resources (CSS, JS) linked correctly?

**CSS Issues:**
- [ ] Selector specificity correct?
- [ ] Units included (`px`, `rem`, `%`)?
- [ ] Parent element width/height set?
- [ ] Responsive: tested on mobile?

**JavaScript Issues:**
- [ ] DOM elements exist when referenced?
- [ ] Syntax errors in console? (F12 -> Console tab)
- [ ] Variables defined before use?
- [ ] Async operations handled (try/catch)?
- [ ] Event listeners attached after DOM ready?

---

## Final Assessment

To master Module 1, you should be able to:

### Knowledge
- [ ] Explain why semantic HTML5 matters
- [ ] Describe CSS cascade and specificity
- [ ] Compare map/filter/reduce use cases
- [ ] Explain async/await vs callbacks
- [ ] Draw HTML box model from memory
- [ ] Diagram bootstrap responsive grid

### Practical Coding
- [ ] Build HTML form with validation
- [ ] Create responsive layout with only CSS
- [ ] Fetch data asynchronously and display
- [ ] Build reusable components with Bootstrap
- [ ] Debug issues using Chrome DevTools
- [ ] Optimize code for readability

### Interview Ready
- [ ] Answer 5 technical questions clearly
- [ ] Write working code under time pressure
- [ ] Explain code decisions to interviewer
- [ ] Ask clarifying questions before coding
- [ ] Mention edge cases and error handling

---

## Resources

**Official Documentation:**
- MDN Web Docs: https://developer.mozilla.org
- W3C HTML5: https://www.w3.org/TR/html5/
- CSS Tricks: https://css-tricks.com
- Bootstrap Docs: https://getbootstrap.com/docs

**Practice Sites:**
- LeetCode: JavaScript algorithms
- Codepen: See and modify others' code
- Exercism: Guided JavaScript exercises
- Frontend Mentor: Real design projects

**Developer Tools:**
- Chrome DevTools (F12)
- VS Code with extensions
- Figma for design mockups
- GitHub for version control

---

**Good luck with your Cognizant FSE assessment! You've got this! 🚀**
