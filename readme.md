Add the following to this `README.md` file:  
  * A short report explaining your design decisions and any challenges faced.
  * Documentation: Clear and concise documentation on how to run your application.
* userProfile is initialized with a structure that contains name, email, contactDetails (with phone and address), and preferences (with newsletter and notifications). updateContactDetails updates either the phone or address fields in contactDetails. It uses useImmer's draft to mutate the state. toggleNewsletterSubscription toggles the newsletter preference in preferences.