---
title: AutoLeave
---
AutoLeave makes you Leave either the Lobby you are currently in or the whole server under certain set conditions

## CalculateWithHit
CalculatesWithHit starts a timer that resets everytime you get hit by someone, for example if you set the timer to 5000ms the Client will auto leave after 5 seconds of not geting hit.

### time
Lets you set the time for CalculateWithHit in ms. 1000ms = 1 second

###  displaytime:
Displays a timer on your Screen, which is red when the time set isnt met and turns green when the time is reached

### X-Coord
Sets the X Coord for the displayed timer which meens left and right

### Y-Coord
Sets the Y Coord for the displayed timer which means up and down

## AutoLeave
Enabled will leave the server if your hearts fall under the threshold set in hearts

### Hearts
Here you can set the amount of hearts it takes for AutoLeave to trigger

## Mode
Sets how AutoLeave and CalculateWithHit should work

### Lobby
Puts /hub into Chat to leave the current lobby

### Server
Leave the server

## LeaveOnKey
Lets you set a Key if pressed makes you leave

## LeaveOndeath
Leaves when you die

## Key
Lets you set a Key for LeaveOnKey