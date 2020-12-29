import { makeAutoObservable } from "mobx";
import authStore from "./authStore";
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

      this.trips = this.trips.filter((trip) => trip.id !== tripId);
    } catch (error) {
      console.error(error);
    }
  };

  // creatTrip = async (newTrip, user) => {
  //   try {
  //     const formData = new FormData();

  //     for (const key in newTrip) formData.append(key, newTrip[key]);
  //     const res = await instance.post(`/trips`, formData);
  //     res.data.user = { usename: authStore.user.usename };
  //     this.trips.push(res.data);
  //   } catch (error) {
  //     console.error(console.error);
  //   }
  // };
  creatTrip = async (newTrip) => {
    try {
      const response = await instance.post("/trips", newTrip);
      this.trips.push(response.data);
    } catch (error) {
      console.error("tripStore --> addTrip", error);
    }
  };

  updateTrip = async (updatedTrip) => {
    try {
      const formData = new FormData();
      for (const key in updatedTrip) formData.append(key, updatedTrip[key]);
      const res = await instance.put(`/trips/${updatedTrip.id}`, formData);
      const trip = this.trips.find((trip) => trip.id === updatedTrip.id);
      for (const key in trip) trip[key] = updatedTrip[key];
      trip.image = URL.createObjectURL(updatedTrip.image);
    } catch (error) {
      console.log("TripStore -> updateTrip -> error", error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
