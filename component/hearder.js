class Headers extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<!--=========================== Header ==============================-->
  <header class="header" id="header">
    <nav class="nav">
      <input id="burger-checkbox" class="nav__toggle" type="checkbox" />
      <label class="burger" for="burger-checkbox">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <!-- Backdrop for menu -->
      <div class="nav__backdrop"></div>
      <!-- Menu -->
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="../index.html#home" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="../index.html#about" class="nav__link">About</a>
          </li>
          <li class="nav__item">
            <a href="../index.html#projects" class="nav__link">Projects</a>
          </li>
          <li class="nav__item">
            <a href="../index.html#survices" class="nav__link">Survices</a>
          </li>
          <li class="nav__item">
            <a href="../index.html#contact" class="nav__link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  `;
  }
}

customElements.define("portf-header", Headers);
