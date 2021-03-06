import instance from "./instance";
import { makeAutoObservable } from "mobx";

class ProfileStore {
  profiles = [];
  loading = true;

  userProfile = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProfile = async () => {
    try {
      const response = await instance.get("/profile");
      console.log(response.data);
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
      console.log("============");
      console.log(formData);
      await instance.put(`/profile`, formData);
      const profile = this.userProfile;
      for (const key in updatedProfile) profile[key] = updatedProfile[key];
      profile.image = URL.createObjectURL(updatedProfile.image);
    } catch (error) {
      console.log("ProfileStore -> updateProfile -> error", error);
    }
  };

  getProfileById = (profileId) =>
    this.profiles.find((profile) => profile.id === profileId);

  createProfile = async (newProfile) => {
    try {
      const formData = new FormData();
      for (const key in newProfile) formData.append(key, newProfile[key]);
      const res = await instance.post(`/profile/${user.id}/profiles`, formData);
      this.profiles.push(res.data);
      user.profiles.push({ id: res.data.id });
    } catch (error) {
      console.log("ProfileStore -> createProfile -> error", error);
    }
  };
}
const profileStore = new ProfileStore();
profileStore.fetchProfile();
export default profileStore;
