---
title: Packets and their uses
---
Here is a big list of Packets and their uses :3

### Incoming Packets (Server to Client)

**S00PacketKeepAlive**
Used to check the connection laten
The server sends a keep-alive packet, and the client responds to verify that the connection is still active.

**S02PacketChat**
This packet is used to send chat messages, system messages, and notifications to the client.

**S03PacketTimeUpdate**
Sends information about the world time to the client.

**S04PacketEntityEquipment**
Updates the equipment of an entity, usually a player or a mob, which includes items like weapons, armor, etc.

**S05PacketSpawnPosition**
Notifies the client of the world's spawn position.

**S07PacketRespawn**
Used when the player respawns, sending information about the new dimension and environment.

**S08PacketPlayerPosLook**
Synchronizes the player's position and look direction, usually used to correct the client’s position when it desyncs from the server.

**S09PacketHeldItemChange**
Updates the currently selected slot in the player's hotbar.

**S0APacketUseBed**
Sent when a player enters a bed.


**S0BPacketAnimation**
 Triggers animations like arm swings or damage effects.


**S0CPacketSpawnPlayer**
 Sent when another player enters the render distance, providing details needed to render the player entity.


**S0DPacketCollectItem**
 Sent when an item entity is picked up by a player.


**S0EPacketSpawnObject**
 Sent to spawn various objects like projectiles (arrows, thrown items) in the world.


**S0FPacketSpawnMob**
 Sent to spawn a mob in the world with all necessary metadata like position and type.


**S10PacketSpawnPainting**
 Sent to render a painting in the world.


**S11PacketSpawnExperienceOrb**
 Spawns an experience orb in the world.


**S12PacketEntityVelocity**
 Updates the velocity of an entity, commonly used in knockback and projectile motion.


**S13PacketDestroyEntities**
 Notifies the client to remove one or more entities from the world.


**S14PacketEntity**
 Handles movement updates for entities that do not include a complete position update (only relative moves).


**S15PacketEntityRelMove**
 Updates the client with the relative movement of an entity.


**S16PacketEntityLookMove**
 Updates both the relative movement and the look direction of an entity.


**S17PacketEntityLook**
 Updates the look direction of an entity without moving it.


**S18PacketEntityTeleport**
 Teleports an entity to a specific location.


**S19PacketEntityHeadLook**
 Updates the direction the entity’s head is facing.


**S1BPacketEntityAttach**
 Attaches an entity to another entity, such as a player riding a mount.


**S1CRemoveEntityEffect**
 Removes an active effect from an entity.


**S1DPacketEntityEffect**
 Applies or updates an effect on an entity (e.g., potion effects).


**S1EPacketExperience**
 Updates the client with the player’s experience level, bar, and total experience points.


**S20PacketEntityProperties**
 Updates the client with the properties (like health, speed, etc.) of an entity.


**S21PacketChunkData**
 Sends a chunk of the world to the client, including blocks, biomes, and other data.


**S22PacketMultiBlockChange**
 Sends information about multiple block changes in a chunk section.


**S23PacketBlockChange**
 Sends information about a single block change.


**S24PacketBlockBreakAnim**
 Sent to create block-breaking animations.


**S25PacketBlockItemSwitch**
 Updates the current item being held by an entity.


**S26PacketMapChunkBulk**
 Sends multiple chunks of data to the client.


**S27PacketExplosion**
 Informs the client about an explosion and its effects (like block damage and knockback).


**S28PacketEffect**
 Plays sound or particle effects.


**S29PacketSoundEffect**
 Plays a sound effect at a specified location.


**S2APacketParticles**
 Displays particles in the game world, such as smoke, fire, or explosion effects.


**S2BPacketChangeGameState**
 Communicates game state changes like weather changes or player sleeping status.


**S2CPacketSpawnGlobalEntity**
 Spawns global entities like lightning bolts.


**S2DPacketOpenWindow**
 Opens a window like a chest or a crafting table UI on the client.


**S2EPacketCloseWindow**
 Closes an open window on the client.


**S2FPacketSetSlot**
 Updates the contents of a specific slot in an inventory window.


**S30PacketWindowItems**
 Updates the entire inventory window.


**S31PacketWindowProperty**
 Updates properties of a window, such as progress bars in furnaces.


**S32PacketConfirmTransaction**
 Confirms that a transaction (like moving items in an inventory) has been processed correctly.


**S33PacketUpdateSign**
 Updates the text on a sign block.


