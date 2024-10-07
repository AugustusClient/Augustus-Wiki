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

KillAura is a module in many different clients that is made to automatically aim and artack enemies for you. On Augustus, this module is extremelt customizable, as you can set it to work however tou want it to.

# Range

Range is one of most easiest sections of killaura to configure.

#### Min/Max PreAimRange

These two settigs define at minimum and maximum aim range. When you are between the minimum and maximum values in terms of distance grom an enemy, KillAura will start aiming.

#### Range

Range defines from how far you can hit someone. When the criteria is meet then client will start attacking enemy. PreAimRange should be higher than Range so it will be able to hit player the moment it can.

* Keep in mind that reach is not calculated by getting distance to enemy but to nearest point from player's perspective. Range 3 is default for vanila player.
* For anticheats that simulate game (Intave/Grim/Polar) this setting should be set to 3.

#### RangeMode

> *Simple*: Simply checks distance to player and compares with Range value. 

> *HazeRange*: Will increase reach while comboing your opponent by {HazeAdd} until {HazeMax}. 

> *Grim*: This mode is broken right now and causes Killaura to not attack at all. 

> *IntervalRange*: Not sure at the moment what it does. 

> *Dual*: Makes sometimes your reach higher {ExtendedRange} with chance {Chance Of Extended Range} % 

# Rotations

The settings in this section are the hardest to configure, as there are a lot of things you can customize. It is essential that you set up these correctly where you don't flag.

#### Yaw/Pitch Fov

This setting makes killaura not attack enemies that are far from you camera.

It takes diffrence from your rotation to angle of enemy. Then it compares Pitch/Vertical and Yaw/Horizontal diffrence in deegres. This setting is usefull if you dont want killaura to attack players you dont even see. It also makes it not very rapidly rotate to enemy.

### Min/Max Pitch/Yaw Speed/Acceleration

* This setting may be sometimes hidden due to some Randomize:Randomize modes

Main part of rotations. These settings specify by how much will your rotations come towards aiming point per tick. Pitch and Yaw calculations are seperated. For each axis (yaw/pitch) each tick speed is incremented by Acceleration and clamped by limit (Speed), then speed is added to your axis. If axis's target will change direction, acceleration will start accelerating in opposite direction. 

### Better Acceleration

Currently unknown what it does, try using this setting and watch if it improves killaura. It should work better.

### FixRotationMode

Currently unknown what it does, try using this setting and watch if it improves killaura. It may work best with OnlyWhenNeeded.

### Heurestics

This settings makes killaura aiming less detectable. Currently unknown how it works but might be worth testing if improves killaura. Try IntaveTest on IntaveAC, or Pattern1 (On other acs) and watch results.

### RotationMode

It determines killaura's aiming point. 

> Head: This mode will look at enemy's head. Most of client's use this method and may make your killaura more detectable, very basic and not recommended.

> BestHitVec: BestHitVec will target the closest part of enemy's hitbox, giving you the biggest advantage. Recommended.

> NearestHitVec: Will aim at the closest point to the player's cursor on the enemy's hitbox, then adjusting the aiming point only if the target no longer falls under the killaura's vector. Not that bad but BestHitVec is simply better.

Just set this to BestHitVec, no point at selecting other modes.

#### HitBoxPercentage Vertical/Horizontal

Defines percentage of hitbox on which rotations would be clamped. Towards center of hitbox.


## Randomize

Randomization of aim, very important.

### RandomType

This setting specifies which random distribution should be used.

> Random: Picks random number in specified range with linear distribution. Each number has equal chance.

> SecureRandom: Same as Random but doesn't use global random but private instance of random number generator. Linear uniform but numbers may be more evenly distributed.

> Gausian: Applies <a href="https://en.wikipedia.org/wiki/Normal_distribution" target="_blank">Gausian distribution</a> which makes numbers in middle of range be picked more often. 

> Intave: Applies unknown distribution for random numbers, may improve killaura on IntaveAC.

### Randomize

It specifies which randomization will get applied to player's rotation.

* Modes Noise and Turbo remove Min/Max Pitch/Yaw Speed/Acceleration overriding basic rotation.

> None: Dont apply any randomization.

> Basic: Randomly offsets aiming point by RandomStrength.

> Doubled: Same as Basic but may be more <i><b>special</b></i>.

> OnlyRotation: Works as Basic but only if player's head is rotating/aiming. If it already looks at aiming point it doesn't apply.

> Hybrid: Unknown what it does.

> Polar: Weird mode of randomization that might be very good. Oscilates pitch in yaw axis from above enemy's head to below his feet.

> Circle: Rotates in circle around aiming point. Radius becomes larger the further player is from enemy.

> Advanced: More sophisticated randomization, has many diffrent settings that i am not going to explain, if you are willing to use this mode you should see how diffrent settings change this mode. It basicly jumps around points in area defined by Circles{R=Radius} and exclusive for Circle{R=InnerRadius}, with Absolute and Relative distance from current offset.

> Noise: Vere randomly jumps around biased towards enemy. Overrides basic rotations and unpredictable. If you are willing to use this mode you should see how diffrent settings change this mode. Speed is how fast it will move, chances have weird/unexplained behaviour.

>Turbo: Mode made for IntaveAC with goal of improving basic rotations to work faster without getting detected. Designed for IntaveAC, but might be used for any anticheat

#### Turbo

##### Min/Max AimSpeed/Acceleration

Works same as basic rotation but without seperation for each axis (yaw/pitch);

##### Better Acceleration

Improves acceleration, unknown method. Keep around 0.3 - 0.5.

