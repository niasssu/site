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
document.getElementById('loginTime').innerHTML = `${userName}, you opened this site at ${formattedTime} on ${formattedDate}.`;
*/