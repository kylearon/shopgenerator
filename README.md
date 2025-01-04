# shopgenerator
Star Wars RPG Shop Generator for Edge of the Empire

Building

Run Expo:
npx expo start

This should start Metro and give a set of options.

If running locally on a phone for testing, make sure it is 'Using Expo Go'. You may need to press 's' to switch to Expo Go.

Then press 'a' to install on the plugged-in android device.

Releasing

Update app.json and package.json with the new version.
Run 'npm install' to update package-lock.json
Commit the new version numbers to git.

Build installable test distribution:
eas build -p android --profile preview