'use client'

import React from 'react';
import { useImmer } from 'use-immer';

const UserProfile = () => {
    // Initializing user profile state with useImmer and default values
    const [userProfile, updateUserProfile] = useImmer({
      name: 'Mary Jane',
      email: 'mary@qq.com',
      contactDetails: {
        phone: '123-456',
        address: '123 S St'
      },
      preferences: {
        newsletter: false,
        notifications: true
      }
    });
  
    const updateContactDetails = (field, value) => {
      updateUserProfile(draft => {
        draft.contactDetails[field] = value;
      });
    };
  
    const toggleNewsletterSubscription = () => {
      updateUserProfile(draft => {
        draft.preferences.newsletter = !draft.preferences.newsletter;
      });
    };
  
    return (
      <div>
        <h1>User Profile</h1>
  
        <div>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Phone:</strong> {userProfile.contactDetails.phone}</p>
          <p><strong>Address:</strong> {userProfile.contactDetails.address}</p>
          <p><strong>Newsletter Subscription:</strong> {userProfile.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}</p>
        </div>
  
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            value={userProfile.contactDetails.phone}
            onChange={(e) => updateContactDetails('phone', e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={userProfile.contactDetails.address}
            onChange={(e) => updateContactDetails('address', e.target.value)}
          />     
        </div>
  
        <div>
          <button onClick={toggleNewsletterSubscription}>Change Subscription</button>
        </div>
  
  
      </div>
    );
  };

export default UserProfile;