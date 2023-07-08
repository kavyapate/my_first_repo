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

// function sendMessageToAngularProject() {
// 	var message = {
// 		data: 'Hello from the Chrome extension!'
// 	};
// 	window.postMessage(message, '*');
// }

// document.getElementById('clickButton')?.addEventListener('click', sendMessageToAngularProject);

// function sendMessageToAngularProject() {
// 	var message = {
// 	  data: 'Hello from the Chrome extension!'
// 	};
// 	var angularProjectUrl = 'http://localhost:4205/';

// 	chrome.tabs.query({ url: angularProjectUrl }, function(tabs) {
// 		console.log("tabs ----->",tabs)
// 	  if (tabs && tabs.length > 0) {
// 		var angularProjectTab = tabs[0];
// 		chrome.tabs.sendMessage(angularProjectTab.id, message);
// 	  }
// 	});
//   }

//   document.getElementById('clickButton')?.addEventListener('click', sendMessageToAngularProject);

// const scrollDivToBottom = () => {

// 	// Assuming you want to incrementally scroll to positions from 0 to 1000 pixels with a delay of 500 milliseconds and smooth scrolling
// 	let position = 0;

// 	function scrollIncrementally() {
// 		if (position <= 10000) {
// 			const element = document.querySelector('#search-results-container');
// 			element.scrollTo({
// 				top: position,
// 				behavior: "smooth"
// 			});
// 			position += 100; // Increment the position value as desired
// 			setTimeout(scrollIncrementally, 500); // Set the delay between each scroll
// 		}
// 	}

// 	// Start the incremental scrolling after a delay of 2000 milliseconds (2 seconds)
// 	setTimeout(scrollIncrementally, 2000);
// };

// //   scrollDivToBottom('your-div-id');


// async function retrieveData() {
// 	let personName = '';
// 	let page_body = document.body;

// 	console.log('page_body -------------->', page_body);

// 	// const elements = document.querySelectorAll('.artdeco-entity-lockup__title > a > span');
// 	// const linkElement = document.querySelectorAll('.artdeco-entity-lockup__title > a');
// 	// var href = linkElement.getAttribute("href");

// 	// console.log('elements----------->', elements);
// 	// console.log("href------------>",href);
// 	var t = [];



// // Retrieve all div elements
// var divElements = document.querySelectorAll('.artdeco-entity-lockup--size-4');


// // Create an array to store the data objects

// // Iterate over each div element
// divElements.forEach(function(divElement) {
//   // Retrieve the anchor tag within the div
//   var anchorElement = divElement.querySelector('a');

//   // Retrieve the span element within the anchor tag
//   var spanElement = divElement.querySelector('.artdeco-entity-lockup__title > a > span[data-anonymize="person-name"]');

//   var attribute = divElement.querySelector('span[data-anonymize="title"]');

//   var imgElement = divElement.querySelector('img');
// //   var atribute = spanElement2.querySelector('span[data-anonymize="title"]');

//   // Create an object with the desired properties
//   var dataObject = {
//     profileDetaillink: `https://www.linkedin.com/${anchorElement.getAttribute('href')}`,
//     name: spanElement.textContent,
// 	designation: attribute.textContent,
// 	imglink:imgElement.getAttribute('src'),
//   };

//   // Add the object to the array
//   t.push(dataObject);
// });

// console.log("dataArray------------------>",t);

// 	// let page_title = document.title;
// 	// let page_h1_tag = '';

// 	// const page_h1 = document.querySelector('h1');
// 	// if (page_h1) {
// 	// 	page_h1_tag = page_h1.textContent;
// 	// }

// 	let data = JSON.stringify({
// 		// title: page_title,
// 		// h1: page_h1_tag,
// 		scrapData: t,
// 	});

// 	console.log('Data:', data);

// 	chrome.runtime.sendMessage(null, data);

// }

// setTimeout(async function () {
// 	await scrollDivToBottom();

// }, 1000);

// setTimeout(async() => {
// 	await retrieveData();
// }, 50000);



// new code

// variebles
var jobArray = []

// scroll to bottom function
const scrollDivToBottom = async () => {
    let totalHeight = document.querySelector(".jobs-search-results-list")?.scrollHeight
    // let position = 0;

    // function scrollIncrementally() {
    //   if (position <= 10000) {
    //     const element = document.querySelector(".jobs-search-results-list");
    //     element.scrollTo({
    //       top: position,
    //       behavior: "smooth",
    //     });
    //     position += 100;
    //     setTimeout(scrollIncrementally, 500);
    //   }
    // }

    // setTimeout(scrollIncrementally, 2000);

    return new Promise((resolve) => {
        let position = 0;

        function scrollIncrementally() {
          if (position < totalHeight) {
            console.log("position if")
            const element = document.querySelector(".jobs-search-results-list");
            element.scrollTo({
              top: position,
              behavior: "smooth",
            });
            position += 100;
            setTimeout(scrollIncrementally, 500);
          } else {
            console.log("position else")
            resolve(); // Resolve the promise when scrolling is complete
          }
        }

        setTimeout(scrollIncrementally, 2000);
      });
  };

