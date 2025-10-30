function getCurrentOutfit() {
  return {
    shirt: document.getElementById('main-shirt').src,
    pants: document.getElementById('main-pants').src,
    accessory: document.getElementById('main-accessory').src
  };
}

function calculateScore(preferred, picked) {
  let score = 0;
  if (picked.shirt.endsWith(preferred.shirt)) score++;
  if (picked.pants.endsWith(preferred.pants)) score++;
  if (picked.accessory.endsWith(preferred.accessory)) score++;
  // If exactly matches all, 5 points; 2 items match = 3 points; 1=1 point; none=0
  return score === 3 ? 5 : score === 2 ? 3 : score === 1 ? 1 : 0;
}