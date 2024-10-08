---
title: LagRange
description: Tickbase / Client side lag for advantage
---

Lagrange is a module similar to Timerrange and TimerrangeV2.
If will give advantage, will freeze for couple of ticks and release these ticks so you can 1. HitBug 2. Deffer getting attacked

## PredictTicks
Amout of ticks which is used to calculate when/where to lag

## Ticks
Amout of ticks which you actually lag in the end

Typical values:

> **Intave**: Disabled or 2

> **Polar**: 4 maybe 5

> **Any Other AC**: 7 will work 

## Correct
While lagging you pause sending outgoing packets. Correct will also pause your incoming packets which makes it 
harder to detect for Anti-Cheats. This boolean is recommended on servers with Intave and Polar.

## OnlyOnGround
Whith OnlyOnGroud on true, the module will only work on ground. 

This setting does not seem to make sense in the first place, but for some reason it bypasses better on MineMenClub (AntiGamingChair)

It's recommended to keep this setting on false execpt for MineMenClub

## Stop
Stops you after finishing a lag. Helps you combo other players

### STap
Can be enabled only when Stop is active.
Stops you by pressing s (movement-key backwards) which cancells your w (movement-key forewards) keyboard input

## Targets
Here you can select what targets are used for the lag-prediction calculation

### OnlyWhileKillAura
If enabled, lagrange will only work for Killaura.
If disabled, you will lag every time you enter a targets range. (recommended for cheating with autoclicker, etc.)

### Targets
Can be selected when OnlyWhileKillAura is false
Here you can select the entity types where lagrange will lag
Recommended: Only Player

### PreAimRange
Can be selected when OnlyWhileKillAura is false
Range where you start lagging.
Recommended: Slightly above your reach. 
For example:
Reach: 3.0
Then set ur PreAimRange to 3.1

### Lagrange

Originally Joseph-Louis Lagrange was born in 1736.
He was known for his contributions to mechanics, number theory and calculus.
He is particularly recognized for Lagrangian mechanics, a reformulation of classical
mechanics that emphasizes energy rather than forces, and for the Lagrange interpolation
polynomial in numerical analysis. His work laid the groundwork for modern physics and mathematics,
influencing future developments in various fields.
Lagrangian mechanics simplifies the analysis of dynamic systems by using the
principle of least action, which states that the path taken by a system between
two states is the one that minimizes the action, a quantity derived from the system's
kinetic and potential energies. This approach allows for more straightforward solutions
to complex problems, especially in systems with constraints. Additionally, his
interpolation polynomial helps estimate values between known data points, crucial
for numerical methods and data analysis.
