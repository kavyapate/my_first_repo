// list of urls to navigate
// let urls_list = [
// 	'https://www.linkedin.com/jobs/search/?currentJobId=3584596060&f_JT=C&f_WT=2&keywords=ui%2Fux%20designer%20OR%20react.js%20OR%20angular%20AND%20remote%20AND%20c2c',
// 	// 'https://www.linkedin.com/sales/search/people?page=2&savedSearchId=50600490&sessionId=xFWpyqsFTPevRRsBGXcK1Q%3D%3D',
// 	// 'https://www.linkedin.com/sales/search/people?page=3&savedSearchId=50600490&sessionId=xFWpyqsFTPevRRsBGXcK1Q%3D%3D',
// 	// 'https://www.linkedin.com/sales/search/people?page=4&savedSearchId=50600490&sessionId=xFWpyqsFTPevRRsBGXcK1Q%3D%3D',
// 	// 'https://www.linkedin.com/sales/search/people?page=5&savedSearchId=50600490&sessionId=xFWpyqsFTPevRRsBGXcK1Q%3D%3D'
// ];

// start navigation when #startNavigation button is clicked
// startNavigation.onclick = async function(element) {
// 	// query the current tab to find its id
// 	chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
// 		for(let i = 0; i < urls_list.length; i++) {
// 			// navigate to next url
// 			await goToPage(urls_list[i], i + 1, tabs[0].id);

// 			// wait for 5 seconds
// 			await waitSeconds(5);
// 		}

// 		// navigation of all pages is finished
// 		alert('Navigation Completed');
// 		saveDataToFile();
// 	});
// };


startNavigation.onclick = async function(element) {
	// query the current tab to find its id
	chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
	  const currentUrl = tabs[0].url;

	  // navigate to the current URL
	  await goToPage(currentUrl, 1, tabs[0].id);

	  // wait for 5 seconds
	  await waitSeconds(5);
	//   chrome.tabs.sendMessage(tabs[0].id, { action: 'scrapeData' });
	  // navigation is finished, scrape data from the current page
	//   scrapeCurrentPage(tabs[0].id);
	  alert('Navigation Completed');
		saveDataToFile();
	});
  };

var allData = [];

async function goToPage(url, url_index, tab_id) {
	return new Promise(function(resolve, reject) {
		// update current tab with new url
		chrome.tabs.update({url: url});

		// fired when tab is updated
		chrome.tabs.onUpdated.addListener(function openPage(tabID, changeInfo) {
			// tab has finished loading, validate whether it is the same tab
			if(tab_id == tabID && changeInfo.status === 'complete') {
				// remove tab onUpdate event as it may get duplicated
				chrome.tabs.onUpdated.removeListener(openPage);

				// fired when content script sends a message
				chrome.runtime.onMessage.addListener(function getDOMInfo(message) {
					// remove onMessage event as it may get duplicated
					chrome.runtime.onMessage.removeListener(getDOMInfo);

					// save data from message to the allData array
					let json_data = {
						// title: JSON.parse(message).title,
						scrapData: JSON.parse(message).scrapData,
						// h1: JSON.parse(message).h1,
						// url: url
					};
					allData.push(json_data);

					// resolve Promise after content script has executed
					resolve();
				});

				// execute content script
				chrome.tabs.executeScript(tab_id,{ file: 'test.js' });
			}
		});
	});
}

// Save allData to a single JSON file
function saveDataToFile() {
	let json_data = JSON.stringify(allData);
	console.log("json_data-------------->",json_data);
	let blob = new Blob([json_data], {type: "application/json;charset=utf-8"});
	let objectURL = URL.createObjectURL(blob);

	chrome.downloads.download({ url: objectURL, filename: 'all_data.json', conflictAction: 'overwrite' });
}

// async function to wait for x seconds
async function waitSeconds(seconds) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve();
		}, seconds * 1000);
	});
}
