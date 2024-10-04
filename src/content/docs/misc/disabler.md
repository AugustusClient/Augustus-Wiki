---
title: Disabler
---
Disabler is a very intersting module in Augustus. The Disabler can manipulate all server and client packets in minecraft. Using Disabler you can configure AntiCheat bypasses and other things.

<div style="border-left: 3px solid #EEBD53; background-color: #5C4C29; padding: 10px 15px; color: #F4E6C5; font-family: Arial, sans-serif; font-size: 14px; max-width: 600px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
  <div style="display: flex; align-items: center; font-weight: bold; margin-bottom: 1px;">
    <span style="font-size: 20px; margin-right: 10px;">&#9888;</span>
    <span>Caution</span>
  </div>
  <div>
    Very Strong Module that can break the Game if not used correctly!!! you have been warned!!!
  </div>
</div>

### Custom Packet Canceling
Here you can configure the packets that should be disabled. For a better understanding of each packet [go here](https://augustus-wiki-1dyg0kfq6-muffinmaker2s-projects.vercel.app/intro/packets)
 
 #### Incoming Packets
 This packets are sent by the server to your client

 ### If selecting a Packet
 Here you can set certain condition under what should happen to the packet that was selected, this setting will look the same for all packets.

 #### Interval
 Sets the interval for the packet to be disabled for example if you set it to 5 then the packet will be disabled every 5 ticks

#### Always
If enabled will always run the disabling of the packet. If disabled you will be able to set at what tick the disabling should start and end with StartTick and EndTick

#### CancelConditions
This conditions will tell Disabler to kick in

#### Always
Will always trigger Disabler for that specific packet

#### OnlyOnGround
Will only trigger Disabler when you are on ground

#### OnlyInAir
Will only trigger Disabler if you are in air

### OutgoingPackets
This packets are sent from your client to the server The general setup for each packet is same as explained above

### DetailedPackets
This packets are sent from your client to the server The general setup for each packet is same as explained above

### EntityActionPackets
These are actions associated with an entity’s behavior, particularly the player, and they likely correspond to player actions that can be canceled. The general setup for each packet is same as explained above

### DiggingPackets
These are related to the block digging or destruction process, typically handled when the player interacts with blocks. The general setup for each packet is same as explained above

### PingSpoof
PingSpoof lets you spoof your ping to certain values to deceive certain AntiCheats that your connection is bad while also allowing you to cancel certain packets with it

#### PingSpoofPackets
This packets will if enabled will be disabled with PingSpoof For a better understanding of each Packet [go here](https://augustus-wiki-1dyg0kfq6-muffinmaker2s-projects.vercel.app/intro/packets)

#### MinDelay and MaxDelay
Sets the Ping that should be targeted.


### Place(Outdated)
Place was once used to fly on Cubecraft by placing blocks inside you !!! Is now outdated !!!

### RoyalPixel(Outdated)
Something for the RoyalPixel server that isnt anymore

### Spectate
Old Grim spectate respawn disabler which disabled movement checks

### Ride
Lets you disable movement checks while riding entitys

### KarhuClicking
Disables click checks on karhu (migbt be outdated)

### OnGroundTrue
Dont know this one atm

### Tp
Dont know this one atm

### Test
Dont know this one atm

### ResourcePack
Disables the custom rsourcepack the server wants you to load

### Hover
I dont know this one atm