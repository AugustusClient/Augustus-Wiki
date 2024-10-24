---
title: Vulcan
---

## Vulcan 2.7.2-
- First transaction on join will be -30767
- Second transaction on join will be -30766
- Third transaction on join will be -25767

## Vulcan 2.7.3+
- First transaction on join will be -23767
- Second transaction on join will be -23766
- Third transaction on join will be -23765

## General Notes

- Vulcan will send a transaction on velocity starting at -30767 and will go up by 1 every velocity
- Vulcan will send a transaction on every potion effect added starting at -28767 and will go up by 1 for every potion effect
- Vulcan has config options to lag back for ghost blocks and chunk motion (-0.098f)
- Can be checked for by typing /vulcan, /alerts, /vulcan kb, /vulcan info, /vulcan player, /vulcan gui