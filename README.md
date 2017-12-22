
<h1 align="center">ROOMMATE FINDER</h1>
<p><em>This document provides general information on the Roommate Finder client-side application.  For more information about the Roommate Finder API, please see <a href="https://github.com/brianjb-lfl/buzz-kill-back/blob/master/README.md">Buzz-Kill back end</a>.</em></p>


Why Roommate Finder
-------------
There are many apps that can help you find an available room in your area, but only one app helps you find the perfect roommmate: Roommate Finder! Roommate Finder uses a series of personality questions to match you not only with a room in your area, but also with a perfect roommate. Simply fill out a quick questionaire and your feed will be populated with people looking for a roommate just like you! 

How it Works
------------
<table layout="fixed">
  <tr>
    <td width="55%">
      <p>Buzz-Kill's main screen displays colored boxes representing each patron in the establishment.</p>
    </td>
    <td width = "40%">
      <img src="/img/buzz-kill-main.png" max-height="240px" width="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>When a new patron arrives, the server includes simple, additional information required for the ongoing bac calculation.          </p>
    </td>
    <td>
      <img src="/img/buzz-kill-addpatron.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>The large numbers and color coding make the patron tile easy to understand.  Additionl information available includes seat location, time of stay, and a graphic representation of drink purchases.</p>
    </td>
    <td>
      <img src="/img/buzz-kill-patrondet.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>And if someone goes too far, help is a click away.</p>
    </td>
    <td>
      <img src="/img/buzz-kill-patronemergency.png" max-height="240px" witdh="auto">
    </td>
  </tr>
</table>

For local use
--------

```bash
# Clone repository
git clone https://github.com/jackseabolt/buzz-kill-frontend.git

# Change directory
cd buzz-kill-frontend

# Install NPM dependencies
npm install

# Start the server
npm start
```
