
document.getElementById('confirmBtn').addEventListener('click', function() {
  const current = getCurrentOutfit();
  const score = calculateScore(clients[clientIndex].preferred, current);
  scores[clientIndex] = score;

  const feedback = score === 5 ? "Oh! Wow, this is so good!" :
    score === 3 ? "Hmm, pretty close!" :
    score === 1 ? "Hermmm... not really my style." : "Noooo, this is not it!";
  document.getElementById('speech-bubble').innerText = feedback;

  // blood money
  document.getElementById('blood-drip').innerHTML = "You will be paid in blood:<br>" + 
    "<span style='color:#8b0203;font-size:2em;'>" +
    "🩸".repeat(score) +
    "</span>";

  // pause to read
  setTimeout(() => {
    clientIndex++;
    if (clientIndex < clients.length) {
      showClient();
    } else {
      showEndScreen();
    }
  }, 2500);
});


function showEndScreen() {
  // scores stores in JSON string
  localStorage.setItem('vlosetScores', JSON.stringify(scores));
  
  // calculate win condition //// score >= 3 === happy
  const happyCount = scores.filter(score => score >= 3).length;
  localStorage.setItem('vlosetHappyCount', happyCount);
  
  window.location.href = 'ending.html'; 
}