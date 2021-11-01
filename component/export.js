export function footer() {
  return `<div id="footer">
      <div id="first_container">
        <div class="container">
          <h2>Practo</h2>
          <p>About</p>
          <p>Blog</p>
          <p>Carrers</p>
          <p>Press</p>
          <p>Contact Us</p>
        </div>
        <div class="container">
          <h2>For patient</h2>
          <p>Search for doctors</p>
          <p>Search for clinics</p>
          <p>Search for hospitals</p>
          <p>Book Diagnostic Tests</p>
          <p>Book full Body Checkups</p>
          <p>Practo Plus</p>
          <p>Covid Hospital Tests</p>
          <p>Practo Plus</p>
          <p>Covid Hospial listing</p>
          <p>Book Diagnostic Tests</p>
          <p>Book full Body Checkups</p>
          <p>Practo Plus</p>
          <p>Covid Hospital Tests</p>
        </div>
        <div class="container">
          <h2>For doctors</h2>
          <p>Practo Profile</p>
          <p></p>
          <h2>For clinics</h2>
          <p>Search for clinics</p>
          <p>Search for hospitals</p>
          <p>Book Diagnostic Tests</p>
          <p>Book full Body Checkups</p>
        </div>
        <div class="container">
          <h2>For hospitals</h2>
          <p>clinics</p>
          <p>hospitals</p>
          <p>Diagnostic Tests</p>
          <p>Checkups</p>
        </div>
        <div class="container">
          <h2>More</h2>
          <p>Help</p>
          <p>Developers</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Healthcare Directory</p>
          <p>Practo Health Wiki</p>
          <p>Corporate Wellness</p>
        </div>
        <div class="container">
          <h2>Social</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Youtube</p>
          <p>Github</p>
        </div>
      </div>
      <div id="img_container">
        <img src="/images/practo-footer.5fd476e2.svg" alt="" />
      </div>
      <p class="copywrite">
        Copyright <span>&copy;</span> 2017,Practo.All rights reserved.
      </p>
    </div> `
}

export function header() {
  return `<div id="header_part" >
        <div class="header_container min_sreen">
          <img src="/images/practo.8e3ca798.svg" alt="" onclick="(location.href='../pages/index.html')"/ >
        </div>
        <div class="header_container">
          <h1>Find Doctors</h1>
          <p>Book an appointment</p>
        </div>
        <div class="header_container">
          <h1>Video Consult</h1>
          <p>Consult top Doctors</p>
        </div>
        <div class="header_container" >
          <h1 onclick="(location.href='../pages/medicine.html')">Medicines</h1>
          <p>Practo pharmacy</p>
        </div>
        <div class="header_container">
          <h1>Lab Tests</h1>
          <p>Book tests & checkup</p>
        </div>
        <div class="header_container">
          <h1>Surgeries</h1>
          <p>Expert surgical care</p>
        </div>
        <div class="header_container min_sreen fle_btn_img">
          <button id="provide">For Provides
          </button>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M 19 15 l -7 7 l -7 -7"
          />
        </svg>
        </div>
        <div class="header_container min_sreen fle_btn_img">
          <button id="Security">Security & help</button><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M 19 15 l -7 7 l -7 -7"
          />
        </svg>
        </div>
        <div class="header_container min_sreen"  onclick="(location.href='../pages/login.html')">
          <button id="login">Login / Signup</button>
        </div>
      </div>`
}

export function searchfield() {
  return `<div id="input_container">
      <div class="search_btn_icon" style="width: 24px; height: 24px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    
      <input
        id="input_search_value"
        oninput="main(event)"
        type="text"
        placeholder="Search for medicines, health products and more"
      />
      <button
        class="seconf_btn"
        onclick="(location.href='../pages/viewcart.html')"
      >
        <div class="search_btn_icon2" style="width: 24px; height: 24px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <p id="tot">0</p>
        <p id="view_cart">VIEW CART</p>
      </button>
    </div>`
}
