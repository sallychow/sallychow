class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <footer class="footer">
    <div class="footer-content">
      <div class="copyright">
        <p>©2025 Chow Wing Yan || <a href="https://xxxjay123.github.io/xxxJay123/" target="_blank" class="footer-link">xxxJay123</a></p>
      </div>
    </div>
  </footer>
  `;
  }
}

customElements.define("prof-footer", Footer);