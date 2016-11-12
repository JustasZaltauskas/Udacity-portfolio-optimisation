# Udacity portfolio optimisation project
Project 4 from Udacity Front-end Web Developer Nanodegree.

I was provided with Udcacity portfolio web page. My task was to optimize it to run at 60 frames per second and reach a target score on Google pagespeed insights.

URL: https://justaszaltauskas.github.io/Udacity-portfolio-optimisation

My main focus was on main index and pizzeria pages.

---

Page Speed Insights Results: 

https://justaszaltauskas.github.io/Udacity-portfolio-optimisation/

+ Mobile: 95
+ Desktop: 97

## Optimizations:
1. Removed @media print query from style.css and created print.css stylesheet which is only used for printing.
2. Inlined style.css.
3. Loaded google analytics asynchronously.
4. Used JS library "Webfont Loader" to load web fonts asynchronously.
5. Moved all javascript code to the bottom of the body tag.
6. Optimized the pizzeria image, shrink it to 115 pixels wide.
7. Minified HTML and JS files.

---

https://justaszaltauskas.github.io/Udacity-portfolio-optimisation/views/pizza.html

+ Mobile: 89
+ Desktop: 98

## Optimizations:
1. Made page to run at 60fps.
2. Optimised the main picture and made its file size responsive to the viewport size.
3. Optimised pizza picture.
4. Optimised views/js/main.js javascript code, removed forced synchronous layout also known as layout trashing , changed document.query
 Selector to document.getElementById which is faster. Dynamically calculate the number of pizzas needed to fill the screen, based on browser window resolution.
5. Removed unused bootstrap css styles via grunt.
6. Minified HTML and JS code.
7. Inlined CSS.
8. Javascript moved to the bottom and made to run just after the page loads (added defer tag).
9. Specified a viewport matching the device's size, which allows it to render properly on all devices.

