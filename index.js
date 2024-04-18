window.addEventListener('load', () => {
  const timeoutId = setTimeout(() => {
    document.body.classList.remove('not-loaded');
    clearTimeout(timeoutId);
  }, 1000);
});
