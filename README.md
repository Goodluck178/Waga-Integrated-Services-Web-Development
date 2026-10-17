# Academic Project

# WAGA Integrated Services - Client-Side Web Development Tutorial Platform

 A responsive, component-based web application for selling web development tutorials, built with Vanilla JavaScript, Bootstrap 5, and BEM (Block – Element – Modifier} CSS architecture. Features real-time form validation, price calculation, and DOM-driven purchase feedback.

 ### Live demo
 
 #### Link: https://waga.morganugochukwu.com/index.html

### Project Overview

WAGA Integrated Services is a tutorial sales platform that allows users to purchase Beginners and Advanced web development packages. 

This project was built to demonstrate pure client-side fundamentals without frameworks.
The app handles a complete client-side purchase flow: package selection, quantity handling, address capture, gender selection, validation, total price calculation (€25/€50 packages), and dynamic purchase summary rendering.

### Tech Stack 

Semantic HTML5 

CSS 
    
Framework: 

Bootstrap 5.3.8 

Vanilla JavaScript  

### Key Features 

1. Professional Navigation

2. Hero Section (BEM Styled)

3. Purchase Tutorial Form  Core Business Logic
 
4. Package Selection

5. Quantity Input
 
6. Address Input
  
7. Gender Radio Group

8. Buy Button
   
9. Live Purchase Summary

10. Client-Side Validation & Calculation
   
### My `script.js` implements:

Required field checks

Quantity x Price calculation

Real-time DOM injection without page reloads

User feedback via output box

### Actual File Structure

waga_integrated_services_web_development/

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
 
### How to Run 

No build step - Pure client-side,

```bash

# Clone

git clone https://github.com/Goodluck178/Waga-Integrated-Services-Web-Development.git

cd waga_integrated_services_web_development

# Run - Just open index.html

# Option 1: Double-click index.html

# Option 2: VS Code Live Server (Recommended)

# Right-click index.html -> Open with Live Server

# Live Deployed Version:

# https://waga.morganugochukwu.com/index.html
