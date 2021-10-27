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
  return `<div id="header_part">
    <div class="header_container min_sreen">
      <img src="/images/practo.8e3ca798.svg" alt="" />
    </div>
    <div class="header_container">
      <h1>Find Doctors</h1>
      <p>Book an appointment</p>
    </div>
    <div class="header_container">
      <h1>Video Consult</h1>
      <p>Consult top Doctors</p>
    </div>
    <div class="header_container">
      <h1>Medicines</h1>
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
    <div class="header_container min_sreen">
      <button id="provide">For Provides</button>
    </div>
    <div class="header_container min_sreen">
      <button id="Security">Security & help</button>
    </div>
    <div class="header_container min_sreen">
      <button id="login">Login / Signup</button>
    </div>
  </div>`
}

export function searchbar() {
  return ` <div id="input_container">
 ${icon(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>`)}
  <input
    type="text"
    placeholder="Search for medicines, health products and more"
  />
  <button>${icon(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>`)}VIEW CART</button>
</div>`
}
function icon(inp) {
  return `<div style="width: 24px; height: 24px;">${inp}</div>`
}

export function homebody(){
  return ` <div id="location">
  <div>
      <input type="text"><input type="search" name="" id="">
  </div>
  <div>
      <img src="/images/home_body/plus-tag.png" alt="">
  </div>
</div>
<!-- Location part ends -->
<div id="banner-start">
  <div id="banner">
      <div id="banner-left">
          <img src="/images/home_body/dweb_practo_care.png" alt="">
          <p>Choose the experts in end to end surgical care.</p>
          <h1>You are in safe hands</h1>
         <button id="banner-btn">Know More</button>
      </div>
      <div id="banner-right">
          <img src="/images/home_body/dweb_hero_banner.png" alt="">
      </div>
  </div>
</div>
<hr>
<!-- Properties -->

<div id="property">
  <div class="prop" id="prop1">
      <img src="/images/home_body/dweb_instant_video_consulation.png" alt="">
      <div>
          <h3>Instant Video Consultation</h3>
          <p>Connect within 60 secs</p>
      </div>
  </div>
  <div class="prop"  id="prop2">
      <img src="/images/home_body/dweb_find_doctors.png" alt="">
      <div>
          <h3>Find Doctor Near You</h3>
      <p>Confirmed Appointment</p>
      </div>
  </div>
  <div class="prop"  id="prop3">
      <img src="/images/home_body/dweb_medicines.png" alt="">
      <div>
          <h3>Medicines</h3>
      <p>Essentials at your doorstep</p>
      </div>
  </div>
  <div class="prop"  id="prop4">
      <img src="/images/home_body/dweb_lab_tests.png" alt="">
      <div>
          <h3>Lab Tests</h3>
      <p>Sample pickup at your home</p>
      </div>
  </div>
  <div class="prop"  id="prop5">
      <img src="/images/home_body/dweb_surgeries.png" alt="">
      <div>
          <h3>Surgeries</h3>
      <p>Safe and trusted surgery center</p>
      </div>
  </div>
</div>
<hr>

<!-- consult -->
<div id="consult-heading">
  <div>
      <h2>Consult top doctors online for any health concern</h2>
  <p>Private online consultations with verified doctors in all specialists</p>
  </div>
  <div>
      <button id="specification">
          View All Specification
      </button>
  </div>
</div>
<div id="consult">
  <a href="">
      <div id="consult1">
          <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" alt="">
          <h3>Period Doubt or Pregnancy</h3>
          <p>Consult Now</p>
      </div>
  </a>
 <a href=""><div id="consult2">
     <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png" alt="">
     <h3>Acne,pimple or skin issue</h3>
     <p>Consult Now</p>
 </div></a> 
 <a href=""><div id="consult3">
  <img src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" alt="">
  <h3>Performance issue in bed</h3>
  <p>Consult Now</p>
 </div></a> 
 <a href=""><div id="consult4">
  <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png" alt="">
  <h3>Cold, cough or fever</h3>
  <p>Consult Now</p>
 </div></a> 
 <a href=""><div id="consult5">
  <img src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg" alt="">
  <h3>Child not feeling well</h3>
  <p>Consult Now</p>
 </div></a> 
 <a href=""><div id="consult6">
  <img src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png" alt="">
  <h3>Depression or anxiety</h3>
  <p>Consult Now</p>
 </div></a> 
</div>

<hr>
<div class="Medicine_subheader">
  <h2>Book an appointment for an in-clinic consultation</h2>
  <p>Find experienced doctors across all specialties</p>
</div>
<div class="sliding_medicine_images">
  <div class="sliding-data">
      <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" alt="">
      <div>
          <h4>Dentist</h4>
          <p>Teething troubles? Schedule a dental checkup</p>
      </div>
  </div>
  <div class="sliding-data">
      <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg" alt="">
      <div>
          <h4>Gynecologist/Obstetrician</h4>
          <p>Explor for women health pregancy and infertility treatments</p>
      </div>
  </div>
  <div class="sliding-data">
      <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg" alt="">
      <div>
          <h4>Dietitation/Nutrition</h4>
          <p>Get guidance on eating right weight management and sports nutrition</p>
      </div>
  </div>
  <div class="sliding-data">
      <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg" alt="">
      <div>
          <h4>Physiotherapist</h4>
          <p>Pilled a muscles? Get is treated by a trained physiotherapist</p>
      </div>
  </div>
  <div class="sliding-data">
      <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg" alt="">
      <div>
          <h4>General Surgeon</h4>
          <p>Need to get operated?Find the right surgeon</p>
      </div>
  </div>
  <div class="sliding-data">
      <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg" alt="">
      <div>
          <h4>Orthopedist</h4>
          <p>For bones and Joints issues spinal injuries and More</p>
      </div>
  </div>
  <div class="sliding-data">
      <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg" alt="">
      <div>
          <h4>General physician</h4>
          <p>Find the right family doctor in your neighbourhood</p>
      </div>
  </div>
  <div class="sliding-data">
      <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg" alt="">
      <div>
          <h4>Pediatrician</h4>
          <p>Child specialist and doctor for infant</p>
      </div>
  </div>
  <div class="sliding-data">
      <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gastroenterologist@2x.jpg" alt="">
      <div>
          <h4>Gastroenterologist</h4>
          <p>Explore for issues related to digetstive system liver and pancrease</p>
      </div>
  </div>
</div>
</div>
<div id="line-clear">
  <hr>
</div>
<!--  -->
<div class="article">
  <div id="article">
      <div id="article1">
          <h1>Read top articles from health experts</h1>
          <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
          <button id="article-button">See all articles</button>
      </div>
      <div id="article2">
          <a href="">
              <img src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910" alt="">
              <div>
                  <p>CORONAVIRUS</p>
                  <h3>12 Coronavirus Myths and Facts That You Should Be Aware Of</h3>
                  <p>Dr.Diana Borgio</p>
              </div>
          </a>
      </div>
      <div id="article3">
          <a href="">
              <img src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c" alt="">
          <div>
              <p>VITAMINS AND SUPPLIMENTS</p> 
              <h3>Eating Right to built immunity Against Cold and Viral Infections</h3>
              <p>Dr.Diana Borgio</p>
          </div>
          </a>
      </div>
  </div>
</div>
<div id="line-clear">
  <hr>
</div>

<div id="slider-auto">
  <h1>What our users have to say</h1>
  <div>
      <div class="slideshow-container">
          <div class="mySlides fade">
              <div>
                  <p>Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.</p>
                  <h3>Amit Sharma</h3>
              </div>
          </div>
          
          <div class="mySlides fade">
            <div>
                  <p>Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.</p>
                  <h3>Jyothi Bhatia</h3>
              </div>
          </div>
          
          <div class="mySlides fade">
              <div>
                  <p>Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way</p>
                  <h3>Avinash Kumar</h3>
              </div>
          </div>
          <br>

      <div style="text-align:center">
      <span class="dot"></span> 
      <span class="dot"></span> 
      <span class="dot"></span> 
      </div>
          
      </div>
  </div>
</div>
<div id="line-clear">
  
</div>
<div id="downlaord">
  <div id="down1">
      <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="">
  </div>
  <div id="down2">
      <h1>Download the Practo app</h1>
      <p>Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
      <h3>Get the link to download the app</h3>
      <div id="phone">
          <div>
              <h3>+91</h3>
              <input type="number" id="phone" placeholder="Enter the phone Number">
          </div>
          <button id="send-sms">Send SMS</button>
      </div>
      <div id="app">
          <img  src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png" alt="">
          <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png" alt="">
      </div>
  </div>
</div>
<div id="line-clear">

</div>`
}