import React, { useState, useEffect } from "react";
import { useUserProfile, useUpdateUserProfile } from "../Api/profilePageApi"; // Import the API hooks
import "./profile.css"; // Import the separate CSS file

export default function ProfilePage() {
  const { data: userProfile, isLoading, isError } = useUserProfile(); // Fetch user profile data
  const updateUserProfileMutation = useUpdateUserProfile(); // Mutation for updating profile

  const [user, setUser] = useState({
    email: "",
    password: "********",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    profilePictureUrl: "",
    preferredContactMethod: "",
    maritalStatus: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [resume, setResume] = useState(null);

  // Populate the user state when the profile data is fetched
  useEffect(() => {
    if (userProfile) {
      setUser({
        email: userProfile.email,
        password: "********",
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        phoneNumber: userProfile.phoneNumber,
        address: userProfile.address,
        city: userProfile.city,
        state: userProfile.state,
        postalCode: userProfile.postalCode,
        country: userProfile.country,
        dateOfBirth: userProfile.dateOfBirth,
        gender: userProfile.gender,
        nationality: userProfile.nationality,
        profilePictureUrl: userProfile.profilePictureUrl,
        preferredContactMethod: userProfile.preferredContactMethod,
        maritalStatus: userProfile.maritalStatus,
      });
    }
  }, [userProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the mutation to update the user profile
      await updateUserProfileMutation.mutateAsync(user);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching profile data.</div>;
  }

  return (
    <section className="profile-section">
      <div className="profile-container">
        <h1>Profile</h1>
        <form onSubmit={handleSubmit}>
          {/* Basic Information */}
          <div className="profile-section-group">
            <h2>Basic Information</h2>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                disabled
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                disabled
              />
            </div>
            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="profile-section-group">
            <h2>Contact Information</h2>
            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={user.city}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={user.state}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={user.postalCode}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={user.country}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Personal Information */}
          <div className="profile-section-group">
            <h2>Personal Information</h2>
            <div className="input-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={user.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Gender</label>
              <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="input-group">
              <label>Nationality</label>
              <input
                type="text"
                name="nationality"
                value={user.nationality}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Marital Status</label>
              <select
                name="maritalStatus"
                value={user.maritalStatus}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
              </select>
            </div>
          </div>

          {/* Profile Picture Upload */}
          <div className="profile-section-group">
            <h2>Profile Picture</h2>
            <div className="input-group">
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureUpload}
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="profile-section-group">
            <h2>Resume</h2>
            <div className="input-group">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeUpload}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="submit-button">
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </section>
  );
}