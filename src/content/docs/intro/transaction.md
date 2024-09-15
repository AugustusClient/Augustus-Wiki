---
title: Transactions
---
Information was taken from here https://github.com/PhoenixHaven/Anticheat-Detections/tree/main and also self tested on self hosted servers

Transactions in the server-client context of Minecraft are primarily focused on the **exchange of data** (packets) between the server and the player, ensuring that actions are valid, the world remains synchronized, and the gameplay experience is smooth and fair.

### 1. **Packet-Based Networking**
   - Minecraft uses a **packet-based system** for communication between the client and server. A **packet** is a small amount of data that is sent between the server and the client, containing information such as movement, actions, block updates, or chat messages.
   - A "transaction" in this context is essentially the successful transmission and acknowledgment of these packets.
     - **Client-to-Server Packets**: These are sent when a player performs an action (e.g., placing a block, sending a chat message, moving their character).
     - **Server-to-Client Packets**: These are sent in response, updating the client with new information (e.g., the results of placing a block, the chat appearing, changes in the world).

### 2. **Transactional Validation**
   - Minecraft servers validate certain actions, especially those related to inventory, block placement, or interactions. A **transaction packet** is often used to confirm whether an action is valid.
   - For example, if a player moves an item in their inventory or interacts with a chest, the client sends a transaction request to the server. The server will then process the request and either:
     - **Accept** the transaction, allowing the action.
     - **Reject** the transaction, in case something went wrong (e.g., latency issues, or if the action is not allowed by the server’s logic, like anti-cheat systems).

### 3. **Inventory Transactions**
   - One common type of server-client transaction involves **inventory interactions**. When a player moves items in their inventory, the server needs to verify that these actions are legitimate.
     - For instance, if the player picks up or places an item in a chest, the client sends a request to the server to update the inventory. The server processes this request as a transaction, ensuring there’s no desynchronization or duplication (i.e., preventing item duplication glitches).

### 4. **Block and Entity Interactions**
   - When a player breaks or places blocks, or interacts with entities like mobs, this action is processed as a transaction. The client sends a request (action) to the server, and the server validates it before applying it to the game world.
   - The transaction also ensures that the game state (like the block being placed or removed) is correctly reflected across all players in multiplayer.

### 5. **Transaction IDs**
   - In some cases, especially in custom server plugins or mods, transaction IDs are used to track and manage player actions. Each action taken by the player might be assigned a unique ID to ensure the consistency of data between the client and server. This helps with rollback mechanisms, debugging, and ensuring that player actions are properly synchronized.

### 6. **Anti-Cheat and Transaction Validation**
   - In competitive multiplayer environments, servers often use **anti-cheat plugins** that monitor transactions between the client and server.
   - These systems validate actions like player movement, block placement, or item interactions to ensure players aren’t using cheats or mods to manipulate the game world in unfair ways.
   - If an invalid transaction is detected (e.g., a player tries to fly without permission), the server can cancel the transaction and reset the player’s state.

### 7. **Chunk Loading and World State Updates**
   - Minecraft servers send **chunk data** to players as they explore the world. This is another form of transaction, where the server sends the world data (e.g., block types, entities) in a specific area (chunk) to the client.
   - The client requests or receives updates to these chunks as the player moves, ensuring the world is rendered correctly on the player’s side.

### 8. **Latency and Transaction Rollback**
   - If there’s high latency or lag between the client and the server, transactions (such as placing blocks or picking up items) might fail or be delayed. The server may roll back certain actions if they are out of sync with the server's state.
   - This rollback is a way for the server to ensure the consistency and integrity of the game world, even in cases of network instability.

### 9. **Server Logs and Transactions**
   - Minecraft servers log transactions related to player actions, such as inventory changes, block placement, or combat events. These logs can be used for **monitoring** or **debugging** the game, helping server administrators keep track of what’s happening in their world and resolve any issues that arise.