StartScarping()


// start scarping function

async function StartScarping(){
    await scrollDivToBottom()
    let array = document.querySelectorAll("ul.scaffold-layout__list-container > li")
    // console.log("array -->",array)
    let arraylength = document.querySelectorAll("ul.scaffold-layout__list-container > li").length
    console.log("arraylength",arraylength);

    for(let i = 0; i < arraylength; i++){
        console.log("iiiiiiiiii",i + 1)
        console.log("arraylength",arraylength)
        // console.log("array[i] -->",array[i])

        let clickableEle = array[i].querySelector("div > div.job-card-container--clickable")
        // console.log("clickableEle -->",clickableEle)
        clickableEle.click()

        await WaitforTime()

        await savedata()

        if(i+1 == arraylength){
            goToNextPage()
        }
        // if (i == 4) {
            // savedata(array[i])
            // let ele = array[i]
            // let mydiv = ele.querySelector("div > div")
            // mydiv.click()
            // console.log(mydiv)
        // }
    }
}


// save job data function
function savedata(){
    let jobData = {
      "title" : '',
      "postLink" : '',
      "company_name" : '',
      "company_link" : '',
      // "description" : '',
      // "hiring_info" : {
      //   "username" : '',
      //   "profilelink" : '',
      //   "designation" : ''
      // }
    }
    return new Promise((resolve,reject) => {
        // console.log("jobdata",jobdata)

        // let mainEle = document.querySelector("div.jobs-details__main-content")
        // console.log("mainEle -->",mainEle)
        // let topMainEle = mainEle?.querySelector("div.jobs-unified-top-card__content--two-pane")
        // console.log("topMainEle -->",topMainEle)
        // let firstChildDiv = topMainEle?.querySelector("div:first-child")
        // console.log("firstChildDiv",firstChildDiv)


        // job title and link

        let jobTitle =  document?.querySelector("h2.jobs-unified-top-card__job-title")?.innerText
        console.log("jobTitle -->",jobTitle)
        // let jobPostLink = firstChildDiv?.querySelector("a")?.getAttribute("href")
        let jobPostLink = document?.querySelector("div.jobs-unified-top-card__content--two-pane")?.querySelector("div:first-child > a").getAttribute("href")
        jobPostLink = "https://www.linkedin.com" + jobPostLink
        console.log("jobPostLink -->",jobPostLink)
        // let jobTitle =  topMainEle?.querySelector("h2.jobs-unified-top-card__job-title")?.innerText


        // company detail and link

        // let mainComDiv = topMainEle?.querySelector("div.jobs-unified-top-card__primary-description")

        // let companyLink = mainComDiv?.querySelector("div > a")?.getAttribute("href")
        // console.log("companyLink",companyLink)

        // let companyName = mainComDiv?.querySelector("div > a")?.innerText
        // console.log("companyName",companyName)

        let companyName = document.querySelector("div.jobs-unified-top-card__primary-description > div > a")?.innerText
        console.log("companyName -->",companyName)
        let companyLink = document.querySelector("div.jobs-unified-top-card__primary-description > div > a")?.getAttribute("href")
        console.log("companyLink -->",companyLink)


        // hiring team profile
        let profileAvail = document?.querySelector("div.hirer-card__container")
        let profileLink;
        let profileUserName;
        let profileUserDesignation;
        if(profileAvail != undefined){
            profileLink = profileAvail?.querySelector("div.hirer-card__hirer-information > a")?.getAttribute("href")
            console.log("profileLink -->",profileLink)
            profileUserName = profileAvail?.querySelector("div.hirer-card__hirer-information > a > span.jobs-poster__name > strong")?.innerText
            console.log("profileUserName -->",profileUserName)
            profileUserDesignation = profileAvail?.querySelector("div.hirer-card__hirer-information > div.linked-area > div.hirer-card__hirer-job-title")?.innerText
            console.log("profileUserDesignation ---->",profileUserDesignation)
        }

        // job description
        let jobDescriptionAvail = document?.querySelector("div.jobs-description__content");
        let jobDescription;
        if(jobDescriptionAvail != undefined){
          jobDescription = document?.querySelector("article.jobs-description__container > div.jobs-description__content > div.jobs-box__html-content > span")?.innerHTML
          // console.log("jobDescription --->",jobDescription)
        }

        if(jobTitle != undefined){
          jobData.title = jobTitle
        }
        if(jobPostLink != undefined){
          jobData.postLink = jobPostLink
        }
        if(companyName != undefined){
          jobData.company_name = companyName
        }
        if(companyLink != undefined){
          jobData.company_link = companyLink
        }
        if(jobDescription != undefined){
          jobData.description = jobDescription
        }
        if(profileUserName != undefined){
          jobData.hiring_info.username = profileUserName
        }
        if(profileLink != undefined){
          jobData.hiring_info.profilelink = profileLink
        }
        if(profileUserDesignation != undefined){
          jobData.hiring_info.designation = profileUserDesignation
        }


        jobArray.push(jobData)
        console.log("jobArray --->",jobArray)
        // console.log("jobData -->",jobData)

        resolve()
    })
}


