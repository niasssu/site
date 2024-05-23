// JAVASCRIPT ---------
/****************************************************************************************************************
  /// This document contains the Javascript for niasssu.neocities.org.
  /// It isn't much, but I wrote most of this code on my own.
****************************************************************************************************************/

/* --- */
let now = new Date();
console.log(`The current time is ${now}.`);
let day = now.getDate().toString().padStart(2, '0');
let month = (now.getMonth() + 1).toString().padStart(2, '0');
let year = now.getFullYear().toString();
let hours = now.getHours().toString().padStart(2, '0');
let minutes = now.getMinutes().toString().padStart(2, '0');
let seconds = now.getSeconds().toString().padStart(2, '0');

let formattedDate = `${day}/${month}/${year}`;
let formattedTime = `${hours}:${minutes}:${seconds}`;
let dottedDate = `${hours}.${minutes}.${seconds}.X.${day}.${month}.${year}`;
let weekDay = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
let currentDay = weekDay[now.getDay()];

/*
let userName = prompt('enter a username', `user-${dottedDate}`);
console.log(`user-${dottedDate} --> ${userName}`);
alert(`Welcome, ${userName}!`);
*/

/* --- 
document.getElementById("rinotif").innerHTML = `// Tweaked the lobby layout a little bit.<br><br>// found out about the span element last week... i've been using a without an href this whole time like a dummy.<br><br>// Thinking I should change the site's layout again.<br><br>// So, my drawing tablet's been finnicky recently, and I thought it was a software issue in libwacom or whatever. Nope, looks like a hardware issue, and knowing my terrible luck it's probably the tablet and not the pc.<br>// Turns out I was wrong, actually! The USB port is what's messing up, not the tablet. I suppose I'll get a bt adapter now...<br><br>// I noticed a problem with the iframe, that the window.location.replace(); buttons load their new page inside the iframe only. How do I fix this??<br>// Made a temporary solution for now | for all the pages to redirect to [lnkdir] instead of the main page. But what I want is for the new page to overlay the whole tab, not just the iframe. Does this make sense at all?`;
document.getElementById("mrnotif").innerHTML = `&gt; i wanna be hugged, i wanna be loved, i wanna be fluffy<br>&gt; i wanna wear a shirt so big i wont have to wear anything else<br><br>&gt; i need something to talk about =w=<br><br>&gt; Going to make character pages soon!<br>&gt; Template finished! Time to start writing!`;*/
