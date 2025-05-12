---
title: MoreKB
---
MoreKB gives you more options to deal more knockback

## Modes
MoreKB comes with diffrent modes to gain more knockback

### STap
Simulates the PvP S-Tap technique by increasing knockback through movement control

### LegitSneak
Implements the Shift-Tap (Sneak-Tap) technique to control and enhance knockback

### Legit
Simulates the PvP technique of W-Tap for legitimate knockback enhancement

### LegitFast
A faster and more aggressive version of Legit for increased knockback

### Fast
Maximizes knockback through high frequency of action

### LessPacket
Reduces the number of packets sent

### Packet
Uses special packets to enhance the knockback

### DoublePacket
Doubles the number of packets to maximize the knockback

### One
Minimalistic mode for neat knockback control

## Timing settings
Lets you set timings for knockback

### MinSprintResetTime / MaxSprintResetTime
Set the delay in ticks for W-Tap after successfully hitting a target

### NotInARow
Prohibits the use of identical W-Tap delays in a row

### MaxInARow
Maximum number of repetitions in a row

### Outliers
Excludes outliers

### MinSprintResetTimeOutlierValue / MaxSprintResetTimeOutlierValue
Values to handle outliers

### MinOutlierDelay / MaxOutlierDelay
Set the minimum and maximum delay for emissions

### Normal Distribution
Enables uniform distribution of time values

### Sigma / Center
Distribution settings

## Duration settings
Lets you set duration settings

### MinSprintResetDuration / MaxSprintResetDuration
Number of ticks for which W-Tap will be active

### NotInARow
Prohibits the same W-Tap duration consecutively

### Outliers, Normal Distribution
Operate similarly to the Timing settings

## DoubleReset settings
Lets you configure double reset settings

### DoubleSprintReset
Enables or disables double W-Tap

### MinDoubleResetTiming / MaxDoubleResetTiming
Delay in ticks for W-Tap after a successful hit on a target

### MinDoubleResetDelay / MaxDoubleResetDelay
Delay between two W-Taps

### MinDoubleResetDelayOutlierValue / MaxDoubleResetDelayOutlierValue
Values for handling outliers

### MinOutlierDelay / MaxOutlierDelay
Minimum and maximum emission delay settings

### Normal Distribution
Enables normal distribution

### Sigma / Center
Sigma and Center modifies the percantage of values being picked by min and max. Simplefied said if you set min to 1 and max to 10 without normal distribution it would just give every value a 10% chance of being picked and that would change depending on what you set. With sigma and center you can shift around those odds to make the outcome more randomized. TL:DR Use this to make every value for min and max random to make it harder to be detected if anticheats check for this

## Fail Settings
Lets you configure certain settings to make MoreKB seem legit

### FailSprintReset
Enables or disables random W-Tap misses

### MinFailDelay / MaxFailDelay
Delay in ticks between W-Tap skips

### MinFailDuration / MaxFailDuration
Number of ticks for which the pass will be active

### NotInARow
Prevents identical skips in a row

### Normal Distribution
Configures an even distribution of time values

### Sigma / Center
Distribution parameters for skips
