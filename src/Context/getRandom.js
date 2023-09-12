function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array of API keys
const apiKeys = [
  "6f9148c7b54c4d57a5806ff1e61c3c0e",
  "3a2b4a0208294b96a5c298bd4f92eecc",
  "ca9c2fca53a4407fb3d48c6666971842",
];

// Function to get a random API key
function getRandomAPIKey() {
  const randomIndex = getRandomInt(0, apiKeys.length - 1);
  return apiKeys[randomIndex];
}

// Export the getRandomAPIKey function
export { getRandomAPIKey };
