export const BLOCKED_ZIPS = ['12345', '00000']; // mock blocked codes

export const validateAddress = (address) => {
  if (!address || address.length < 10) {
    return "Please enter a full address (min 10 characters).";
  }
  
  const hasBlockedZip = BLOCKED_ZIPS.some(zip => address.includes(zip));
  if (hasBlockedZip) {
    return "Sorry, we currently do not service this area.";
  }

  return ""; // No error
};