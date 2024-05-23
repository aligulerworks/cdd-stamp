// LIGHT SWITCH
"use strict";
class footerTemplate extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <section class="cdd-footer">
      <div class="footer-menu">
        <ul>
          <li>F.A.Q.</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="footer-imprint">
        <a href="./index.html" id="cdd-logo" class="cdd-footer-logo">
          <div class="footer-logo">
            <img
              class="cdd-logo-radarrotate"
              src="./cdd-media/svg/logo/cdd-logo-radarrotate.svg"
              alt="Logo: CDD Stamp"
            />
            <img
              class="cdd-logo-case"
              src="./cdd-media/svg/logo/cdd-logo-case-onlite.svg"
              alt="Logo: CDD Stamp"
            />
          </div>
          <div class="footer-logotype">
            <img
              class="cdd-logotype"
              src="./cdd-media/svg/logo/logotype-cdd-red.svg"
              alt="Logo: CDD Stamp"
            />
            <p>
              Developed by AssetWise. A leading and trusted platform of crypto, financial market data analytics and AI powered solutions for institutions and professional investors.
            </p>
          </div>
        </a>
      </div>
      <div class="footer-contact">
        <ul>
          <li>Address</li>
          <li>Whatsapp</li>
          <li>Email</li>
        </ul>
      </div>
    </section>
    <section>
      <sprites-component></sprites-component>
    </section>`;
  }
}
customElements.define("footer-component", footerTemplate);
