# WAGA Integrated Services - Client-Side Web Development Tutorial Platform

 A responsive, component-based web application for selling web development tutorials, built with Vanilla JavaScript, Bootstrap 5, and BEM (Block – Element – Modifier} CSS architecture. Features real-time form validation, price calculation, and DOM-driven purchase feedback.

### Project Overview

WAGA Integrated Services is a tutorial sales platform that allows users to purchase Beginners and Advanced web development packages. 

This project was built to demonstrate pure client-side fundamentals without frameworks, a core requirement that enterprise employers use to differentiate candidates who truly understand the browser from those who only know React.

The app handles a complete client-side purchase flow: package selection, quantity handling, address capture, gender selection, validation, total price calculation (€25/€50 packages), and dynamic purchase summary rendering.

### Tech Stack 

 `index.html`:

HTML5: Semantic structure with `<nav>`, `<main>`, `<section>`, `<footer>`, accessible forms

CSS Architecture - BEM Methodology:

  My code uses professional BEM naming: `header__astrong`, `hero__h1`, `hero__h2`, `hero__p1`, `mark__h3`, `mark__form`, `mark__dropdown`, `mark__input__number`, `output__title`
  
    This is exactly scalable CSS, not inline styles
    
    Component CSS files: `styles/component/footer.css`, `mark.css`, `header.css`, `hero.css` + `styles/style.css`
    
Framework: Bootstrap 5.3.8 via CDN for responsive navbar (`navbar-expand-sm`, `navbar-toggler`, `collapse`) and layout (`container`, `container-fluid`)

JavaScript: Vanilla JS with `ValidateAndCalculate()` function handling:

    Dropdown value reading (`#dropdown__text`, `#book` value 25, `#video` value 50)
    
    Quantity validation (`#mark__input__number`)
    
    Address input (`#mark__input__text`)
    
    Radio button gender logic (`#male`, `#female`)
    
    Dynamic DOM updates: `#productName`, `#quantityOutput`, `#AddressOutput`, `#genderOutput`, `#totalPriceOutput` inside `#purchaseBox`
    
Deployment: Live on Neocities  shows you can deploy static sites

### Key Features 

1. Professional Navigation:

Dark Bootstrap navbar (`bg-dark navbar-dark`) with logo (`#logom`), brand text with line break, and responsive collapse for mobile

Live links to Home / Gallery / Contact on Neocities

2. Hero Section (BEM Styled):
   
`hero__h1` Welcome title, `hero__h2` About Us, `hero__p1` / `hero__p2` descriptive content about HTML5/CSS/JS fundamentals

3. Purchase Tutorial Form  Core Business Logic (`mark` section):
 
Package Selection: `<select id="dropdown__text">` with Beginners Package €25 (`id="book" value="25"`) and Advanced Package €50 (`id="video" value="50"`)

Quantity Input: `type="number"` with `min="0"` default 1, `required`

Address Input: `type="text"` `required` for delivery

Gender Radio Group: Male/Female `required` validation

Buy Button: `.mark__mybutton` with `onclick="ValidateAndCalculate()"`  triggers validation + calculation + DOM rendering

Live Purchase Summary:`.output #purchaseBox` dynamically shows product name, quantity, address, gender, total price (Quantity x Package Price)

9. Client-Side Validation & Calculation:
Your `script.js` implements:

Required field checks

Quantity x Price calculation

Real-time DOM injection without page reloads

User feedback via output box

### Actual File Structure
Client_Scripting_Assignment/

index.html (Your provided file - Navbar + Hero + Purchase Form + Footer)

gallery.html (Linked in nav)

contact.html (Linked in nav)

script.js (ValidateAndCalculate() - validation + calculation logic)
styles/
 style.css (Global)
 
component/
header.css (#logom, .header__astrong)

 hero.css (. heroh1, .heroh2, .hero__p1)
 
mark.css (.markform, .markdropdown, .mark__mybutton, .output)

footer.css (.footer)
images/
logo.png
 
### How to Run Locally

No build step - Pure client-side,

```bash

# Clone

git clone https://github.com/YOUR_USERNAME/Client_Scripting_Assignment.git

cd Client_Scripting_Assignment

# Run - Just open index.html

# Option 1: Double-click index.html

# Option 2: VS Code Live Server (Recommended)

# Right-click index.html -> Open with Live Server

# Live Deployed Version:

# https://ugochukwu-ofodum-school-project.neocities.org/Client_Scripting_Ass
