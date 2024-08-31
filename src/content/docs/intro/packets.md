---
title: Packets and their uses
---
Here is a big list of Packets and their uses :3

### Incoming Packets (Server to Client)

1. **S00PacketKeepAlive**
   - **Purpose**: Used to check the connection latency. The server sends a keep-alive packet, and the client responds to verify that the connection is still active.
   - **Wiki Reference**: [Keep Alive (Serverbound)](https://wiki.vg/Protocol#Keep_Alive_.28serverbound.29)

2. **S02PacketChat**
   - **Purpose**: This packet is used to send chat messages, system messages, and notifications to the client.
   - **Wiki Reference**: [Chat Message](https://wiki.vg/Protocol#Chat_Message)

3. **S03PacketTimeUpdate**
   - **Purpose**: Sends information about the world time to the client.
   - **Wiki Reference**: [Time Update](https://wiki.vg/Protocol#Time_Update)

4. **S04PacketEntityEquipment**
   - **Purpose**: Updates the equipment of an entity, usually a player or a mob, which includes items like weapons, armor, etc.
   - **Wiki Reference**: [Entity Equipment](https://wiki.vg/Protocol#Entity_Equipment)

5. **S05PacketSpawnPosition**
   - **Purpose**: Notifies the client of the world's spawn position.
   - **Wiki Reference**: [Spawn Position](https://wiki.vg/Protocol#Spawn_Position)

6. **S07PacketRespawn**
   - **Purpose**: Used when the player respawns, sending information about the new dimension and environment.
   - **Wiki Reference**: [Respawn](https://wiki.vg/Protocol#Respawn)

7. **S08PacketPlayerPosLook**
   - **Purpose**: Synchronizes the player's position and look direction, usually used to correct the client’s position when it desyncs from the server.
   - **Wiki Reference**: [Player Position and Look](https://wiki.vg/Protocol#Player_Position_And_Look)

8. **S09PacketHeldItemChange**
   - **Purpose**: Updates the currently selected slot in the player's hotbar.
   - **Wiki Reference**: [Held Item Change](https://wiki.vg/Protocol#Held_Item_Change)

9. **S0APacketUseBed**
   - **Purpose**: Sent when a player enters a bed.
   - **Wiki Reference**: [Use Bed](https://wiki.vg/Protocol#Use_Bed)

10. **S0BPacketAnimation**
    - **Purpose**: Triggers animations like arm swings or damage effects.
    - **Wiki Reference**: [Animation](https://wiki.vg/Protocol#Animation)

11. **S0CPacketSpawnPlayer**
    - **Purpose**: Sent when another player enters the render distance, providing details needed to render the player entity.
    - **Wiki Reference**: [Spawn Player](https://wiki.vg/Protocol#Spawn_Player)

12. **S0DPacketCollectItem**
    - **Purpose**: Sent when an item entity is picked up by a player.
    - **Wiki Reference**: [Collect Item](https://wiki.vg/Protocol#Collect_Item)

13. **S0EPacketSpawnObject**
    - **Purpose**: Sent to spawn various objects like projectiles (arrows, thrown items) in the world.
    - **Wiki Reference**: [Spawn Object](https://wiki.vg/Protocol#Spawn_Object)

14. **S0FPacketSpawnMob**
    - **Purpose**: Sent to spawn a mob in the world with all necessary metadata like position and type.
    - **Wiki Reference**: [Spawn Mob](https://wiki.vg/Protocol#Spawn_Mob)

15. **S10PacketSpawnPainting**
    - **Purpose**: Sent to render a painting in the world.
    - **Wiki Reference**: [Spawn Painting](https://wiki.vg/Protocol#Spawn_Painting)

16. **S11PacketSpawnExperienceOrb**
    - **Purpose**: Spawns an experience orb in the world.
    - **Wiki Reference**: [Spawn Experience Orb](https://wiki.vg/Protocol#Spawn_Experience_Orb)

17. **S12PacketEntityVelocity**
    - **Purpose**: Updates the velocity of an entity, commonly used in knockback and projectile motion.
    - **Wiki Reference**: [Entity Velocity](https://wiki.vg/Protocol#Entity_Velocity)

18. **S13PacketDestroyEntities**
    - **Purpose**: Notifies the client to remove one or more entities from the world.
    - **Wiki Reference**: [Destroy Entities](https://wiki.vg/Protocol#Destroy_Entities)

19. **S14PacketEntity**
    - **Purpose**: Handles movement updates for entities that do not include a complete position update (only relative moves).
    - **Wiki Reference**: [Entity](https://wiki.vg/Protocol#Entity)

20. **S15PacketEntityRelMove**
    - **Purpose**: Updates the client with the relative movement of an entity.
    - **Wiki Reference**: [Entity Relative Move](https://wiki.vg/Protocol#Entity_Relative_Move)

21. **S16PacketEntityLookMove**
    - **Purpose**: Updates both the relative movement and the look direction of an entity.
    - **Wiki Reference**: [Entity Look and Relative Move](https://wiki.vg/Protocol#Entity_Look_and_Relative_Move)

22. **S17PacketEntityLook**
    - **Purpose**: Updates the look direction of an entity without moving it.
    - **Wiki Reference**: [Entity Look](https://wiki.vg/Protocol#Entity_Look)

23. **S18PacketEntityTeleport**
    - **Purpose**: Teleports an entity to a specific location.
    - **Wiki Reference**: [Entity Teleport](https://wiki.vg/Protocol#Entity_Teleport)

24. **S19PacketEntityHeadLook**
    - **Purpose**: Updates the direction the entity’s head is facing.
    - **Wiki Reference**: [Entity Head Look](https://wiki.vg/Protocol#Entity_Head_Look)

25. **S1BPacketEntityAttach**
    - **Purpose**: Attaches an entity to another entity, such as a player riding a mount.
    - **Wiki Reference**: [Entity Attach](https://wiki.vg/Protocol#Attach_Entity)

26. **S1CRemoveEntityEffect**
    - **Purpose**: Removes an active effect from an entity.
    - **Wiki Reference**: [Remove Entity Effect](https://wiki.vg/Protocol#Remove_Entity_Effect)

27. **S1DPacketEntityEffect**
    - **Purpose**: Applies or updates an effect on an entity (e.g., potion effects).
    - **Wiki Reference**: [Entity Effect](https://wiki.vg/Protocol#Entity_Effect)

28. **S1EPacketExperience**
    - **Purpose**: Updates the client with the player’s experience level, bar, and total experience points.
    - **Wiki Reference**: [Set Experience](https://wiki.vg/Protocol#Set_Experience)

29. **S20PacketEntityProperties**
    - **Purpose**: Updates the client with the properties (like health, speed, etc.) of an entity.
    - **Wiki Reference**: [Entity Properties](https://wiki.vg/Protocol#Entity_Properties)

30. **S21PacketChunkData**
    - **Purpose**: Sends a chunk of the world to the client, including blocks, biomes, and other data.
    - **Wiki Reference**: [Chunk Data](https://wiki.vg/Protocol#Chunk_Data)

31. **S22PacketMultiBlockChange**
    - **Purpose**: Sends information about multiple block changes in a chunk section.
    - **Wiki Reference**: [Multi Block Change](https://wiki.vg/Protocol#Multi_Block_Change)

32. **S23PacketBlockChange**
    - **Purpose**: Sends information about a single block change.
    - **Wiki Reference**: [Block Change](https://wiki.vg/Protocol#Block_Change)

33. **S24PacketBlockBreakAnim**
    - **Purpose**: Sent to create block-breaking animations.
    - **Wiki Reference**: [Block Break Animation](https://wiki.vg/Protocol#Block_Break_Animation)

34. **S25PacketBlockItemSwitch**
    - **Purpose**: Updates the current item being held by an entity.
    - **Wiki Reference**: [Held Item Change](https://wiki.vg/Protocol#Held_Item_Change)

35. **S26PacketMapChunkBulk**
    - **Purpose**: Sends multiple chunks of data to the client.
    - **Wiki Reference**: [Map Chunk Bulk](https://wiki.vg/Protocol#Map_Chunk_Bulk)

36. **S27PacketExplosion**
    - **Purpose**: Informs the client about an explosion and its effects (like block damage and knockback).
    - **Wiki Reference**: [Explosion](https://wiki.vg/Protocol#Explosion)

37. **S28PacketEffect**
    - **Purpose**: Plays sound or particle effects.
    - **Wiki Reference**: [Effect](https://wiki.vg/Protocol#Effect)

38. **S29PacketSoundEffect**
    - **Purpose**: Plays a sound effect at a specified location.
    - **Wiki Reference**: [Sound Effect](https://wiki.vg/Protocol#Sound_Effect)

39. **S2APacketParticles**
    - **Purpose**: Displays particles in the game world, such as smoke, fire, or explosion effects.
    - **Wiki Reference**: [Particles](https://wiki.vg/Protocol#Particle)

40. **S2BPacketChangeGameState**
    - **Purpose**: Communicates game state changes like weather changes or player sleeping status.
    - **Wiki Reference**: [Change Game State](https://wiki.vg/Protocol#Change_Game_State)

41. **S2CPacketSpawnGlobalEntity**
    - **Purpose**: Spawns global entities like lightning bolts.
    - **Wiki Reference**: [Spawn Global Entity](https://wiki.vg/Protocol#Spawn_Global_Entity)

42. **S2DPacketOpenWindow**
    - **Purpose**: Opens a window like a chest or a crafting table UI on the client.
    - **Wiki Reference**: [Open Window](https://wiki.vg/Protocol#Open_Window)

43. **S2EPacketCloseWindow**
    - **Purpose**: Closes an open window on the client.
    - **Wiki Reference**: [Close Window](https://wiki.vg/Protocol#Close_Window)

44. **S2FPacketSetSlot**
    - **Purpose**: Updates the contents of a specific slot in an inventory window.
    - **Wiki Reference**: [Set Slot](https://wiki.vg/Protocol#Set_Slot)

45. **S30PacketWindowItems**
    - **Purpose**: Updates the entire inventory window.
    - **Wiki Reference**: [Window Items](https://wiki.vg/Protocol#Window_Items)

46. **S31PacketWindowProperty**
    - **Purpose**: Updates properties of a window, such as progress bars in furnaces.
    - **Wiki Reference**: [Window Property](https://wiki.vg/Protocol#Window_Property)

47. **S32PacketConfirmTransaction**
    - **Purpose**: Confirms that a transaction (like moving items in an inventory) has been processed correctly.
    - **Wiki Reference**: [Confirm Transaction](https://wiki.vg/Protocol#Confirm_Transaction)

48. **S33PacketUpdateSign**
    - **Purpose**: Updates the text on a sign block.
    - **Wiki Reference**: [Update Sign](https://wiki.vg/Protocol#Update_Sign)

49. **S34PacketMaps**
    - **Purpose**: Sends map data to the client.
    - **Wiki Reference**: [Maps](https://wiki.vg/Protocol#Maps)

50. **S35PacketUpdateTileEntity**
    - **Purpose**: Updates the NBT data of a tile entity like chests or beacons.
    - **Wiki Reference**: [Update Block Entity](https://wiki.vg/Protocol#Update_Block_Entity)

51. **S36PacketSignEditorOpen**
    - **Purpose**: Opens the sign editor interface on the client.
    - **Wiki Reference**: [Sign Editor Open](https://wiki.vg/Protocol#Sign_Editor_Open)

52. **S37PacketStatistics**
    - **Purpose**: Updates the player's statistics.
    - **Wiki Reference**: [Statistics](https://wiki.vg/Protocol#Statistics)

53. **S38PacketPlayerListItem**
    - **Purpose**: Updates the player list in the multiplayer screen.
    - **Wiki Reference**: [Player Info](https://wiki.vg/Protocol#Player_Info)

54. **S39PacketPlayerAbilities**
    - **Purpose**: Updates the player's abilities like flying or invulnerability.
    - **Wiki Reference**: [Player Abilities](https://wiki.vg/Protocol#Player_Abilities)

55. **S3APacketTabComplete**
    - **Purpose**: Provides tab-completion results for chat commands.
    - **Wiki Reference**: [Tab-Complete](https://wiki.vg/Protocol#Tab-Complete)

56. **S3BPacketScoreboardObjective**
    - **Purpose**: Creates, updates, or removes a scoreboard objective.
    - **Wiki Reference**: [Scoreboard Objective](https://wiki.vg/Protocol#Scoreboard_Objective)

57. **S3CPacketUpdateScore**
    - **Purpose**: Updates or removes a score in a scoreboard.
    - **Wiki Reference**: [Update Score](https://wiki.vg/Protocol#Update_Score)

58. **S3DPacketDisplayScoreboard**
    - **Purpose**: Sets the display position for a scoreboard (sidebar, list, or below name).
    - **Wiki Reference**: [Display Scoreboard](https://wiki.vg/Protocol#Display_Scoreboard)

59. **S3EPacketTeams**
    - **Purpose**: Creates, updates, or removes a team in the scoreboard system.
    - **Wiki Reference**: [Teams](https://wiki.vg/Protocol#Teams)

60. **S3FPacketCustomPayload**
    - **Purpose**: Used for sending custom data between server and client, often used by plugins or mods.
    - **Wiki Reference**: [Plugin Message](https://wiki.vg/Protocol#Plugin_Message)

61. **S40PacketDisconnect**
    - **Purpose**: Informs the client that it has been disconnected from the server.
    - **Wiki Reference**: [Disconnect](https://wiki.vg/Protocol#Disconnect)

62. **S41PacketServerDifficulty**
    - **Purpose**: Updates the difficulty level of the server.
    - **Wiki Reference**: [Server Difficulty](https://wiki.vg/Protocol#Server_Difficulty)

63. **S42PacketCombatEvent**
    - **Purpose**: Reports various combat-related events, like entering or leaving combat.
    - **Wiki Reference**: [Combat Event](https://wiki.vg/Protocol#Combat_Event)

64. **S43PacketCamera**
    - **Purpose**: Updates the client's camera to follow a specific entity.
    - **Wiki Reference**: [Camera](https://wiki.vg/Protocol#Camera)

65. **S44PacketWorldBorder**
    - **Purpose**: Manages the world border, such as setting its size or position.
    - **Wiki Reference**: [World Border](https://wiki.vg/Protocol#World_Border)

66. **S45PacketTitle**
    - **Purpose**: Displays titles and subtitles on the client.
    - **Wiki Reference**: [Title](https://wiki.vg/Protocol#Title)

67. **S46PacketSetCompressionLevel**
    - **Purpose**: Sets the compression level for network traffic.
    - **Wiki Reference**: [Set Compression](https://wiki.vg/Protocol#Set_Compression)

68. **S47PacketPlayerListHeaderFooter**
    - **Purpose**: Updates the header and footer of the multiplayer player list.
    - **Wiki Reference**: [Player List Header and Footer](https://wiki.vg/Protocol#Player_List_Header_and_Footer)

69. **S48PacketResourcePackSend**
    - **Purpose**: Sends a resource pack to the client.
    - **Wiki Reference**: [Resource Pack Send](https://wiki.vg/Protocol#Resource_Pack_Send)

70. **S49PacketUpdateEntityNBT**
    - **Purpose**: Sends an updated NBT tag to the client for a specific entity.
    - **Wiki Reference**: [Update Entity NBT](https://wiki.vg/Protocol#Update_Entity_NBT)


### Outgoing Packets (Client to Server)

1. **C00PacketKeepAlive**
   - **Purpose**: Sent by the client to confirm that the connection is still active, responding to a server's keep-alive packet.
   - **Wiki Reference**: [Keep Alive (Clientbound)](https://wiki.vg/Protocol#Keep_Alive_.28clientbound.29)

2. **C01PacketChatMessage**
   - **Purpose**: Sends a chat message from the client to the server.
   - **Wiki Reference**: [Chat Message](https://wiki.vg/Protocol#Chat_Message)

3. **C02PacketUseEntity**
   - **Purpose**: Interacts with an entity (e.g., attacking or interacting).
   - **Wiki Reference**: [Use Entity](https://wiki.vg/Protocol#Use_Entity)

4. **C03PacketPlayer**
   - **Purpose**: Sent regularly to update the server with the player's position or movement.
   - **Wiki Reference**: [Player](https://wiki.vg/Protocol#Player)

5. **C04PacketPlayerPosition**
   - **Purpose**: Sends the player’s position to the server.
   - **Wiki Reference**: [Player Position](https://wiki.vg/Protocol#Player_Position)

6. **C05PacketPlayerLook**
   - **Purpose**: Sends the player's look direction to the server.
   - **Wiki Reference**: [Player Look](https://wiki.vg/Protocol#Player_Look)

7. **C06PacketPlayerPosLook**
   - **Purpose**: Combines both position and look direction into one packet.
   - **Wiki Reference**: [Player Position and Look](https://wiki.vg/Protocol#Player_Position_And_Look)

8. **C07PacketPlayerDigging**
   - **Purpose**: Informs the server that the player started or stopped digging a block.
   - **Wiki Reference**: [Player Digging](https://wiki.vg/Protocol#Player_Digging)

9. **C07PacketPlayerDigging**
   - **Purpose**: Informs the server when the player starts or stops digging a block, as well as when they drop an item.
   - **Wiki Reference**: [Player Digging](https://wiki.vg/Protocol#Player_Digging)

10. **C08PacketPlayerBlockPlacement**
    - **Purpose**: Sent when the player places a block or interacts with an object, such as opening a chest.
    - **Wiki Reference**: [Player Block Placement](https://wiki.vg/Protocol#Player_Block_Placement)

11. **C09PacketHeldItemChange**
    - **Purpose**: Updates the server with the currently selected slot in the player's hotbar.
    - **Wiki Reference**: [Held Item Change](https://wiki.vg/Protocol#Held_Item_Change)

12. **C0APacketAnimation**
    - **Purpose**: Sent when the player performs an animation, like swinging an arm.
    - **Wiki Reference**: [Animation](https://wiki.vg/Protocol#Animation)

13. **C0BPacketEntityAction**
    - **Purpose**: Sent when the player performs an action such as sneaking, sprinting, or mounting a horse.
    - **Wiki Reference**: [Entity Action](https://wiki.vg/Protocol#Entity_Action)

14. **C0CPacketInput**
    - **Purpose**: Used by vehicles to send information about movement inputs.
    - **Wiki Reference**: [Steer Vehicle](https://wiki.vg/Protocol#Steer_Vehicle)

15. **C0DPacketCloseWindow**
    - **Purpose**: Notifies the server when a client closes a window (e.g., inventory).
    - **Wiki Reference**: [Close Window](https://wiki.vg/Protocol#Close_Window)

16. **C0EPacketClickWindow**
    - **Purpose**: Sent when the player clicks in a window, such as picking up or placing an item in an inventory slot.
    - **Wiki Reference**: [Click Window](https://wiki.vg/Protocol#Click_Window)

17. **C0FPacketConfirmTransaction**
    - **Purpose**: Confirms a transaction when the server requests validation for an action taken in an inventory window.
    - **Wiki Reference**: [Confirm Transaction](https://wiki.vg/Protocol#Confirm_Transaction)

18. **C10PacketCreativeInventoryAction**
    - **Purpose**: Used in Creative mode to update items in an inventory slot.
    - **Wiki Reference**: [Creative Inventory Action](https://wiki.vg/Protocol#Creative_Inventory_Action)

19. **C11PacketEnchantItem**
    - **Purpose**: Sent when the player attempts to enchant an item at an enchantment table.
    - **Wiki Reference**: [Enchant Item](https://wiki.vg/Protocol#Enchant_Item)

20. **C12PacketUpdateSign**
    - **Purpose**: Updates the text on a sign.
    - **Wiki Reference**: [Update Sign](https://wiki.vg/Protocol#Update_Sign)

21. **C13PacketPlayerAbilities**
    - **Purpose**: Updates the server with the player's abilities (e.g., flying in Creative mode).
    - **Wiki Reference**: [Player Abilities](https://wiki.vg/Protocol#Player_Abilities)

22. **C14PacketTabComplete**
    - **Purpose**: Sent when the player requests tab-completion (e.g., for commands).
    - **Wiki Reference**: [Tab-Complete](https://wiki.vg/Protocol#Tab-Complete)

23. **C15PacketClientSettings**
    - **Purpose**: Sends client settings like language, view distance, and chat visibility to the server.
    - **Wiki Reference**: [Client Settings](https://wiki.vg/Protocol#Client_Settings)

24. **C16PacketClientStatus**
    - **Purpose**: Used for actions like requesting statistics or joining the game.
    - **Wiki Reference**: [Client Status](https://wiki.vg/Protocol#Client_Status)

25. **C17PacketCustomPayload**
    - **Purpose**: Allows the client to send custom data to the server, often used by mods or plugins.
    - **Wiki Reference**: [Plugin Message](https://wiki.vg/Protocol#Plugin_Message)

26. **C18PacketSpectate**
    - **Purpose**: Used to switch between entities while in spectator mode.
    - **Wiki Reference**: [Spectate](https://wiki.vg/Protocol#Spectate)

27. **C19PacketResourcePackStatus**
    - **Purpose**: Informs the server about the client's status regarding a resource pack (e.g., whether it was accepted or declined).
    - **Wiki Reference**: [Resource Pack Status](https://wiki.vg/Protocol#Resource_Pack_Status)