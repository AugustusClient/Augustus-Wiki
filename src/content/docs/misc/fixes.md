---
title: Fixes
---
Implements fixes for various issues within the game for a better ingame experience.

## Intave 

Fixes a few raytrace bugs on old intave. Should not be up to date and could cause false flags.

## IntaveBlocking

Fixes a few autoblock false flags on old intave.

## MouseDelayFix

Fixes the mouse delay bug introduced in Minecraft 1.8 (https://bugs.mojang.com/browse/MC-67665)

## HitDelayFixMode

Fixing the hit delay problem in 1.8

### None

Hit delay fix is disabled

### Default

The default fix. You can click in air like at an entity

### WithoutDoubleClick

You can click in air like at an entity, ecept the double clicks. They get blocked.

### OnlyAtTarget

Apply the hit delay fix only if your mouse is over a target hitbox

### OnlyAtTargetLight

Apply the hit delay fix only if your mouse is over a target hitbox, but you can fail the hit sometimes.

## MemoryFix

Reduce the memory usage of the client if the memory is overflowing

## PlaceWhileBreak

You can place blocks while breaking a block. Thats completely unlegit, but BAC client has this feature so I added it. 

## NoTerrainDownload

Removes the download terrain gui at world switch

## NoReduceDebugInformation

Removes the ability of the server to withhold F3 debug information from you
