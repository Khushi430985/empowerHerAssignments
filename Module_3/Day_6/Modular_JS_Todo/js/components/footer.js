export default function renderFooter(root) {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `<p>© ${new Date().getFullYear()} Modular Todos — built for assignment</p>`;
  root.appendChild(footer);
}
