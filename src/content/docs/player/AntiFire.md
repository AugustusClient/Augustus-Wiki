---
title: AntiFire
description: Prevents fire from the player
---
This module performs the function of preventing fire from the player.

Servers count the ticks you burned with the flyingticks on the client and the hurttime on the server side, what AntiFire now does is spamming those flyingticks deciving the server and making your fire go out faster.

# OnlyOnGround

Works only if the player is standing on the ground, allows you to bypass a little more anti-cheats and reduce the chance of being kicked from the server

# MaxPacketsPerTick
Sets the amount of Packets that will be send to the Server for AntiFire to work. More packets mean that you will burn less

<div style="border-left: 3px solid #EEBD53; background-color: #5C4C29; padding: 10px 15px; color: #F4E6C5; font-family: Arial, sans-serif; font-size: 14px; max-width: 600px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
  <div style="display: flex; align-items: center; font-weight: bold; margin-bottom: 1px;">
    <span style="font-size: 20px; margin-right: 10px;">&#9888;</span>
    <span>Caution</span>
  </div>
  <div>
    Keep in mind that if you set a lot MaxPackets, there is a risk that you will be kicked for a huge number of packet
  </div>
</div>