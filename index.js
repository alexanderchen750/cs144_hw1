document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const { theme: savedTheme = 'light' } = { 
      theme: localStorage.getItem('theme') 
    };
    savedTheme === 'dark' && document.body.classList.add('dark-mode');
    const getCurrentTheme = () => document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const toggleTheme = () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', getCurrentTheme());
    };
    themeToggle?.addEventListener('click', toggleTheme);
  });