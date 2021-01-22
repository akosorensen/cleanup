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

Errors debugged:

1. "Setting a timer for a long period of time" Warning
   a. Navigate to your node_modules/react-native/Libraries/Core/Timers/JSTimers.js file.
   b. Look for the variable MAX_TIMER_DURATION_MS
   c. Change its value to 10000 \* 1000
   Reference: https://stackoverflow.com/questions/60918903/setting-a-timer-for-a-long-period-of-time-react-native-firebase-issue
