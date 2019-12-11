/*
Quick hack for switching a CSS file by mouse click. (C) DJ 8/2012
- Changed names and added local storage to ensure last CSS chosen
is active when page reloads. Changes (C) Kine Bergseth 9/2018
- Simplified syntax, removed redundant file call. (C) DJ 10/2019
*/


function switchCSS(first, second) {
    var stylesheet = document.getElementById("stylesheet");
    var href = stylesheet.getAttribute("href");
    var newHref = href == first ? second : first;
    localStorage.setItem("currentStyle", newHref);
    stylesheet.setAttribute("href", newHref);
    }
    document.addEventListener("DOMContentLoaded", function() {
    var stored_css = localStorage.getItem("currentStyle");
    if (!(typeof stored_css === 'undefined' || stored_css === null)) {
    document.getElementById("stylesheet").href = stored_css;
    }
    });