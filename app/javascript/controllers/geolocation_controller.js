import { Controller } from '@hotwired/stimulus'
import { getDistance, convertDistance } from 'geolib';

export default class extends Controller {
    static targets = ['property'];

    connect() {
        // HTML5 geolocation API to get and calculate users location
        window.navigator.geolocation.getCurrentPosition((position) => { 
            // sets variable latitude and longitude to the current latitude and longitude
            this.element.dataset.latitude = position.coords.latitude;
            this.element.dataset.longitude = position.coords.longitude;

            //map through each property and get its distance from users location
            this.propertyTargets.forEach((propertyTarget) => {
                let distanceFrom = getDistance(
                    { latitude: position.coords.latitude, longitude: position.coords.longitude },
                    { latitude: propertyTarget.dataset.latitude, longitude: propertyTarget.dataset.longitude },
                )
                
                // distanceFrom is a method from the geolib gem that calculates "distance from" one point to another
                //data-distance-away is the element from index.html
                propertyTarget.querySelector('[data-distance-away]').innerHTML = `${Math.round(convertDistance(distanceFrom, 'km'))} kilometers away`;
            });
            
        })
    }
}