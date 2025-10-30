window.onload = function() {
  // Retrieve stored values from localStorage
  const scores = JSON.parse(localStorage.getItem('vlosetScores') || '[]');
  const happyCount = parseInt(localStorage.getItem('vlosetHappyCount') || '0');

  const clients = [
    "Veeper Vlad",
    "Voltar Von Vein",
    "Vpeka Vonder"
  ];

  const resultDiv = document.getElementById('result');

  // display characters
  let html = "<h2>Game Over - Your Scorecard</h2><ul>";
  for(let i = 0; i < clients.length; i++) {
    html += `<li>${clients[i]}: ${scores[i] || 0} 🩸</li>`;
  }
  html += "</ul>";

  if(happyCount >= 2) {
    html += "<p><strong>Congratulations!</strong> You have made at least 2 clients happy. You win!</p>";
  } else {
    html += "<p>Oh no! You didn't satisfy at least 2 clients. You lose.</p>";
  }

  html += '<button id="play-again">Play Again</button>';

  resultDiv.innerHTML = html;

  document.getElementById('play-again').onclick = function() {
    localStorage.clear();
    window.location.href = 'titleScreen.html'; 
  }
}