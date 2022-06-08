// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')

let theme = document.documentElement.className;
const html = document.querySelector("html");
const darkModeBtn = document.querySelector("#darkMode-btn");

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
       <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
       </svg>`;

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
       <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
       </svg>`;

console.log(darkModeBtn.innerHTML);
if (document.documentElement.className === "light") {
  darkModeBtn.innerHTML = darkIcon;
} else if (document.documentElement.className === "dark") {
  darkModeBtn.innerHTML = lightIcon;
}

darkModeBtn.addEventListener("click", () => {
  if (document.documentElement.className === "dark") {
    html.classList.remove("dark");
    html.classList.add("light");
    darkModeBtn.innerHTML = darkIcon;
    // location.reload();
  } else if (document.documentElement.className === "light") {
    html.classList.remove("light");
    html.classList.add("dark");
    darkModeBtn.innerHTML = lightIcon;
  }
});
