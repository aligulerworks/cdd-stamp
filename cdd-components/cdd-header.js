// LIGHT SWITCH
"use strict";
class headerTemplate extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header>
    <a href="./index.html" id="cdd-logo"class="cdd-logo">
      <div class="radar-rotate">
        <img
        class="cdd-logo-radarrotate"
        src="./cdd-media/svg/logo/cdd-logo-radarrotate.svg"
        alt="Logo: CDD Stamp"
        />
      </div>
      <div class="logo-day">
        <img
          class="cdd-logo-case"
          src="./cdd-media/svg/logo/cdd-logo-case-onlite.svg"
          alt="Logo: CDD Stamp"
        />
        <img
          class="cdd-logotype"
          src="./cdd-media/svg/logo/logotype-cdd-red.svg"
          alt="Logo: CDD Stamp"
        />
      </div>
      <div class="logo-nite">
      <img
        class="cdd-logo-case"
        src="./cdd-media/svg/logo/cdd-logo-case-ondark.svg"
        alt="Logo: CDD Stamp"
      />
      <img
        class="cdd-logotype"
        src="./cdd-media/svg/logo/logotype-cdd-white.svg"
        alt="Logo: CDD Stamp"
      />
        </div>
      </a>
    <nav class="cdd-nav-main">
      <li><a class="active"href="./about.html">About</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="./cdd-charts.html">Charts</a></li>
      <li><a href="#">Team</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Analysis</a></li>
      <li><a href="#">Docs</a></li>
    </nav>

    <nav class="cdd-nav-2nd">
      <a href="#" class="cdd-search cdd-icon">
        <svg
          id="cdd-icon-search"
          data-name="cdd-icon-search"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 90.71 90.71"
        >
          <path
            class="svg-path-solid"
            d="M89.09,81.07l-8.2-8.2-8.02,8.02,8.2,8.2c2.17,2.17,5.68,2.17,7.84,0l.18-.18c2.17-2.17,2.17-5.68,0-7.84Z"
          />
          <path
            class="svg-path-solid"
            d="M19.16,19.16c-7.19,7.19-10.04,15.99-6.37,19.66s10.16-1.5,17.34-8.69c7.19-7.19,12.36-13.67,8.69-17.34s-12.48-.82-19.66,6.37Z"
          />
          <path
            class="svg-path-solid"
            d="M74.53,60.41c-1.93-1.93-6.65-.33-10.55,3.57-3.9,3.9-5.5,8.62-3.57,10.55,1.93,1.93,6.65.33,10.55-3.57,3.9-3.9,5.5-8.62,3.57-10.55Z"
          />
        </svg>
      </a>

      <a href="#" class="cdd-user cdd-icon">
        <svg
          id="cdd-icon-user"
          data-name="cdd-icon-user"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 90.71 90.71"
        >
          <path
            class="svg-hiddn-circle"
            d="M90.71,45.36c0,21.1-14.41,38.83-33.92,43.89-3.65.96-7.49,1.46-11.44,1.46s-7.78-.5-11.43-1.46C14.41,84.19,0,66.46,0,45.36,0,20.31,20.31,0,45.35,0s45.36,20.31,45.36,45.36Z"
          />

          <path
            class="svg-path-solid"
            d="M54.67,37.12c5.14-5.14,5.14-13.48,0-18.62s-13.48-5.14-18.62,0c-5.14,5.14-5.14,13.48,0,18.62,5.14,5.14,13.48,5.14,18.62,0Z"
          />
          <path
            class="svg-path-solid"
            d="M70.42,57.81l-13.63-13.63h0s-22.87,0-22.87,0h0s-13.63,13.63-13.63,13.63c-2.21,2.21-2.21,5.8,0,8.02,2.21,2.21,5.8,2.21,8.02,0l5.61-5.61v29.03c3.65.96,7.48,1.46,11.43,1.46s7.79-.5,11.44-1.46v-29.03l5.61,5.61c2.21,2.21,5.8,2.21,8.02,0,2.21-2.21,2.21-5.8,0-8.02Z"
          />
        </svg>
      </a>
    </nav>

    <nav class="cdd-nav-social">
      <a href="#" class="cdd-social cdd-icon" target="_blank">
        <svg
          id="logo-x"
          data-name="logo-x"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 90.71 90.71"
        >
          <rect
            class="cls-1"
            x="19.84"
            y="19.84"
            width="51.02"
            height="51.02"
          />
          <path
            class="svg-path-solid"
            d="M49.56,41.45l18.59-21.61h-4.4l-16.14,18.76-12.89-18.76h-14.87l19.49,28.37-19.49,22.66h4.4l17.04-19.81,13.61,19.81h14.87l-20.21-29.42h0ZM43.52,48.46l-1.97-2.82-15.71-22.48h6.77l12.68,18.14,1.97,2.82,16.48,23.58h-6.77l-13.45-19.24h0Z"
          />
          <path
            class="svg-hidden-circle"
            d="M90.71,45.36c0,21.1-14.41,38.83-33.92,43.89-3.65.96-7.49,1.46-11.44,1.46s-7.78-.5-11.43-1.46C14.41,84.19,0,66.46,0,45.36,0,20.31,20.31,0,45.35,0s45.36,20.31,45.36,45.36Z"
          />
        </svg>
      </a>
      <a href="#" class="cdd-social cdd-icon" target="_blank">
        <svg
          id="logo-in"
          data-name="logo-in"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 90.71 90.71"
        >
          <rect
            class="cls-1"
            x="19.84"
            y="19.84"
            width="51.02"
            height="51.02"
          />
          <path
            class="svg-path-solid"
            d="M67.1,19.84H23.61c-2.08,0-3.77,1.69-3.77,3.77v43.49c0,2.08,1.69,3.77,3.77,3.77h43.49c2.08,0,3.77-1.69,3.77-3.77V23.61c0-2.08-1.69-3.77-3.77-3.77ZM35.05,63.31h-7.67v-24.37h7.67v24.37ZM31.22,35.57c-2.44,0-4.42-1.86-4.42-4.4s1.98-4.4,4.42-4.4,4.42,1.86,4.42,4.4-1.98,4.4-4.42,4.4ZM63.33,63.33h-7.67v-13.31c0-3.93-1.67-5.14-3.82-5.14-2.28,0-4.51,1.71-4.51,5.24v13.21h-7.67v-24.37h7.38v3.38h.1c.74-1.5,3.33-4.06,7.29-4.06,4.28,0,8.91,2.54,8.91,9.98v15.07Z"
          />
          <path
            class="svg-hidden-circle"
            d="M90.71,45.36c0,21.1-14.41,38.83-33.92,43.89-3.65.96-7.49,1.46-11.44,1.46s-7.78-.5-11.43-1.46C14.41,84.19,0,66.46,0,45.36,0,20.31,20.31,0,45.35,0s45.36,20.31,45.36,45.36Z"
          />
        </svg>
      </a>
    </nav>
  </header>`;
  }
}
customElements.define("header-component", headerTemplate);
