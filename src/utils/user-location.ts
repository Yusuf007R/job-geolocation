import { useHomeStore } from '../stores/use-home-store';

export default () => {
  navigator.geolocation.getCurrentPosition(function (position) {
    useHomeStore.setState({
      mapCenter: { lat: position.coords.latitude, lng: position.coords.longitude },
    });
  });
};
