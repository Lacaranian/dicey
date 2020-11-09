
import React from 'react'
import '../App.css';

// Enum representing states
// Variable holds one value of enum
// One function per transition to go from one state to another

// React
function Profile() {
  // 0. Check if logged in, if not, goto signin
      // Login Token/Session (advice: general concepts > libraries)
      // C S
      // C: Hey log me in bro (username, password)
      // S: Okay dude, here you go (hands them a token)
      // C: (saves the token in cookies/localstorage/wherevs (lifetime a day or so)
      // C: on every request to server, includes token in the headers
      // S: to every request - if it has a VALID token, do the stuff for logged in people, otherwise tell them to log in already
      //
      // IMPORTANT: Requires a server that has secrets, and requires encryption HTTPS/TLS/SSL
  // 1. Fetch user profile data (login session/identity)
      // Profile name (name of character)
      // Profile picture (base64 encoding)
      // Character data (race, class, age, etc) (sumary only, leave the deets for the character page)
  // 2. Plugin to Profile component fella
  return (
    <div className="App">
    </div>
  );
}


export default Profile;

// 1) Not logged in
// 2) Logging in
// 3) Logged in

// (1,2,3) * (1,2,3) = 3 * 3 = 9

// Not logged in -> Not logged in
// Logging in -> Logging in (caveat - timeouts, 2 -> 1) (2 -> 2)
// Logged in -> Logged in

// 6

// 3 -> 2 ? Relog in? 3 -> 1 X
// 1 -> 3 Jump to logged in automagically? Nah

// Transitions
// Sending U/P to the server (1 -> 2)
// Logging in (unsuccessfully) (2 -> 1)
// Logging in (successfully) (2 -> 3)
// Logging out (3 -> 1)
