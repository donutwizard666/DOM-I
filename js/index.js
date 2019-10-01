
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Bar //
let links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
  links[i].textContent = siteContent.nav[`nav-item-${i + 1}`]; 
  //siteContent = where ALL the info we want is stored *.nav*  is the child, where our links are stored. *[nav-item-* is the start of each item in the nav bar that we want, the only differ in the last part, which is where a string template literal comes into play, our loop is adding 1 each time, because we told it to, for as long as the links.length is. ${i + 1} is we told it to start on 0, which is our first item, and go up by 1, and each time, it is 'returning' nav-item-1 then nav-item-2 and so on
}

links.forEach( a => {
  a.style.color = 'green';
});

const parentElement = document.querySelector('nav');

const newElement = document.createElement('a');
  newElement.textContent = 'Blog';
  newElement.href="#";

parentElement.append(newElement);

const newElementTwo = document.createElement('nav');
newElementTwo.textContent = 'News';
newElementTwo.href="#";

parentElement.prepend(newElementTwo);




// CTA //

const ctaOne = document.querySelector('.cta-text h1');
ctaOne.textContent = 'Dom is Awesome';

const btn = document.querySelector('button');
btn.textContent = 'Get Started';

const codeImg = document.getElementById("cta-img");
codeImg.setAttribute('src', siteContent["cta"]["img-src"])
codeImg.alt = "image of code snippet";


// Main Content //
const mainText = document.getElementsByTagName('h4');
  mainText[0].textContent = siteContent['main-content'] ['features-h4']
  mainText[1].textContent = siteContent['main-content'] ['about-h4']
  mainText[2].textContent = siteContent['main-content'] ['services-h4']
  mainText[3].textContent = siteContent['main-content'] ['product-h4']
  mainText[4].textContent = siteContent['main-content'] ['vision-h4']

const paragraphText = document.getElementsByTagName('p');
  paragraphText[0].textContent = siteContent['main-content']['features-content']
  paragraphText[1].textContent = siteContent['main-content']['about-content']
  paragraphText[2].textContent = siteContent['main-content']['services-content']
  paragraphText[3].textContent = siteContent['main-content']['product-content']
  paragraphText[4].textContent = siteContent['main-content']['vision-content']
  


const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
middleImg.alt = "code across screen";



// Contact //

const contact = document.querySelector('.contact');
contact.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4']
contact.getElementsByTagName('p')[0].textContent = siteContent['contact']['address']
contact.getElementsByTagName('p')[1].textContent = siteContent['contact']['phone']
contact.getElementsByTagName('p')[2].textContent = siteContent['contact']['email']

// Footer //

const footer = document.querySelector('footer');
  footer.textContent = 'Copyright Great Idea! 2018';