// wait for some time function
function WaitforTime(){
  console.log("wait for 3 sec...")
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve()
      },3000)
  })
}

function goToNextPage(){
    // let pageArray = document?.querySelectorAll("ul.artdeco-pagination__pages > li")
    // console.log("pageArray -->",pageArray)
    // let pageArrayLength = document?.querySelectorAll("ul.artdeco-pagination__pages > li")?.length
    // console.log("pageArrayLength -->",pageArrayLength)
      // Find the current active page
  let currentPage = document.querySelector('ul.artdeco-pagination__pages > li.artdeco-pagination__indicator--number.active');
  console.log("currentPage --->",currentPage)
  // Find the next page button
  if(currentPage.nextElementSibling){
    let nextPageButton = currentPage.nextElementSibling.querySelector('button');
    console.log("nextPageButton --->",nextPageButton)
    nextPageButton.click();
    StartScarping()
  }
  else{
    console.log("no sibling found !!")
  }
  // Simulate a click event on the next page button


}

chrome.runtime.sendMessage({ action: 'saveData', jobArray });
// function scrollPageToBottom(){
//     // console.log(position)
//     // var div = document.querySelector("div.scaffold-layout__list");

//     if(position < 10000){
//         window.scrollTo(0, position);

//         position += 100;
//         setTimeout(() => {
//             scrollPageToBottom()
//        },2000)
//     }

//     // var scrollHeight = document.body.scrollHeight;
//     // var screenHeight = window.innerHeight;
//     // var currentPosition = 0;

//     // function scrollToBottom() {
//     //     currentPosition += screenHeight;
//     //     window.scrollTo(0, currentPosition);

//     //     // Check if we have reached the bottom of the page
//     //     if (currentPosition < scrollHeight) {
//     //       // Continue scrolling with a delay
//     //       setTimeout(scrollToBottom, 1000); // Adjust the delay as needed
//     //     }
//     // }

//     // scrollToBottom();


//     // var div = document.querySelector("div.scaffold-layout__list");
//     // console.log("div -->",div)
//     // console.log("div.scrollHeight -->",div.scrollHeight)
//     // div.scrollTop = div.scrollHeight;
//     // div.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
//     // div.scroll({
//     //     top : 0,
//     //     behavior : "smooth"
//     // })

// }

// function scrollPageToBottom() {

//     let element = document.querySelector("ul.scaffold-layout__list-container")
//     console.log("element -->",element.scrollHeight)

//     element.scrollTo({
//         top: element.scrollHeight,
//         behavior: "smooth"
//     });
//     // window.scroll(0, element.scrollHeight)
// 	// Assuming you want to incrementally scroll to positions from 0 to 1000 pixels with a delay of 500 milliseconds and smooth scrolling
// 	// let position = 0;

// 	// function scrollIncrementally() {
// 	// 	if (position <= 10000) {
// 	// 		var div = document.querySelector("div.scaffold-layout__list");
// 	// 		window.scrollTo({
// 	// 			top: position,
// 	// 			behavior: "smooth"
// 	// 		});
// 	// 		position += 100; // Increment the position value as desired
// 	// 		setTimeout(scrollIncrementally, 500); // Set the delay between each scroll
// 	// 	}
// 	// }

// 	// // Start the incremental scrolling after a delay of 2000 milliseconds (2 seconds)
// 	// setTimeout(scrollIncrementally, 2000);
// };



// let ExtensionBtn = document.getElementById('startNavigation')
// console.log("ExtensionBtn -->",ExtensionBtn)
// ExtensionBtn.click(() => {
// 	console.log("button clicked !!")
// })

// ExtensionBtn.addEventListener('click', async () => {
// 	console.log("button clicked !!")
// 	await startScraping()
// })


// async function startScraping() {
// 	await scrollPage()
// 	setTimeout(() => {
// 		console.log("start scraping data !!")
// 	},5000)
// }


// function scrollPage() {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 		  console.log("scroll done !!");
// 		  resolve();
// 		}, 7000);
// 	});
// }