##### Scale

Not known at the moment what it does. Keep around 1 - 2.

##### Min/Max Target/Player Response

Ticks of prediction for tracking, not sure why these settings doesn't exist outside Turbo mode. Keep around (2-3) - (3-5), higher values for slower rotations (depending on anticheat).

### Tracking Accuracy/Randomization

Tracking is very usefull, it improves aiming speed. Tracking works by predicting where will enemy be in future and rotating to this point. Accuracy defines how accurate it is (?). And randomization by how much positions of player/enemy should be randomized. Just set randomization to like 5-20 and accuracy to 60-80.


### SmartAim

Improves killaura by aiming at small parts of target's hitbox, e.g. if half of the hitbox is behind a block, the client will aim at the visible part.

### SmartAimEntityCheck

An addition to SmartAim. Checks if there is any entity between you and killaura's target, and if true, will attempt to attack target without attacking entity.

### AdvancedRots

Probably improves something in aiming, unknown functionality, probably enable.

### Interpolation

Probably adds some sort of <a href="https://en.wikipedia.org/wiki/Linear_interpolation" target="_blank">Interpolation</a>, disable.

### LockView

Makes player's camera attached with player's rotation. If disabled player may look in diffrent direction than camera and when no longer needs to aim it will return to camera rotations. Doesn't change how killaura works, just where you look not player.

### AimThroughWalls

If disabled and player can't aim at point of enemy where it can be hit will stop looking at enemy. Enabled makes it always look at it.

#### AimThroughWallsRange

How close enemy should be to look at it through walls.

#### ThroughWalls

Decides if player should attack enemy through walls, might be detectable on some anticheats, may insta ban.

#### ThroughWallsRange

Range if player is hitting through wall.

### NoRotation

Disabled rotation. Super detectable and obvious, will autoban on every anticheat with hitbox check, 99% of anticheats have them. ENABLE.

## Clicking 

Basicly attacking. Autoblocks, perfecthit, cps settings, reduction, 1.9+ timings etc.

### ClickSettings

Describes how many clicks per second killaura can achive.

* This section is to be added in future.

### Interactions

You can find there packet based interactions of attacking/blocking.

#### AttackMode

How killaura will attack

> Legit: Will invoke clickMouse() function in minecraft code.

> Packet: Instead of asking minecraft to attack, sends packet C02PacketUseEntity with action ATTACK and entity your target.

> Multi: Will attack multiple entities in one tick. Switch killaura is way less undetected. This won't work on 90% of anticheats. Not worth to use anyway, switch killaura is almost the same.

#### BlockMode

This is the autoblock. Will significantly reduce incoming damage as you were blocking. Very important aspect of killaura.

None is simply no autoblock, Constant/2 is always blocking, Pre/Post are timings for when to block, UnblockOnHit/2 will "unblock on hit", Legit is legit autoblock (similiar effect as spamming both mouse buttons), and rest can't really be described.

* Killaura for blocking will work as you would just hold sword. This makes Noslow part of autoblock, without properly configured noslow autoblock may ban, slow you down.

#### SmartAutoblock

Unpredictable option for autoblock that makes it sometimes block sometimes not depending on situation.

#### InteractAutoblock

Normally autoblock for blocking/using item sends C08PacketPlayerBlockPlacement. This option replaces this packet send action with actual interaction. If player looks at chest it will interact with chest. Recommended for anticheats that simulate game.


#### OnlyRightClickBlock

Will autoblock only if player is holding right mouse button.

#### OnlyWhileSwingInProgess

Will autoblock only if player's item swing animation hasn't finished yet.

#### OnlyWhileHurt

Will autoblock only if player's hurttime (10 everytime you receive damage) is above 0 (you can receive damage now).

### PreHit

This settings make killaura attack and miss when enemy out of range.

### SmartPreHit

Not clear what this setting does, may improve PreHit.

### Min/Max PreHitRange

How far away enemy can be to prehit work.

### Min/Max PreHitFov

How far from camera can enemy be in deegres to prehit work.

### MissClick + Percentage

If MissClick is enabled, killaura will sometimes fail to hit enemy, and only swing item. Percentage defines how often this occurs.

### PerfectHit

Makes killaura only attack when enemy's hurttime equals to 0. This means killaura only attacks when enemy can receive damage.

### LongClick

This setting makes clicks more legitimate. When you are spamming your mouse to attack your enemy you not only press button down, but you also have to release it. This setting make killaura kind of simulating releasing mouse button.

### CritFix + PacketCheck

I am not 100% certain what it does but it may improve expirence on simulation based anticheats. Enable packet check.

### NoLoopHit

No idea what it does but as far as i know it may improve killaura a lot. Not sure what it does, and if its true.

### BreakBlocks

When killaura misses and would normally hit block nothing will happen. If this setting is enabled it will mine a block for short period of time. Makes killaura more legitimate, but disabling it may be better, no anticheat checks for that as far as i know.


### DoubleClickFirstHit

Makes first hit of killaura will always be a double click.

### ReduceCPSIfYouCantHitATarget

Will lower killaura cps if target is out of range.

### NoSwing

With this setting enabled killaura will no longer swing item when attacking. Super illegitimate every anticheat detects it. DISABLE.

### SlowDown

Applies minecraft standard movement motion reduction when attacking and sprinting. Neccesary for Polar/Intave, not for grim. Neccesary for sprint reset based MoreKB modes work. Enable if you feel you need it.

### CoolDown

For 1.9+ fighting you need to wait until your weapon cools down. Will wait for this to happen. Enable for 1.9+ versions.