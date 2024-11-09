---
title: Packets and their Uses
---

## Incoming Packets (Packets sent from the server to the client):
- **S00PacketKeepAlive**: Used by the server to check if the client is still responsive by sending periodic keep-alive packets.
- **S02PacketChat**: Sends chat messages from the server to the client.
- **S03PacketTimeUpdate**: Updates the time of day on the client to synchronize with the server.
- **S04PacketEntityEquipment**: Updates equipment worn by an entity, such as armor or items in hand.
- **S05PacketSpawnPosition**: Defines the position where players will spawn in the world.
- **S06PacketUpdateHealth**: Updates the player's health, food level, and food saturation.
- **S07PacketRespawn**: Forces the player to respawn after dying or being teleported to another dimension.
- **S08PacketPlayerPosLook**: Updates the player’s position and look direction.
- **S09PacketHeldItemChange**: Updates the slot in the hotbar that the player has selected.
- **S0APacketUseBed**: Informs the client that a player is using a bed.
- **S0BPacketAnimation**: Animates entities, like arm swings.
- **S0CPacketSpawnPlayer**: Spawns another player entity into the game world.
- **S0DPacketCollectItem**: Sent when an entity, usually a player, picks up an item.
- **S0EPacketSpawnObject**: Spawns objects like arrows, boats, or minecarts in the world.
- **S0FPacketSpawnMob**: Spawns a mob entity in the world.
- **S10PacketSpawnPainting**: Spawns a painting entity in the game world.
- **S11PacketSpawnExperienceOrb**: Spawns experience orbs in the world.
- **S12PacketEntityVelocity**: Updates an entity's velocity.
- **S13PacketDestroyEntities**: Informs the client to remove an entity from the world.
- **S14PacketEntity**: Updates the position or rotation of an entity.
- **S15PacketEntityRelMove**: Relative movement of an entity compared to its previous position.
- **S16PacketEntityLook**: Changes only the look (head or body rotation) of an entity.
- **S17PacketEntityLookMove**: Updates both the position and look of an entity.
- **S18PacketEntityTeleport**: Teleports an entity to a specific location.
- **S19PacketEntityHeadLook**: Rotates only the head of the entity.
- **S1APacketEntityStatus**: Updates an entity’s status, such as being on fire or crouching.
- **S1BPacketEntityAttach**: Attaches entities, like putting a player in a minecart.
- **S1CPacketEntityMetadata**: Updates metadata (custom properties) for entities.
- **S1DPacketEntityEffect**: Applies a status effect to an entity, like poison or speed.
- **S1EPacketRemoveEntityEffect**: Removes a status effect from an entity.
- **S20PacketEntityProperties**: Updates the properties of an entity, such as health, movement speed, or attack damage.
- **S21PacketChunkData**: Sends a chunk of terrain data to the client.
- **S22PacketMultiBlockChange**: Changes multiple blocks within a chunk at once.
- **S23PacketBlockChange**: Updates a single block's state.
- **S24PacketBlockAction**: Performs an action on a block, like opening a chest or a note block sound.
- **S25PacketBlockBreakAnim**: Displays block-breaking animations.
- **S26PacketMapChunkBulk**: Sends multiple chunks to the client at once.
- **S27PacketExplosion**: Simulates an explosion by removing or damaging blocks.
- **S28PacketEffect**: Sends an effect, such as a sound, like explosions or portal sounds.
- **S29PacketSoundEffect**: Sends sound events to the client.
- **S2APacketParticles**: Sends particle effects, like smoke or flames.
- **S2BPacketChangeGameState**: Changes the game state, such as starting rain or clearing it.
- **S2CPacketSpawnGlobalEntity**: Spawns a global entity, like a lightning bolt.
- **S2DPacketOpenWindow**: Opens a window, such as a chest or crafting table interface.
- **S2EPacketCloseWindow**: Closes the open window or GUI on the client side.
- **S2FPacketSetSlot**: Updates the item in a specific inventory slot.
- **S30PacketWindowItems**: Sends all items in an open window's inventory.
- **S31PacketWindowProperty**: Updates a property of a window, like progress bars in brewing or furnace GUIs.
- **S32PacketConfirmTransaction**: Confirms a transaction between the client and server.
- **S33PacketUpdateSign**: Updates the text on a sign.
- **S34PacketMaps**: Sends map data to the client.
- **S35PacketUpdateTileEntity**: Updates data for a tile entity, such as a chest or furnace.
- **S36PacketSignEditorOpen**: Opens the sign editor on the client to allow typing on a sign.
- **S37PacketStatistics**: Sends statistics data, such as blocks broken or time played.
- **S38PacketPlayerListItem**: Updates the player list (Tab menu) with player names, ping, and game mode.
- **S39PacketPlayerAbilities**: Updates the player's abilities, such as whether they can fly or are in creative mode.
- **S3APacketTabComplete**: Provides tab-completion options for commands.
- **S3BPacketScoreboardObjective**: Manages scoreboard objectives.
- **S3CPacketUpdateScore**: Updates the score for an objective.
- **S3DPacketDisplayScoreboard**: Changes the scoreboard display.
- **S3EPacketTeams**: Manages team data for the scoreboard.
- **S3FPacketCustomPayload**: Sends custom plugin messages.
- **S40PacketDisconnect**: Disconnects the player with a message.
- **S41PacketServerDifficulty**: Updates the difficulty level of the server.
- **S42PacketCombatEvent**: Sends combat events, such as entering or leaving combat.
- **S43PacketCamera**: Changes the player's camera perspective, like when controlling an entity.
- **S44PacketWorldBorder**: Updates the world border settings.
- **S45PacketTitle**: Displays a title on the screen.
- **S46PacketSetCompressionLevel**: Sets the compression threshold for packets.
- **S47PacketPlayerListHeaderFooter**: Updates the header and footer of the player list.
- **S48PacketResourcePackSend**: Sends a resource pack URL for the client to download.
- **S49PacketUpdateEntityNBT**: Sends updated NBT data for an entity.

