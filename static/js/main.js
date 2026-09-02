"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const parentMarquee = document.querySelector(".marquee-wrapper");
    if (!parentMarquee) return;

    // code below will allow a draggable feature for the marquee carousel
    let isDragging = false;
    const dragStart = (e) => {
        if (!isDragging)
            return;
        parentMarquee.scrollLeft -= e.movementX;
    };
    const stopDragging = () => {
        isDragging = false;
    };
    // when mouse is pressed
    parentMarquee.addEventListener('mousedown', () => isDragging = true);
    // when mouse is move to left
    parentMarquee.addEventListener('mousemove', dragStart);
    // when mouse pressed is released
    window.addEventListener('mouseup', stopDragging);
});
