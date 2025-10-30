const clients = [
  {
    name: "Veeper Vlad",
    body: "img/body1.webp",
    preferred: { shirt: "img/shirt1.webp", pants: "img/pants1.webp", accessory: "img/extra2.webp" }
  },
  {
    name: "Voltar Von Vein",
    body: "img/body2.webp",
    preferred: { shirt: "img/shirt2.webp", pants: "img/pants2.webp", accessory: "img/extra3.webp" }
  },
  {
    name: "Vpeka Vonder",
    body: "img/body3.webp",
    preferred: { shirt: "img/shirt3.webp", pants: "img/pants3.webp", accessory: "img/extra1.webp" }
  }
];
let clientIndex = 0;
let scores = [];

function showClient() {
  const client = clients[clientIndex];
  document.getElementById('client-req').innerText = `Client: ${client.name}\nDress them as they like!`;
  document.getElementById('speech-bubble').innerText = '';
  document.getElementById('blood-drip').innerHTML = '';
  document.getElementById('body').src = client.body; 
}
showClient(); 