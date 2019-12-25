import Amadeus from "amadeus";
import Geocode from "react-geocode";
import { clientId, clientSecret, googleKey } from "./config";

const amadeus = new Amadeus({
  clientId: clientId,
  clientSecret: clientSecret
});

export const getCoordinates = async address => {
  Geocode.setApiKey(googleKey);
  try {
    const response = await Geocode.fromAddress(address);
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
    return { lat, lng };
  } catch (err) {
    console.error(err);
  }
};

export const getHotels = async (coordinates, dates) => {
  try {
    const res = await amadeus.shopping.hotelOffers.get({
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      checkInDate: dates[0],
      checkOutDate: dates[1],
      radius: 20
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
