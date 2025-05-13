---
title: How to Contribute
---
Here is a little Guide for everyone who want to fork the Projekt and help making it better

To run the Wiki node.js is needed install it before doing anything else with this

### 1. Fork the Repo
Create a fork of the Repo to your github account

### 2. Download and Open
Download the Repo and open it in your IDE of choice

### 3. Installing dependencies
To install everything needed open the Terminal inside your IDE move to the root of the AugustusWiki folder and run "npm install"

### 4. Self testing
To test changes made type npm run dev which will host a copy of the Wiki which updates in realtime and to make sure everything is working
### 5. Commit changes
After you are done changing things you can commit those to your fork of the wiki and then PR them to the staging repo of AugustusWiki which will then be reviewd and in the best case merged

<div style="border-left: 3px solid #EEBD53; background-color: #5C4C29; padding: 10px 15px; color: #F4E6C5; font-family: Arial, sans-serif; font-size: 30px; max-width: 600px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
  <div style="display: flex; align-items: center; font-weight: bold; margin-bottom: 1px;">
    <span style="font-size: 20px; margin-right: 10px;">&#9888;</span>
    <span>Information</span>
  </div>
  <div>
     Do not update any node.js packages. Updates to those packages will be done by Maintainers of the Repo. IF you PR changes that include modification to either package-lock.json or package.json your PR will be denied
  </div>
</div>