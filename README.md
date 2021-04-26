# WoW Character Guide

[![WoW Character Guide](https://res.cloudinary.com/david-torres-design/image/upload/w_1676,h_1036,c_fill/v1619421531/wow-character-guide/gitrepo_niopos.jpg)](https://wow-character-guide.netlify.app/)

## A helpful tool for anyone who plays World of Warcraft Classic, this is a web application that guides players on how their class plays, gear to look for, zones to go to - all based on the user's character level, class, race, and faction!

When leveling a character in World of Warcraft, it takes a long time to get to max level. New players and veterans alike, sometimes you need help figuring out where to quest, or what gear to look out for. I created this app to be a quick reference that simply gives me a quick list of Zones and Gear to go for based on my current level. I figure that could be of use to anyone who plays the game so I want it publicly available.

I also wanted to include a place for a quick summary of each class playstyle and feature prominent guides, content, and creators related to that class. I'm simply looking for guides online and adding them to the site, but I look forward to users allowing me to share their content on the site too!

### The Web Application

This application is built with NextJS, all of the content on the site is managed by me via FaunaDB and Netlify, and I'm gathering the raw data via the Blizzard API, and websites like Wowhead and other WoW databases. I am not using web scraping software. My goal for the application is to gain users who enjoy the app and get use from it, while I learn more about programming web apps, working with APIs, and building useful tools.

#### Web Features and Logic

- User Input
  - --Character--
    - Name
    - Faction
    - Race
    - Level
- Display
  - --Character List--
    - --Saved Character--
      - --Select--
      - --Edit--
      - --Delete--
    - --Add Character--
  - --Zones--
    - --Level Range--
    - --Territory--
    - --Sort by Type--
  - Gear (need to gather all class gear)
    - --Sort by Slot--
      - --Level--
      - --Rarity--
      - --Name--
      - --Link--
      - --Tooltip--
  - Guides (need to gather all class guides)
    - Summary
    - Resource
    - Team Roles
    - Primary Stats
    - Secondary Stats
    - Specs
    - Weapon Types
    - Armor Types
    - Class Guide Links
    - Creator Links

##### Future Wishlist Features

- Login/Save (partially done, app is using localstorage/useState integration)
- Export as PDF
- Talent Calculator
- In-game Addon / Character Profile Integration
- Character Sheets / Stats
- Gear Stats and Comparison

--
This website is a personal development project, it is not affiliated with Activision, Blizzard, or Wowhead. All content displayed and/or linked to are copyright by their respective owners. This is not a clone or meant to replicate an item database at all, it's just a fansite coding project!
