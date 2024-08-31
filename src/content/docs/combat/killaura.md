---
title: Killaura
description: Attacks enemies
---

<div style="border-left: 3px solid #EEBD53; background-color: #5C4C29; padding: 10px 15px; color: #F4E6C5; font-family: Arial, sans-serif; font-size: 14px; max-width: 600px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
  <div style="display: flex; align-items: center; font-weight: bold; margin-bottom: 1px;">
    <span style="font-size: 20px; margin-right: 10px;">&#9888;</span>
    <span>Information</span>
  </div>
  <div>
    This document is in version in progress.
  </div>
</div>

Killaura is one of most important module in cheating. Killaura will automaticly aim at your enemy and attack. This module is essential to gain advantage over enemies. You may gain advantage by having greater reach, faster aim, better cps, autoblock or by ommiting some minecraft mechanics such as sprint-reset/reduction or attacking enemy through wall.

# Range

Range is one of most easiest sections of killaura to configure.

#### Min/Max PreAimRange

This setting defines when client should start aiming at enemy. It wont start attacking tho.
Min is when to start and Max when to stop.

#### Range

Range defines from how far you can hit someone. When the criteria is meet then client will start attacking enemy. PreAimRange should be higher than Range so it will be able to hit player the moment it can.

* Keep in mind that reach is not calculated by getting distance to enemy but to nearest point from player's perspective. Range 3 is default for vanila player.
* For anticheats that simulate game (Intave/Grim/Polar) this setting should be set to 3.

#### RangeMode

> *Simple*: Simply checks distance to player and compares with Range value. 

> *HazeRange*: Not sure at the moment what it does. 

> *Grim*: This mode is broken right now and causes Killaura to not attack at all. 

> *IntervalRange*: Not sure at the moment what it does. 

> *Dual*: Makes sometimes your reach higher {ExtendedRange} with chance {Chance Of Extended Range} % 

# Rotations

Rotations are very tricky to configure but are essential for not getting banned. Badly configured rotations can be detected if they act unhuman. Thats why this section is very detailed and has many diffrent setting to set. 

#### Yaw/Pitch Fov

This setting makes killaura not attack enemies that are far from you camera.

It takes diffrence from your rotation to angle of enemy. Then it compares Pitch/Vertical and Yaw/Horizontal diffrence in deegres. This setting is usefull if you dont want killaura to attack players you dont even see. It also makes it not very rapidly rotate to enemy.