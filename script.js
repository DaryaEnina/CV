function theme() {
  const toggleTheme = document.querySelector ('.main_checkbox')
 
 let el = document.documentElement

  toggleTheme.addEventListener('click', () => {
    if(el.hasAttribute('data-theme')) {
      el.removeAttribute('data-theme')
      localStorage.removeItem('theme')
    } else {
      el.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    }
  })

  if(localStorage.getItem('theme') !== null) {
    el.setAttribute('data-theme', 'dark')
    toggleTheme.checked = true
    }
}

theme();
