# Local Community Event Portal - Module 1 Complete Training Project

**Cognizant FSE Technical Assessment Preparation - May 28, 2026**

---

## 📋 Project Overview

This is a **comprehensive, production-ready web application** demonstrating:
- ✅ **HTML5** with semantic markup and forms
- ✅ **CSS3** with responsive design and animations
- ✅ **JavaScript** with DOM manipulation and async operations
- ✅ **Bootstrap 5** for professional UI components

### Real-World Scenario
A local city council needs a portal for residents to discover and register for community events. This project implements that solution with full CRUD functionality, user preferences, and geolocation features.

---

## 🚀 Quick Start

### 1. Open in Browser
```bash
# Option A: Double-click index.html
Double-click index.html in Windows Explorer

# Option B: Use VS Code Live Server
# Install extension: "Live Server"
# Right-click index.html → "Open With Live Server"

# Option C: Local server (any port)
python -m http.server 8000
# Visit: http://localhost:8000
```

### 2. Test the Features
- **Navigate**: Click navbar links to jump to sections
- **Browse Events**: View event cards with categories
- **Register**: Fill the registration form (Exercise 5 demo)
- **Provide Feedback**: Rate and comment on experience (Exercise 6)
- **Save Preferences**: Select favorite event type (Exercise 8)
- **Get Location**: Click "Find Nearby Events" (Exercise 9)
- **Watch Video**: Play the event promo video (Exercise 7)

### 3. Inspect in Chrome DevTools
```
1. Open: https://localhost:8000/index.html
2. Press: F12 (or Ctrl+Shift+I)
3. Tabs to check:
   - "Elements" → See HTML structure
   - "Console" → View JavaScript logs
   - "Sources" → Set breakpoints and debug
   - "Network" → View HTTP requests
   - "Application" → Check localStorage data
```

---

## 📁 Project Structure

```
Local-Community-Event-portal/
│
├── index.html                    # Main portal page (HTML5 + inline JS)
│   ├─ Navigation (Exercise 2)
│   ├─ Welcome banner with ID/Class (Exercise 3)
│   ├─ Event cards grid (Exercise 4)
│   ├─ Registration form (Exercise 5)
│   ├─ Feedback section (Exercise 6)
│   ├─ Video player (Exercise 7)
│   ├─ Preferences (Exercise 8)
│   └─ Geolocation (Exercise 9)
│
├── help.html                     # Help & learning guide
│   ├─ HTML5 exercise references (with code examples)
│   ├─ CSS3 exercise references
│   ├─ JavaScript exercise references
│   └─ Bootstrap framework guide
│
├── styles.css                    # External stylesheet (CSS3)
│   ├─ Universal selector & reset (Exercise 1)
│   ├─ Typography (Exercise 2-5)
│   ├─ Colors & gradients (Exercise 5)
│   ├─ Box model (Exercise 8)
│   ├─ Flexbox (Exercise 10)
│   ├─ Media queries (Exercise 19)
│   └─ Responsive design
│
├── main.js                       # JavaScript logic (ALL exercises)
│   ├─ Data types & operators (Exercise 2)
│   ├─ Conditionals & loops (Exercise 3)
│   ├─ Functions & closures (Exercise 4)
│   ├─ Array methods (Exercise 6)
│   ├─ DOM manipulation (Exercise 7)
│   ├─ Event handlers (Exercise 6)
│   ├─ localStorage API (Exercise 8)
│   ├─ Geolocation API (Exercise 9)
│   ├─ Async/await & Fetch (Exercise 9)
│   ├─ Error handling (Exercise 3)
│   └─ Debugging utilities
│
├── mock-events.json             # Sample event data
│   ├─ 10 events with all properties
│   ├─ 5 event categories
│   └─ Metadata
│
└── MODULE-1-LEARNING-GUIDE.md  # COMPREHENSIVE learning guide
    ├─ Deep dive into each technology
    ├─ Interview Q&A scenarios
    ├─ Code examples with explanations
    ├─ Common mistakes to avoid
    └─ Next steps (Module 2 & 3)
```

---

## 🎯 What Each File Teaches

### index.html - HTML5 Mastery
| Exercise | Concept | Location |
|----------|---------|----------|
| 1 | HTML5 base template | Lines 1-20 |
| 2 | Navigation with `<nav>` & anchor links | Lines 37-60 |
| 3 | ID vs Class selectors | #welcomeBanner, .highlight |
| 4 | Tables & images with alt text | #gallery section |
| 5 | Form with input types & validation | #registration form |
| 6 | Event handlers (onblur, onchange, ondblclick) | Lines 600+ (inline scripts) |
| 7 | `<video>` element with oncanplay | #video section |
| 8 | localStorage API | Preferences section |
| 9 | Geolocation API | Find Nearby Events button |
| 10 | onbeforeunload warning | Event listener on window |