**S34PacketMaps**
 Sends map data to the client.


**S35PacketUpdateTileEntity**
 Updates the NBT data of a tile entity like chests or beacons.


**S36PacketSignEditorOpen**
 Opens the sign editor interface on the client.


**S37PacketStatistics**
 Updates the player's statistics.


**S38PacketPlayerListItem**
 Updates the player list in the multiplayer screen.


**S39PacketPlayerAbilities**
 Updates the player's abilities like flying or invulnerability.


**S3APacketTabComplete**
 Provides tab-completion results for chat commands.


**S3BPacketScoreboardObjective**
 Creates, updates, or removes a scoreboard objective.


**S3CPacketUpdateScore**
 Updates or removes a score in a scoreboard.


**S3DPacketDisplayScoreboard**
 Sets the display position for a scoreboard (sidebar, list, or below name).


**S3EPacketTeams**
 Creates, updates, or removes a team in the scoreboard system.


**S3FPacketCustomPayload**
 Used for sending custom data between server and client, often used by plugins or mods.


**S40PacketDisconnect**
 Informs the client that it has been disconnected from the server.


**S41PacketServerDifficulty**
 Updates the difficulty level of the server.


**S42PacketCombatEvent**
 Reports various combat-related events, like entering or leaving combat.


**S43PacketCamera**
 Updates the client's camera to follow a specific entity.


**S44PacketWorldBorder**
 Manages the world border, such as setting its size or position.


**S45PacketTitle**
 Displays titles and subtitles on the client.


**S46PacketSetCompressionLevel**
 Sets the compression level for network traffic.


**S47PacketPlayerListHeaderFooter**
 Updates the header and footer of the multiplayer player list.


**S48PacketResourcePackSend**
 Sends a resource pack to the client.


**S49PacketUpdateEntityNBT**
 Sends an updated NBT tag to the client for a specific entity.


### Outgoing Packets (Client to Server)

**C00PacketKeepAlive**
Sent by the client to confirm that the connection is still active, responding to a server's keep-alive packet.

**C01PacketChatMessage**
Sends a chat message from the client to the server.

**C02PacketUseEntity**
Interacts with an entity (e.g., attacking or interacting).

**C03PacketPlayer**
Sent regularly to update the server with the player's position or movement.

**C04PacketPlayerPosition**
Sends the player’s position to the server.

**C05PacketPlayerLook**
Sends the player's look direction to the server.

**C06PacketPlayerPosLook**
Combines both position and look direction into one packet.

**C07PacketPlayerDigging**
Informs the server that the player started or stopped digging a block.

**C07PacketPlayerDigging**
Informs the server when the player starts or stops digging a block, as well as when they drop an item.


**C08PacketPlayerBlockPlacement**
 Sent when the player places a block or interacts with an object, such as opening a chest.


**C09PacketHeldItemChange**
 Updates the server with the currently selected slot in the player's hotbar.


**C0APacketAnimation**
 Sent when the player performs an animation, like swinging an arm.


**C0BPacketEntityAction**
 Sent when the player performs an action such as sneaking, sprinting, or mounting a horse.


**C0CPacketInput**
 Used by vehicles to send information about movement inputs.


**C0DPacketCloseWindow**
 Notifies the server when a client closes a window (e.g., inventory).


**C0EPacketClickWindow**
 Sent when the player clicks in a window, such as picking up or placing an item in an inventory slot.


**C0FPacketConfirmTransaction**
 Confirms a transaction when the server requests validation for an action taken in an inventory window.


**C10PacketCreativeInventoryAction**
 Used in Creative mode to update items in an inventory slot.


**C11PacketEnchantItem**
 Sent when the player attempts to enchant an item at an enchantment table.


**C12PacketUpdateSign**
 Updates the text on a sign.


**C13PacketPlayerAbilities**
 Updates the server with the player's abilities (e.g., flying in Creative mode).


**C14PacketTabComplete**
 Sent when the player requests tab-completion (e.g., for commands).


**C15PacketClientSettings**
 Sends client settings like language, view distance, and chat visibility to the server.


**C16PacketClientStatus**
 Used for actions like requesting statistics or joining the game.


**C17PacketCustomPayload**
 Allows the client to send custom data to the server, often used by mods or plugins.


**C18PacketSpectate**
 Used to switch between entities while in spectator mode.


**C19PacketResourcePackStatus**
 Informs the server about the client's status regarding a resource pack (e.g., whether it was accepted or declined).