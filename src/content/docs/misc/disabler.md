---
title: Disabler
---
Disabler is a very intersting Module in Augustus. The Disabler can manipulate all Server and Client Packets in Minecraft. Using Disabler you can configure AntiCheat bypasses and other things.

<div style="border-left: 3px solid #EEBD53; background-color: #5C4C29; padding: 10px 15px; color: #F4E6C5; font-family: Arial, sans-serif; font-size: 14px; max-width: 600px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
  <div style="display: flex; align-items: center; font-weight: bold; margin-bottom: 1px;">
    <span style="font-size: 20px; margin-right: 10px;">&#9888;</span>
    <span>Caution</span>
  </div>
  <div>
    Dont use if you dont know what you are doing
  </div>
</div>

### Custom Packet Canceling
Here you can configure the Packets that should be disabled. For a better understanding of each Packet [go here](https://augustus-wiki-1dyg0kfq6-muffinmaker2s-projects.vercel.app/intro/packets)
 
 #### Incoming Packets
 This Packets are sent by the Server to your Client

 ### If selecting a Packet
 Here you can now set certain condition under what should happen to the Packet that was selected, this setting will look the same for all packets.

 #### Interval
 Sets the Interval for the packet to be Disabled for example if you set it to 5 then the Packet will be disabled every 5 Ticks

#### Always
If enabled will always run the disabling of the Packet. If disabled you will be able to set at what tick the Disabling should start and end with StartTick and EndTick

#### CancelConditions
This Conditions will tell Disabler to kick in

#### Always
Will always trigger Disabler for that specific Packet

#### OnlyOnGround
Will only trigger Disabler when you are on Ground

#### OnlyInAir
Will only trigger Disabler if you are in Air

### OutgoingPackets
This Packets are sent from your Client to the Server The general Setup for each Packet is same as explained above

### DetailedPackets
This Packets are sent from your Client to the Server The general Setup for each Packet is same as explained above

### EntityActionPackets
These are actions associated with an entity’s behavior, particularly the player, and they likely correspond to player actions that can be canceled. The general Setup for each Packet is same as explained above

### DiggingPackets
These are related to the block digging or destruction process, typically handled when the player interacts with blocks. The general Setup for each Packet is same as explained above

### PingSpoof
PingSpoof lets you Spoof your Ping to certain Values to deceive certain AntiCheats that your Connection is bad while also allowing you to cancel certain Packets with it

#### PingSpoofPackets
This Packets will if enabled will be Disabled with PingSpoof For a better understanding of each Packet [go here](https://augustus-wiki-1dyg0kfq6-muffinmaker2s-projects.vercel.app/intro/packets)

#### MinDelay
Will set the minmum Ping that will be Spoofed to the Server

#### MaxDelay
Will set the maximum Ping that will be Spoofed to the Server

### Place(Outdated)
Place was once used to fly on Cubecraft by placing blocks inside you !!! Is now Outdated !!!

### RoyalPixel(Outdated)
Something for the RoyalPixel Server that isnt anymore

### Spectate
Old Grim Spectate respawn disabler which disabled movement checks

### Ride
Lets you disable movement checks while riding entitys

### KarhuClicking
Disables Click checks on karhu (migbt be outdated)

### OnGroundTrue
Dont know this one atm

### Tp
Dont know this one atm

### Test
Mega Super Duper secret Polar Disabler :troll:

### ResourcePack
Disables the Custom ResourcePack the server wants you to load

### Hover
I dont know this one atm
