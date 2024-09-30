---
title: Commands and their Uses
---
Augustus houses many commands and here is a list of all of them and their uses. You can also see a list of commands when typing .help into the game chat

## .bind
Will bind a key to a module. Module names are not case sensitive

- Example: .bind killaura r
<img src="https://i.imgur.com/hBI3Vlo.png">


## .binds
Will show all modules that have binds and what those binds are

- Example: .binds 
<img src="https://i.imgur.com/YOk7ZFT.png">

## .ign
Will copy your ingame name to the clipboard
- Example: .ign
<ims src="https://i.imgur.com/l10BHn6.png">

## .t
Will toggle a named module. Module names are not case sensitive
- Example: .t killaura
<img src="https://i.imgur.com/Iu9mupE.png">

## .blockesp [setID], [getID]
Will let you set the ID of a block the BlockESP should show. [List here](https://www.minecraftinfo.com/idlist.htm)

- Example: .blockesp setID 1

To view what block ID is active you can use getID instead
- Example: .blockesp getID

## .fucker [setID], [getID]
Will let you set the ID of a block that Fucker will target. 
[List here](https://www.minecraftinfo.com/idlist.htm)

- Example: .fucker setID 1

To view what block ID is active you can use getID instead
- Example: .fucker getID

## .clicker [start], [stop], [abort]
Will let you start a clicker recording
- Example: .clicker start

Will let you stop the recording
- .clicker stop nameofrecording

Will let you abort the recording
- .clicker abort

## .arraylistsuffix
Will let you set a custom arraylistsuffix. The arraylistsuffix is the part between the name of an module in the arraylist and a number or state of that. Everything can be set as a arraylistsuffix
- Example: .arraylistsuffix ->
- Example: Killaura : 0 in here the : is the suffix and the 0 is the number of Targets. With the command from above ":" will turn into "->" making "Killaura : 0" to "Killaura -> 0"

## .killmessage
Will set the a killmessage for custom mode in "Fun -> KillMessage"
- Example: .killmessage Killed by the AugustusWiki
- Example: Now enabling KillMessage with custom mode will send the message set by .killmessage into the chat when you kill someone

## .customname [set], [get]
Will let you set a custom name for you that will show up for every Augustus user with IRC enabled. For the name to show up you have to enable Render -> CustomName and select Custom under Name-Formatting
- Example: .customname set AugustusWiki

## .friend [add], [permAdd], [remove]
Will let you add friends in the server for the round then unfriend them(might be diffrent)
- Example: .friend add AugustusWiki

Will let you add friends permanently
- Example: .friend permaAdd AugustusWiki

Will let you remove friends
- Example: .friends remove AugustusWiki

## .vclip
Will let you clip up and down through walls(like noclip but only on the y axis). Use positive numbers to clip up and negative numbers to clip down
- Example: .vclip 3

## .hclip
Will let you clip forward or sideways through walls(like noclip but only on x and z axis). Use negative numbers to go into the opposit direction
- Example: .hclip 3 5(the first value is for x axis and the second one is for the z axis)

## .customskin [set], [get]
.customskin lets you set the customskin in the CustomSkin module with the name of any minecraft player, then the client will search the user name and use the current skin that is used with that username

Will set the customskin
- Example: .customskin set AugustusWiki

Will let you see the current name that is used for the customskin and will print that information into the chat
- Example: .customskin get

## .pathfinder
.pathfinder lets you input x, y, z cordinates so augustus calculates a path to those and draw a line there. Keep in mind that values to high or to low for your y path might exceed the calculation time.
- Example: .pathfinder 123 70 123

### .pathfinder color
This will change the color of the line drawn by .pathfinder when a valid path was found. The format is basic RGB and you can find stuff about [RGB here](https://www.farb-tabelle.de/en/table-of-color.htm)
- Example: .pathfinder color 255 0 0

### .pathfinder toggle
Will toggle the line rendered by .pathfinder
- Example: .pathfinder toggle

## .clientspoofer
.clientspoofer lets you set a custom client branding that will be reported to the server when the custom mode in [Misc > ClientSpoofer](https://augustusclient.github.io/Augustus-Wiki/misc/clientspoofer/) is selected and the ClientSpoofer enabled. In the example GrimAC was used to demonstrate how this works
- Example: .clientspoofer MegaSuperDuperHackerClient

<img src="https://i.imgur.com/Rmr89gR.png">


## .spammer
Will let you set a custom message that the Fun > Spammer will send into chat
- Example: .spammer I have people in my walls

## .mm [save], [load]
.mm will let you save and load motionmodifer files
- Example: .mm save MySettings

- Example: .mm load MySettings

## .autoregister [set], [get]
.autoregister will let you set a custom password or view it for [Misc > AutoRegister](https://augustusclient.github.io/Augustus-Wiki/misc/autoregister/)
- Example: .autoregister set Hallo123
<img src="https://i.imgur.com/mCP15AT.png">

- Example: .autoregister get
<img src="https://i.imgur.com/fcFDQ35.png">
