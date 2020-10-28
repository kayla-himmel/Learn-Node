function autocomplete(input, latInput, lngInput) {
  // in there is no input on the page, return out of the function
  if(!input) return;

  // variable to call the typed input against the Google Maps API
  const dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  })

  // Prevent default on keypress 'Enter' keypress
  input.on('keydown', (e) => {
    if(e.keyCode === 13) e.preventDefault();
  })
}

export default autocomplete;
