let currentTheme = localStorage.getItem('theme')

if (currentTheme === 'dark') {
  document.documentElement.classList.remove('light')
}

if (currentTheme === 'light') {
  document.documentElement.classList.add('light')
}

function switchTheme() {
  currentTheme = localStorage.getItem('theme')

  if (currentTheme === 'dark') {
    document.documentElement.classList.add('light')
    localStorage.setItem('theme', 'light')

    return
  }

  document.documentElement.classList.remove('light')
  localStorage.setItem('theme', 'dark')
}
