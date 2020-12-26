import { makeAutoObservable } from "mobx";
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  getTripId = (tripId) => this.trips.find((trip) => trip.id === tripId);

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.error("Tripstore -> fetchTrips -> error", error);
    }
  };

  deleteTrip = async (tripId, user) => {
    try {
      await instance.delete(`/trips/${tripId}`);

      const newTrips = user.trips.filter((trip) => trip.id !== tripId);
      user.trips = newTrips;
      this.trips = this.trips.filter((trip) => trip.id !== tripId);
    } catch (error) {
      console.error(error);
    }
  };

  creatTrip = async (newTrip, user) => {
    // newTrip.slug = slugify(newTrip.name);
    // newTrip.id = this.trips[this.trips.length - 1].id + 1;
    // this.trips.push(newTrip);

    try {
      const formData = new FormData();

      for (const key in newTrip) formData.append(key, newTrip[key]);
      const response = await instance.post(`/trips`, formData);
      this.trips.push(response.data);
      //   store.trips.push({ id: response.data.id });
    } catch (error) {
      console.error(console.error);
    }
  };

  updateTrip = async (updatedTrip) => {
    try {
      const formData = new FormData();

      for (const key in updatedTrip) formData.append(key, updatedTrip[key]);
      console.log(updatedTrip.id);
      await instance.put(`/trips/${updatedTrip.id}`, formData);

      const trip = this.trips.find((trip) => trip.id === updatedTrip.id);
      for (const key in updatedTrip) trip[key] = updatedTrip[key];
      trip.img = URL.createObjectURL(updatedTrip.img);
    } catch (error) {
      console.error(
        "🚀 ~ file: tripStore.js ~ line 35 ~ TripStore ~ updateTrip ~ error",
        error
      );
    }
  };
}
const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
