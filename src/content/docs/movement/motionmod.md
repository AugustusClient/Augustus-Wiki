---
title: MotionModifier
description: Script-like Custom Speeds/Flys etc. 
---

Edits Tick based on event, event phase and conditions.

### Block Jump Input

Makes you not able to control jumping.

### Only While Moving/JumpKeyPressed/InWater/InWeb/AtLadder

Will only work if toggled conditions are met.

### Wait For Damage 

After enabling, will wait until player gets hurt.

### SelfDamage Start

Will Self-Damage player with one of methods:

> **None**: Wont.

> **Motion**: If *OnlyOnGround* will set player's motionY to *Motion*.

> **Packet 1/2**: Will send packet/s that player is above 3.5 from your initial Y pos. THat will fall damage you.

> **Fake**: Will set your Hurttime visually to 10 but wont actually damage.

> **SetPostion**: Teleports you *YAdd* Blocks above you.

> **3Jumps**: Will jump 3 time without onGround that will hurt you.

### TickEdit

This section explains what an "TickEdit" is.

Tick Edit can happen: 

> **on Disable/Enable**

> **on Events**: PreUpdate, PostUpdate, MoveEntity.

#### Event

Events have 4 conditions for each of them there is diffrent TickEdit:

> **MotionYLessZero**

> **MotionYHigherZero**

> **TicksOnGround {N}**: *0 - 60* Ticks on ground that if greater than *ResetTicksTo* will reset ticks to *ResetTicksFrom*

Tick Edition settings:

#### Tick Edit

If should Tick Edition event happen.

#### NotWhileKB

Wont happen if hurttime > 0

#### Only InWater / InWeb / AtLadder

Will only happen if toggled conditions are met.

#### Jump

Will jump this tick. *Legit*

#### SpoofGround

Tells server that player is on ground even if its not.

#### EditStaticY

Sets motionY to value.

#### EditStaticY

Sets motionY to Min/Max value if enabled.

#### EditStaticXZ

Sets motionXZ accodring to your rotation to Min/Max value if enabled.

#### AddStaticY

Adds Min/Max value to motionY if enabled.

#### AddStaticXZ

Adds accodring to your rotation Min/Max value motionXZ if enabled.

#### MultiplyStaticY

Multiplies motionY by Min/Max value if enabled.

#### MultiplyStaticXZ

Multiplies motionXZ accodring to your rotation by Min/Max value if enabled.

#### EditTimerSpeed

Sets timer to Min/Max value if toggle.

#### StrafePercentage

% of your motion getting redirected to your forward vector.

#### SelfDamageMode

Same as self damage specified above.