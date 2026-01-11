// src/utils/validation.js
export const BLOCKED_ZIPS = ['12345', '00000'];

export const validateAddress = (pickup, drop) => {
  // 1. Individually check Pickup for blocked zips
  if (pickup && BLOCKED_ZIPS.some(zip => pickup.includes(zip))) {
    return "Sorry, we don't service this pickup area.";
  }

  // 2. Individually check Drop for blocked zips
  if (drop && BLOCKED_ZIPS.some(zip => drop.includes(zip))) {
    return "Sorry, we don't service this destination.";
  }

  // 3. Check for Same Address (only if both are filled)
  if (pickup && drop && pickup.toLowerCase().trim() === drop.toLowerCase().trim()) {
    return "Pickup and Drop address cannot be the same!";
  }

  return ""; 
};