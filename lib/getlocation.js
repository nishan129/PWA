function getUserLocation() {
    // Check if the Geolocation API is supported
    if (navigator.geolocation) {
      // Use the getCurrentPosition method to get the current position
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    // Extract the latitude and longitude from the position object
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    // Display the coordinates
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }
  
  function showError(error) {
    // Handle different types of errors
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
  
  // Call the function to get the user location
  getUserLocation();
  