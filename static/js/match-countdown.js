"use strict";
document.querySelectorAll(".match-countdown[data-kickoff]").forEach((el) => {
    const kickoff = new Date(el.dataset.kickoff).getTime();
    // The kickoff date is set by hand and isn't updated in real time, so a
    // visitor can easily load the page well after the match is over. Past
    // this window (kickoff + a full match's worth of time) "playing now"
    // is no longer accurate, and there's no result to show without someone
    // filling in [last_match] by hand, so it reads "TBC" instead - the card
    // (teams, date, venue) stays up rather than disappearing.
    const matchDurationMs = 3 * 60 * 60 * 1000;
    const values = {
        days: el.querySelector('[data-unit="days"]'),
        hours: el.querySelector('[data-unit="hours"]'),
        minutes: el.querySelector('[data-unit="minutes"]'),
        seconds: el.querySelector('[data-unit="seconds"]'),
    };

    const tick = () => {
        const diff = kickoff - Date.now();
        if (diff <= -matchDurationMs) {
            el.textContent = "TBC";
            clearInterval(timer);
            return;
        }
        if (diff <= 0) {
            el.textContent = "Si gioca ora!";
            return;
        }
        values.days.textContent = Math.floor(diff / 86400000);
        values.hours.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0");
        values.minutes.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
        values.seconds.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
    };

    tick();
    const timer = setInterval(tick, 1000);
});
