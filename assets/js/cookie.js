// Cookie Helper Functions
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  let cname = name + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
  }
  return "";
}

// Accept button
function acceptCookies() {
  setCookie("cookieConsent", "accepted", 30); // valid for 30 days
  document.querySelector(".cookie-box").style.display = "none";
}

// Decline button
function declineCookies() {
  setCookie("cookieConsent", "declined", 7); // remind after 7 days
  document.querySelector(".cookie-box").style.display = "none";
}

// Show banner if no cookie set
window.onload = function() {
  if (getCookie("cookieConsent") === "") {
    const banner = document.getElementById("cookie-banner");
    banner.style.display = "block"; 
    setTimeout(() => document.querySelector(".cookie-box").classList.add("show"), 300);
  }

  // Attach event listeners
  document.getElementById("acceptCookies").addEventListener("click", acceptCookies);
  document.getElementById("declineCookies").addEventListener("click", declineCookies);
}