## Outgoing Packets (Packets sent from the client to the server):
- **C00PacketKeepAlive**: Sent by the client to keep the connection alive.
- **C01PacketChatMessage**: Sends a chat message from the client to the server.
- **C02PacketUseEntity**: Interacts with an entity, such as attacking or interacting with it.
- **C03PacketPlayer**: General player movement packet.
- **C04PacketPlayerPosition**: Sends the player’s position to the server.
- **C05PacketPlayerLook**: Sends the player's view direction (yaw and pitch).
- **C06PacketPlayerPosLook**: Sends both the position and look direction.
- **C07PacketPlayerDigging**: Sent when the player starts or finishes digging a block.
- **C08PacketPlayerBlockPlacement**: Sent when the player places a block in the world.
- **C09PacketHeldItemChange**: Notifies the server that the player has changed the selected hotbar slot.
- **C0APacketAnimation**: Sends animations, like arm swings.
- **C0BPacketEntityAction**: Sends entity actions, like crouching or sprinting.
- **C0CPacketClickWindow**: Used for inventory management; sends when an item is clicked in an inventory window.
- **C0DPacketCloseWindow**: Closes the inventory window.
- **C0EPacketClickWindow**: Confirms an item transaction in the inventory.
- **C11PacketEnchantItem**: Used when enchanting an item.
- **C12PacketUpdateSign**: Updates the text of a sign.
- **C13PacketPlayerAbilities**: Sends player ability changes, such as allowing flight or invulnerability.
- **C14PacketTabComplete**: Requests tab-completion options from the server.
- **C15PacketClientSettings**: Sends the player's client settings, like language, chat visibility, and render distance.
- **C16PacketClientStatus**: Updates the client status, like requesting statistics or respawning.
- **C17PacketCustomPayload**: Sends custom plugin messages.
- **C18PacketSpectate**: Sent when the player starts spectating another entity.
- **C19PacketResourcePackStatus**: Sent when the player accepts or declines a resource pack.
- **CAnimateHandPacket**: Simulates the player's hand animation, such as swinging or using an item.

These packet types represent a variety of actions and data exchanged between the client and server in Minecraft, from movement and combat to world interaction and game state

## EntityActionsToCancel:
These are actions associated with an entity's behavior, particularly the player, and they likely correspond to player actions that can be canceled.

- **StartSprint**: Indicates that the player begins sprinting.
- **StopSprint**: Indicates that the player stops sprinting.
- **StartSneaking**: Signals that the player begins sneaking (crouching).
- **StopSneaking**: Signals that the player stops sneaking.
- **StopSleeping**: Indicates that the player has stopped sleeping, likely when exiting a bed.
- **RidingJump**: Used when the player performs a jump while riding an entity (e.g., a horse or pig).
- **OpenInventory**: Triggers when the player opens their inventory.

## DiggingPacket:
These are related to the block digging or destruction process, typically handled when the player interacts with blocks.

- **StartDestroyBlock**: Indicates the player has started breaking a block.
- **AbortDestroyBlock**: Cancels the block destruction process, such as when the player stops mining mid-way.
- **StopDestroyBlock**: Sent when the block is fully destroyed by the player.
- **DropAllItems**: Causes the player to drop all items from their inventory.
- **DropItem**: Drops a single item from the player’s inventory.
- **ReleaseUseItem**: Indicates that the player has stopped using an item (e.g., releasing a bowstring after drawing the bow).

These packets are key to handling player actions related to movement, block breaking, and interactions with their inventory or items.