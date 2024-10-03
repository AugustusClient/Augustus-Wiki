---
title: ClientSpoofer
---

ClientSpoofer is used to Spoof the Client Info sent to the Server. As an Example meaning that if you join with Vanilla,Forge,Fabric or Lunar Client Servers can report that information about your Client to the AntiCheat and Admins of that Server. Using Spoofer goes around that reporting by telling the Server that you use a diffrent Client then you actually use

## Clients
Here you can set the Clients you want the Server to Report to an Anticheat

### Default
Default will report nothing to the Server

### LabyMod
Will report to the Server that you are using LabyMod

### CheatBreaker
Will report to the Server that you are using CheatBreaker

### PvPLounge
Will report to the Server that you are using PvPLounge

### Lunar
Will report to the Server that you are using Lunar

### Custom
Custom lets you make your own Client Name that will be Reportet. You can set that with .clientspoofer yourownclientname

### CancelPacket
Will cancel the Packet send to the Server with the ClientInfo, could cause trouble with some ACs maybe

## RandomizeClientSettings
Minecraft sends all your Client Settings to the Server which can be used to detect if you are using an alt, this "can" be used but is causes false positives. RandomizeClientSettings will now take the Client Settings before they are sent to the server, randomizes them and then sents it to the Server which makes it impossible for the Admin to use those informations

## Min and Max RandomViewDistance
Randomizes the render distance reported to the server not changing it actually. As stated above servers can use settings to determin if someone is the same person or not. Randomizing the render distance will make ther impossible

## NotInARow
NotInARow is a safty messure if RandomizeViewDistance generates the same Settings 4 times in a Row, the 5th time it will force generate a diffrent Number