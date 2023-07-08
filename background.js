// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.action === 'saveData') {
	  // Forward the data to the backend server
	  sendDataToBackend(request.data);
	}
  });

  // Function to send data to the backend server
  function sendDataToBackend(data) {
	// Make a POST request to your backend API endpoint
	fetch('http://localhost:3000/api/saveData', {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify(data),
	})
	  .then(response => response.json())
	  .then(result => {
		console.log('Data saved to MongoDB:', result);
	  })
	  .catch(error => {
		console.error('Failed to save data to MongoDB:', error);
	  });
  }