### styles.css - CSS3 Mastery
| Exercise | Concept | Lines |
|----------|---------|-------|
| 1 | Universal selector & reset | 1-10 |
| 2 | CSS comments & structure | Throughout |
| 3 | Selectors (element, class, ID, pseudo) | 20-60 |
| 4 | Colors & HEX/RGBA | 100-150 |
| 5 | Typography (fonts, sizes, line-height) | 70-100 |
| 6 | Link pseudo-classes (:hover, :visited) | 180-210 |
| 7 | List styling | 220-240 |
| 8 | Box model (margin, padding, border) | 280-330 |
| 9 | Display & visibility (none, flex, grid) | 340-400 |
| 10 | Flexbox layout | 410-460 |
| 11 | Buttons & hover effects | 470-530 |
| 12 | Borders, shadows, rounded corners | 540-600 |
| 13 | Table styling | 610-650 |
| 14 | Multi-column text | 660-680 |
| 15 | Spacing utilities | 690-750 |
| 16 | Positioning | 760-800 |
| 17 | Animations & transforms | 810-870 |
| 18 | Form styling | 880-950 |
| 19 | Media queries (responsive) | 960-1050 |

### main.js - JavaScript Mastery
| Exercise | Concept | Function Name |
|----------|---------|---------------|
| 1 | Setup & console.log | initializePortal() |
| 2 | Data types & template literals | eventsData array |
| 3 | Conditionals & loops (forEach) | renderEventsList() |
| 4 | Functions & callbacks | createEventCard() |
| 5 | Objects & CRUD operations | registrations array |
| 6 | Array methods (filter, find, map) | filterEventsByCategory() |
| 7 | DOM manipulation (createElement) | renderGallery() |
| 8 | Event listeners | addEventListener() calls |
| 9 | Async/await & Fetch | fetchEventsFromAPI() |
| 10 | Modern JS (destructuring, spread) | displayEventDetails() |
| 11 | Forms & validation | validateRegistration() |
| 12 | Error handling (try/catch) | getEventSafely() |
| 13 | Debugging (console methods) | debugEvent() |
| 14 | Promises & higher-order functions | searchEvents() |

---

## 💡 Key Features Demonstrated

### ✨ Interactive Features
1. **Event Registration** - Complete form with validation
2. **Event Filtering** - By category (dropdown)
3. **Image Gallery** - With hover effects
4. **Feedback System** - Rating + comments
5. **Video Player** - HTML5 `<video>` element
6. **Location Detection** - Geolocation API
7. **Data Persistence** - localStorage
8. **Real-time Character Count** - Keyboard event handling
9. **Phone Validation** - On blur event handler
10. **Dynamic Event Fee Display** - Dropdown change handler

### 🎨 Design Features
- Bootstrap 5 responsive grid
- Mobile-first approach
- Smooth animations and transitions
- Modern card-based layout
- Semantic HTML structure
- Accessibility (labels, alt text, ARIA)

### 🛠️ Technical Features
- Async/await with error handling
- DOM manipulation (createElement, appendChild)
- Event delegation patterns
- Closure-based state management
- CRUD operations (Create, Read, Update, Delete)
- Regular expressions for validation
- CSS variables for theming
- Responsive breakpoints
- Browser DevTools debugging

---

## 📖 How to Use This for Interview Prep

### Step 1: Read the Guide
```bash
Open: MODULE-1-LEARNING-GUIDE.md
Time: 90 minutes
Focus: Interview Q&A section + Code examples
```

### Step 2: Trace the Code
```bash
1. Open index.html in Chrome
2. Open DevTools (F12)
3. Go to Console tab
4. Click "Register" button
5. Watch function calls and state changes in console
```

### Step 3: Modify & Experiment
```javascript
// In console, try:
console.log(eventsData);           // See all events
filterEventsByCategory('workshop'); // Filter events
localStorage.getItem('preferredEventType'); // Check storage
navigator.geolocation.getCurrentPosition(pos => console.log(pos));
```

### Step 4: Practice Common Questions
- "Explain the registration form validation"
- "How does the event filtering work?"
- "Why use localStorage instead of sending to server?"
- "How does the responsive grid work in Bootstrap?"
- "Trace the execution of the form submission"

### Step 5: Modify Features (Build Confidence)
```javascript
// Try modifying:
1. Add a new input field to form
2. Add a new event category filter
3. Change colors without reloading
4. Add console.log statements to trace execution
5. Create new function to export registrations
```

---

## 🧠 Interview Talking Points

### About HTML5
> "I used semantic HTML5 tags like `<nav>`, `<section>`, `<article>` for better structure. This improves accessibility for screen readers and SEO. The form includes HTML5 input types (email, date, number) which handle validation automatically."

### About CSS3
> "The project is mobile-first responsive using Bootstrap's grid system. Media queries handle different screen sizes. I used Flexbox for alignment and CSS variables for consistent theming. Transitions smooth all interactions."

### About JavaScript
> "I used modern JavaScript: const for constants, arrow functions for callbacks, async/await for promises. Array methods (map, filter, reduce) transform data cleanly. Event listeners attach to the DOM after load to avoid coupling HTML and JS."

