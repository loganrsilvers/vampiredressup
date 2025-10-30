document.querySelectorAll('.shirt-option').forEach(function(img) {
  img.addEventListener('click', function() {
    document.getElementById('main-shirt').src = this.getAttribute('data-src');
  });
});

document.querySelectorAll('.pants-option').forEach(function(img) {
  img.addEventListener('click', function() {
    document.getElementById('main-pants').src = this.getAttribute('data-src');
  });
});

document.querySelectorAll('.extra-option').forEach(function(img) {
  img.addEventListener('click', function() {
    document.getElementById('main-accessory').src = this.getAttribute('data-src');
    });
});