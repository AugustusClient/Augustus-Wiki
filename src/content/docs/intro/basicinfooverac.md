---
title: Basic info about Anticheats
---

### 1. **Simulation-Based Detection**
In this method, the server essentially tries to **simulate** what should have happened based on the player’s current state and environment. By comparing the player’s actions with what the game physics and rules dictate, the server can catch discrepancies that indicate cheating.

#### How It Works:
- **Movement Cheats Detection:** The anti-cheat simulates what would happen if a player were moving within the rules (e.g., walking, jumping). If the player moves faster than the simulation predicts (like with speed hacks or fly hacks), it flags them.
- **Combat Cheats Detection:** For things like **killaura**, the anti-cheat might simulate a player’s reach distance or aim. If the player is hitting opponents outside their normal reach or angle, the simulation detects something off.

#### Example of Detected Cheats:
- **Fly hacks** (player floating without following gravity).
- **Speed hacks** (moving faster than possible).
- **Killaura** (hitting players outside of legitimate reach).

#### Pros:
- Good for detecting physics-based cheats (speed, fly).
- Relatively accurate for movement-related cheats.

#### Cons:
- It might produce false positives due to server lag or ping issues.
- Complex interactions (e.g., knockback from PvP or odd terrain) can confuse the simulation.

---

### 2. **Packet-Based Detection**
Packet-based detection looks at the **data packets** that the Minecraft client sends to the server. Every action a player takes (moving, attacking, breaking blocks) gets sent to the server as a packet. By monitoring and analyzing these packets, the anti-cheat can detect unusual patterns.

#### How It Works:
- **Packet Monitoring:** The server receives a steady stream of packets from the client that describe the player's movement, actions, and interactions with the world.
- The anti-cheat checks for anomalies like **too many packets per second** (which could indicate speed hacks) or packets that don't align with expected game behavior.
- For example, if a player sends packets saying they are moving faster than physically possible or attacking multiple targets at the same time, the system can detect this.

#### Example of Detected Cheats:
- **Speed hacks** (too many movement packets in too short a time).
- **Killaura/Auto-clicker** (irregular attack or interaction packets).
- **Fly hacks** (sending movement packets that don’t match gravity rules).

#### Pros:
- Effective against a wide range of cheats, especially client-side hacks.
- Low overhead on server performance.

#### Cons:
- Relies heavily on network integrity (packet loss or high ping can cause false positives).
- Cheaters can sometimes modify the client to send more realistic packets, bypassing detection (though this is rare with advanced anti-cheats).

---

### 3. **Tick-Based Detection**
Minecraft operates in **game ticks** (20 ticks per second). Tick-based anti-cheat systems monitor actions within these timeframes to detect cheats that occur **faster** or **slower** than what is allowed by the game’s tick rate.

#### How It Works:
- Minecraft processes player inputs in 20 ticks per second. If a player moves or performs actions too quickly between ticks, the anti-cheat flags it.
- For example, **auto-clickers** that send attack commands faster than a human could physically click within a certain number of ticks can be detected.

#### Example of Detected Cheats:
- **Auto-clickers** (more interactions within ticks than should be humanly possible).
- **FastPlace/FastBreak** (placing or breaking blocks faster than allowed).
- **NoSlowdown** (a cheat that allows players to perform actions at full speed while sprinting, which normally has limitations based on ticks).

#### Pros:
- Good at detecting speed-related cheats and automation (auto-clickers, fast breaking).
- Easy to implement since ticks are integral to how Minecraft operates.

#### Cons:
- Can produce false positives if there’s server lag or desync between client and server ticks.
- Might not catch more subtle or advanced cheats that operate within the game’s tick limits.

---

### 4. **Statistical/Heuristic Detection**
Statistical detection methods use **patterns** and **historical data** to detect cheats. This type of anti-cheat analyzes player behavior over time, looking for patterns that are not typical of normal gameplay.

#### How It Works:
- The anti-cheat tracks data points like **average movement speed**, **attack speed**, or **clicks per second** and compares them to thresholds.
- If a player consistently clicks faster than a normal human or moves faster than expected, the system flags them for cheating.
- Machine learning or heuristic methods may be applied to **learn** what normal player behavior looks like and detect deviations.

#### Example of Detected Cheats:
- **Auto-clickers** (consistent, inhumanly fast clicking).
- **X-Ray hacks** (finding too many valuable ores in a short period of time).
- **Combat cheats** (impossibly quick reactions or aim).

#### Pros:
- Can catch cheaters that don’t trigger other anti-cheat methods.
- Useful for detecting subtle, long-term cheats.

#### Cons:
- Requires a large dataset and fine-tuning to avoid false positives.
- Difficult to use in small servers with few players.

---

### 5. **Hitbox/Bounding Box Detection**
This method specifically looks at **hitboxes** (the invisible area around players or entities that can be interacted with). Cheaters often manipulate hitboxes to increase their range in combat or interact with entities outside their normal distance.

#### How It Works:
- The anti-cheat tracks how a player interacts with hitboxes (i.e., hitting players or entities).
- If a player hits a target that’s outside their normal reach or aim (e.g., killaura or reach hacks), the system flags it.

#### Example of Detected Cheats:
- **Reach hacks** (hitting players from farther away than allowed).
- **Hitbox manipulation** (expanding the area where hits can register).
  
#### Pros:
- Great for PvP environments and combat-heavy servers.
  
#### Cons:
- Can be tricky to detect when the server or client has lag.
  
---

### 6. **Command/Interaction-Based Detection**
This method focuses on detecting illegal or unusual **command usage** or **interactions** with the world.

#### How It Works:
- The anti-cheat watches for players interacting with blocks, commands, or entities in ways that are impossible or unexpected (e.g., breaking blocks too fast, opening too many containers in a short period, using commands in rapid succession).
  
#### Example of Detected Cheats:
- **X-Ray** (quick interactions with valuable blocks).
- **FastBreak** (breaking blocks faster than normal).
  
#### Pros:
- Simple and effective for many types of interaction cheats.
  
#### Cons:
- Limited scope; might need to be combined with other methods for full cheat detection.

---

### Summary of Anti-Cheat Variants:
- **Simulation-Based Detection:** Predicts normal player behavior and compares it to actual actions.
- **Packet-Based Detection:** Analyzes packets sent from the client to detect anomalies.
- **Tick-Based Detection:** Monitors actions within Minecraft’s 20-ticks-per-second system to find cheats.
- **Statistical/Heuristic Detection:** Uses data analysis and patterns to find unusual behavior over time.
- **Hitbox/Bounding Box Detection:** Detects irregularities in how a player interacts with hitboxes (useful for PvP).
- **Command/Interaction-Based Detection:** Focuses on suspicious world interaction or command use.