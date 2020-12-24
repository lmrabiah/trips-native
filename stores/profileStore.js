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

  updateProfile = async (updatedProfile) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);
      await instance.put(`/profile/${updatedProfile.id}`, formData);
      const profile = this.profiles.find(
        (profile) => profile.id === updatedProfile.id
      );
      for (const key in updatedProfile) profile[key] = updatedProfile[key];
      profile.image = URL.createObjectURL(updatedProfile.image);

      for (const key in profile) profile[key] = updatedProfile[key];
    } catch (error) {
      console.log("ProfileStore -> updateProfile -> error", error);
    }
  };

  getProfileById = (profileId) =>
    this.profiles.find((profile) => profile.id === profileId);
}

const profileStore = new ProfileStore();
profileStore.fetchProfile();
export default profileStore;
