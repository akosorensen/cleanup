Sources:

1. Building Instagram Clone using React Native and Firebase
   https://www.youtube.com/watch?v=1hPgQWbWmEk
   Code: https://github.com/SimCoderYoutube/InstagramClone

2. Building a Coffee Map with React Native and Expo
   https://blog.expo.io/building-a-coffee-map-with-react-native-and-expo-a00b8f60a4c6

3. Create a React Native App with Google Map using Expo.io
   https://medium.com/nycdev/create-a-react-native-app-with-google-map-using-expo-io-68041252023d

4. Fetching data from Firestore
   https://stackoverflow.com/questions/52880387/fetching-data-from-firestore

5. React Native: Maps with Direction From Current Location
   https://medium.com/@princessjanf/react-native-maps-with-direction-from-current-location-ab1a371732c2

6. Introduction to react-native-maps
   https://blog.logrocket.com/introduction-to-react-native-maps/

7. react-native-maps documentation
   https://github.com/react-native-maps/react-native-maps

8. Get gps location from image #178
   https://github.com/react-native-image-picker/react-native-image-picker/issues/178

Errors debugged:

1. "Setting a timer for a long period of time" Warning
   a. Navigate to your node_modules/react-native/Libraries/Core/Timers/JSTimers.js file.
   b. Look for the variable MAX_TIMER_DURATION_MS
   c. Change its value to 10000 \* 1000
   Reference: https://stackoverflow.com/questions/60918903/setting-a-timer-for-a-long-period-of-time-react-native-firebase-issue
