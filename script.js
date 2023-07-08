

// setTimeout(function() {
// 	let personName = '';
// 	let page_body = document.body;

// 	console.log('page_body -------------->', page_body);

// 	const elements = document.querySelectorAll('.artdeco-entity-lockup__title > a > span');
// 	console.log('elements----------->', elements);
// 	var t = [];

// 	for (let i = 0; i < elements.length; i++) {
// 	  const element = elements[i];
// 	  let innerTextms = element.textContent;
// 	  t.push(innerTextms);
// 	}

// 	console.log('t ------------->', t);

// 	let page_title = document.title;
// 	let page_h1_tag = '';

// 	const page_h1 = document.querySelector('h1');
// 	if (page_h1) {
// 	  page_h1_tag = page_h1.textContent;
// 	}

// 	let data = JSON.stringify({
// 	  title: page_title,
// 	  h1: page_h1_tag,
// 	  personName: t,
// 	});

// 	console.log('Data:', data);

// 	chrome.runtime.sendMessage(null, data);
//   }, 10000);

// async function scrollToBottom() {
// 	await new Promise((resolve) => {
// 	  const distance = 1000;
// 	  const delay = 100;

// 	  const handleScroll = () => {
// 		const scrollHeight = document.body.scrollHeight;
// 		console.log("scrollHeight------->",scrollHeight);
// 		const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
// 		console.log("scrollTop---------->",scrollTop);
// 		const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// 		if (scrollTop + windowHeight >= scrollHeight) {
// 		  clearInterval(timer);
// 		  window.removeEventListener('scroll', handleScroll);
// 		  resolve();
// 		}
// 	  };

// 	  const timer = setInterval(() => {
// 		window.scrollBy(0, distance);
// 		handleScroll();
// 	  }, delay);

// 	  window.addEventListener('scroll', handleScroll);
// 	const targetDiv = document.querySelector('#search-results-container > div > ol');
// 	targetDiv.scrollIntoView({ behavior: 'smooth' });

// 	});
//   }

// const scrollDivToBottom = (divId) => {
// 	const targetDiv = document.getElementById(divId);
// 	if (!targetDiv) {
// 	  console.error(`Element with ID "${divId}" not found.`);
// 	  return;
// 	}

// 	const distance = 1000; // Set the distance to scroll
// 	const delay = 100; // Set the delay between scroll increments

// 	const timer = setInterval(() => {
// 	  targetDiv.scrollTop += distance;
// 	  if (targetDiv.scrollTop + targetDiv.clientHeight >= targetDiv.scrollHeight) {
// 		clearInterval(timer);
// 	  }
// 	}, delay);
//   };

//   scrollDivToBottom('your-div-id');

//   async function retrieveData() {
// 	let personName = '';
// 	let page_body = document.body;

// 	console.log('page_body -------------->', page_body);

// 	const elements = document.querySelectorAll('.artdeco-entity-lockup__title > a > span');
// 	console.log('elements----------->', elements);
// 	var t = [];

// 	for (let i = 0; i < elements.length; i++) {
// 	  const element = elements[i];
// 	  let innerTextms = element.textContent;
// 	  t.push(innerTextms);
// 	}

// 	console.log('t ------------->', t);

// 	let page_title = document.title;
// 	let page_h1_tag = '';

// 	const page_h1 = document.querySelector('h1');
// 	if (page_h1) {
// 	  page_h1_tag = page_h1.textContent;
// 	}

// 	let data = JSON.stringify({
// 	  title: page_title,
// 	  h1: page_h1_tag,
// 	  personName: t,
// 	});

// 	console.log('Data:', data);

// 	chrome.runtime.sendMessage(null, data);
//   }

//   setTimeout(async function() {
// 	await scrollDivToBottom();
// 	await retrieveData();
//   }, 3000);

// setTimeout(function() {
// 	let personName = '';
// 	let page_body = document.body;

// 	console.log('page_body -------------->', page_body);

// 	const elements = document.querySelectorAll('.artdeco-entity-lockup__title > a > span');
// 	console.log('elements----------->', elements);
// 	var t = [];

// 	for (let i = 0; i < elements.length; i++) {
// 	  const element = elements[i];
// 	  let innerTextms = element.textContent;
// 	  t.push(innerTextms);
// 	}

// 	console.log('t ------------->', t);

// 	let page_title = document.title;
// 	let page_h1_tag = '';

// 	const page_h1 = document.querySelector('h1');
// 	if (page_h1) {
// 	  page_h1_tag = page_h1.textContent;
// 	}

// 	let data = JSON.stringify({
// 	  title: page_title,
// 	  h1: page_h1_tag,
// 	  personName: t,
// 	});

// 	console.log('Data:', data);

// 	chrome.runtime.sendMessage(null, data);
//   }, 10000);

// async function scrollToBottom() {
// 	await new Promise((resolve) => {
// 	  const distance = 1000;
// 	  const delay = 100;

// 	  const handleScroll = () => {
// 		const scrollHeight = document.body.scrollHeight;
// 		console.log("scrollHeight------->",scrollHeight);
// 		const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
// 		console.log("scrollTop---------->",scrollTop);
// 		const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// 		if (scrollTop + windowHeight >= scrollHeight) {
// 		  clearInterval(timer);
// 		  window.removeEventListener('scroll', handleScroll);
// 		  resolve();
// 		}
// 	  };