### About Bootstrap
> "Bootstrap's 12-column grid makes responsive design simple. Utility classes (m-3, p-2, text-center) handle spacing. Pre-built components (cards, forms, buttons) speed development while maintaining consistency."

---

## 🐛 Common Issues & Fixes

### Issue: Styles not loading
```
Fix: Check file path. Should be: <link rel="stylesheet" href="styles.css">
In browser dev tools, Network tab shows if CSS loaded.
```

### Issue: Form not submitting
```
Fix: Check console for errors (F12 → Console).
Ensure all required fields filled.
JavaScript preventDefault() stops default submission.
```

### Issue: Events not displaying
```
Fix: Check console.log(eventsData) in console.
Ensure main.js is loaded after HTML.
Check Network tab to see if mock-events.json loaded.
```

### Issue: localStorage not working
```
Fix: Check browser allows localStorage (not private mode).
Try: localStorage.setItem('test', 'value')
If fails, browser may have storage disabled.
```

### Issue: Geolocation not requesting
```
Fix: Check browser permissions (Chrome → Settings → Privacy).
Geolocation requires HTTPS (or localhost).
Grant permission when Chrome asks.
```

---

## 📊 Code Statistics

| Metric | Value |
|--------|-------|
| **HTML Lines** | 650 |
| **CSS Lines** | 1,050 |
| **JavaScript Lines** | 700 |
| **Total Code** | 2,400+ lines |
| **Functions in JS** | 25+ |
| **CSS Classes** | 40+ |
| **Responsive Breakpoints** | 4 |
| **Events Demonstrated** | 10 |
| **Exercises Covered** | 40+ |

---

## 🎓 Learning Outcomes

After completing this module, you should:

- [ ] Build semantic HTML5 with forms and validation
- [ ] Style responsive layouts with CSS3 and Flexbox
- [ ] Write clean JavaScript with async/await
- [ ] Manipulate DOM efficiently with event listeners
- [ ] Use browser APIs (localStorage, geolocation)
- [ ] Build with Bootstrap components
- [ ] Debug using Chrome DevTools
- [ ] Handle errors gracefully
- [ ] Explain code decisions to interviewers
- [ ] Pass Cognizant FSE technical assessment

---

## 🔗 Next Steps

### Master These Before Interview
1. ✅ Complete all exercises in this project
2. ✅ Read MODULE-1-LEARNING-GUIDE.md thoroughly
3. ✅ Practice explaining code without notes
4. ✅ Modify features to deepen understanding
5. ✅ Review the "Interview Talking Points" section

### Then Move To
1. **Module 2**: SQL/MySQL database design and queries
2. **Module 3**: Core Java programming with Spring Boot
3. **Final Project**: Build full-stack event portal

---

## 📞 Quick Reference

### Browser DevTools Shortcuts
- **F12** - Open DevTools
- **Ctrl+Shift+I** - Open DevTools (alternative)
- **Ctrl+Shift+J** - Open Console
- **Ctrl+Shift+E** - Open Inspector
- **Ctrl+Shift+K** - Network tab
- **Ctrl+Shift+D** - DevTools dock right

### Useful Console Commands
```javascript
// Inspect data
console.log(eventsData);
console.table(eventsData);

// Check storage
localStorage.getItem('preferredEventType');
sessionStorage.getItem('tempData');

// Debug performance
console.time('myTimer');
// ... code ...
console.timeEnd('myTimer');

// Clear all
localStorage.clear();
console.clear();
```

### Important URLs
- **Local**: http://localhost:8000
- **Help Page**: http://localhost:8000/help.html
- **Chrome DevTools**: F12
- **MDN Docs**: https://developer.mozilla.org

---

## ⭐ Performance Tips

1. **Use const by default** - Signals immutability
2. **Use const then let** - Never use var
3. **Use arrow functions** - Shorter, cleaner callbacks
4. **Use template literals** - Better than concatenation
5. **Use array methods** - map, filter, reduce > loops
6. **Use CSS classes** - Not inline styles
7. **Use event delegation** - Fewer listeners
8. **Use async/await** - Cleaner than .then()
9. **Use localStorage** - Not global variables
10. **Use Git** - Version control essential

---

## 📝 Notes

- **Created**: May 28, 2026
- **Purpose**: Cognizant FSE Module 1 Training
- **Status**: ✅ Complete and production-ready
- **Browser Tested**: Chrome, Firefox, Safari
- **Mobile Tested**: Responsive on all breakpoints

---

## 🎉 Summary

This project is a **complete, enterprise-grade training portal** that teaches:

✅ Frontend fundamentals (HTML5, CSS3, JavaScript)
✅ Framework basics (Bootstrap 5)
✅ Real-world patterns (CRUD, validation, events)
✅ Interview preparation material

**You now have everything needed to ace Module 1 of the Cognizant FSE assessment!**

---

**Happy Learning! 🚀**

*For detailed explanations, code walkthroughs, and interview Q&A, see MODULE-1-LEARNING-GUIDE.md*
