import instance from "./instance";
import { makeAutoObservable } from "mobx";

class ProfileStore {
  profiles = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProfile = async () => {
    try {
      const response = await instance.get("/profile");
      this.profiles = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ProfileStore -> fetchProfile -> error", error);
    }
  };
  getProfileById = (profileId) =>
    this.profiles.find((profile) => profile.id === profileId);
}

const profileStore = new ProfileStore();
profileStore.fetchProfile();
export default profileStore;