// 	  const timer = setInterval(() => {
// 		window.scrollBy(0, distance);
// 		handleScroll();
// 	  }, delay);

// 	  window.addEventListener('scroll', handleScroll);
// 	const targetDiv = document.querySelector('#search-results-container > div > ol');
// 	targetDiv.scrollIntoView({ behavior: 'smooth' });

// 	});
//   }

const scrollDivToBottom = () => {
  // Assuming you want to incrementally scroll to positions from 0 to 1000 pixels with a delay of 500 milliseconds and smooth scrolling
  let position = 0;

  function scrollIncrementally() {
    if (position <= 10000) {
      const element = document.querySelector(".jobs-search-results-list");
      element.scrollTo({
        top: position,
        behavior: "smooth",
      });
      position += 100; // Increment the position value as desired
      setTimeout(scrollIncrementally, 500); // Set the delay between each scroll
    }
  }

  // Start the incremental scrolling after a delay of 2000 milliseconds (2 seconds)
  setTimeout(scrollIncrementally, 2000);
};


async function retrieveData() {
  let personName = "";
  let page_body = document.body;

  console.log("page_body -------------->", page_body);

  // const elements = document.querySelectorAll('.artdeco-entity-lockup__title > a > span');
  // const linkElement = document.querySelectorAll('.artdeco-entity-lockup__title > a');
  // var href = linkElement.getAttribute("href");

  // console.log('elements----------->', elements);
  // console.log("href------------>",href);
  var t = [];

  // Retrieve all div elements
  var divElements = document.querySelectorAll(".artdeco-entity-lockup--size-4");
  // console.log("mansisona................",divElements);

  // Create an array to store the data objects

  // Iterate over each div element
  divElements.forEach(function (divElement) {
    // Retrieve the anchor tag within the div
    var anchorElement = divElement.querySelector(
      ".artdeco-entity-lockup__title > a"
    );
    var companyElement = divElement.querySelector(
      ".artdeco-entity-lockup__subtitle > span"
    );
    var countryElement = divElement.querySelector(
      "ul.job-card-container__metadata-wrapper li.job-card-container__metadata-item"
    );
    // Retrieve the span element within the anchor tag
    var spanElement = divElement.querySelector(
      ".artdeco-entity-lockup__title > a"
    );

    //   var attribute = divElement.querySelector('span[data-anonymize="title"]');

    //   var imgElement = divElement.querySelector('img');
    //   var atribute = spanElement2.querySelector('span[data-anonymize="title"]');

    // Create an object with the desired properties
    var dataObject = {
      profileDetaillink: `www.linkedin.com/${anchorElement.getAttribute(
        "href"
      )}`.trim(),
      name: spanElement.textContent.trim(),
      // designation: attribute.textContent,
      // imglink:imgElement.getAttribute('src'),
      companyName: companyElement.textContent.trim(),
      countryName: countryElement.textContent.trim(),
    };

    // Add the object to the array
    t.push(dataObject);
  });

  console.log("dataArray------------------>", t);

  // let page_title = document.title;
  // let page_h1_tag = '';

  // const page_h1 = document.querySelector('h1');
  // if (page_h1) {
  // 	page_h1_tag = page_h1.textContent;
  // }

  let data = JSON.stringify({
    // title: page_title,
    // h1: page_h1_tag,
    scrapData: t,
  });

  console.log("Data:", data);

  chrome.runtime.sendMessage(null, data);
}

// function getLastLiContent() {
//   const ulElements = document.querySelectorAll('.artdeco-pagination__pages');
//   console.log("ulElements------------>", ulElements);

//   // Iterate over each <ul> element
//   for (let i = 0; i < ulElements.length; i++) {
//     const ulElement = ulElements[i];

//     // Retrieve the last <li> element within the current <ul>
//     const lastLiElement = ulElement.querySelector('li:last-child');

//     // Check if the last <li> element exists
//     if (lastLiElement) {
//       // Access the content of the last <li> element
//       const lastLiContent = lastLiElement.textContent.trim();
//       console.log('Last <li> content:', lastLiContent);
//     } else {
//       console.log('No <li> elements found in the current <ul>.');
//     }
//   }
// }

// const liElements = document.querySelector('.artdeco-pagination__pages');
// const liContents = [];

// function retrieveLiContents() {
//   liElements.forEach((liElement) => {
//     const content = liElement.textContent.trim();
//     liContents.push(content);

//     if (content === '…') {
//       // Simulate a click event on the ellipsis element
//       const ellipsisButton = liElement.querySelector('button');
//       ellipsisButton.click();

//       // Wait for the content to load (adjust the timeout value as needed)
//       setTimeout(() => {
//         const updatedLiElements = ulElement.querySelectorAll('li');
//         updatedLiElements.forEach((updatedLiElement) => {
//           const updatedContent = updatedLiElement.textContent.trim();
//           if (updatedContent !== '…') {
//             liContents.push(updatedContent);
//           }
//         });

//         // Scroll to the next page
//         window.scrollTo(0, document.body.scrollHeight);

//         // Call the function recursively to continue retrieving li contents
//         retrieveLiContents();
//       }, 1000); // Adjust the timeout value as needed
//     }
//   });

//   console.log(liContents);
// }

// // Call the function to retrieve the li contents
// retrieveLiContents();

// // Call the function to get the last <li> content
// getLastLiContent();


setTimeout(async function () {
  await scrollDivToBottom();
}, 1000);

setTimeout(async () => {
  await retrieveData();
}, 50000);
