# WoW Character Guide

## A helpful tool for anyone who plays World of Warcraft Classic, this is a web application that guides players on how their class plays, gear to look for, zones to go to - all based on the user's character level, class, race, and faction!

When leveling a character in World of Warcraft, it takes a long time to get to max level.  New players and veterans alike, sometimes you need help figuring out where to quest, or what gear to look out for.  I created this app to be a quick reference that simply gives me a quick list of Zones and Gear to go for based on my current level.  I figure that could be of use to anyone who plays the game so I want it publicly available.

I also wanted to include a place for a quick summary of each class playstyle and feature prominent guides, content, and creators related to that class.  I'm simply looking for guides online and adding them to the site, but I look forward to users allowing me to share their content on the site too!

### The Web Application

This application is built with NextJS, all of the content on the site is managed by me via FaunaDB and Netlify, and I'm gathering the raw data via the Blizzard API, and other sites like Wowhead and other WoW databases.  My goal for the application is to gain users who enjoy the app and get use from it.

#### Web Features and Logic

- User Input
  - Character
    - Name
    - Faction
    - Race
    - Level
 - Display
   - Character List
     - Saved Character
       - Select
       - Edit
       - Delete
     - Add Character
   - Zones
     - Level Range
     - Territory
     - Sort by Type
   - Gear
     - Sort by Slot
       - Level
       - Rarity
       - Name
       - Link
       - Tooltip
   - Guides

##### Future Wishlist Features
- Login/Save
- Export as PDF
- Talent Calculator
- In-game Addon / Character Profile Integration
- Character Sheets / Stats
- Gear Stats and Comparison
