---
title: ClientSpoofer
---

ClientSpoofer is used to spoof the client info sent to the server. As an example meaning that if you join with vanilla, forge, fabric or lunarclient
servers can report that information about your Client to the AntiCheat and admins of that server. Using spoofer goes around that reporting by telling the server that you use a diffrent client then you actually use

## Clients
Here you can set the clients you want the server to report to an anticheat

### Default
Default will report that you are using the vanilla client

### LabyMod
Will report to the server that you are using LabyMod

### CheatBreaker
Will report to the server that you are using CheatBreaker

### PvPLounge
Will report to the server that you are using PvPLounge

### Lunar
Will report to the server that you are using Lunar

### Custom
Custom lets you make your own client name that will be reportet. You can set that with .clientspoofer yourownclientname

### CancelPacket
Will cancel the packet that sends the client info which will not report anything to the server

## RandomizeClientSettings
Minecraft sends all your client settings to the server which can be used to detect if you are using an alt, this "can" be used but is causes false positives. RandomizeClientSettings will now take the client settings before they are sent to the server, randomizes them and then sents it to the server which makes it impossible for the admin to use those informations

## Min and Max RandomViewDistance
Randomizes the render distance reported to the server not changing it actually. As stated above servers can use settings to determin if someone is the same person or not. Randomizing the render distance will make ther impossible

## NotInARow
NotInARow is a safty messure if RandomizeViewDistance generates the same settings 4 times in a Row, the 5th time it will force generate a diffrent number