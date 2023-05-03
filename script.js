//Program Asynchronous Encrypt Decrypt

//buat func untuk encrypt
function encryptMessage(publicKey, message) {
  const encrypted = CryptoJS.AES.encrypt(message, publicKey).toString();

  return encrypted;
}

function decryptMessage(privateKey, ciphertext) {
  const decrypted = CryptoJS.AES.decrypt(ciphertext, privateKey);
  const plaintext = decrypted.toString(CryptoJS.enc.Utf8);

  return plaintext;
}

//buat func untuk encrypt
const encryptForm = document.getElementById('encrypt-form');
encryptForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const publicKey = document.getElementById('public-key').value;
  const plaintext = document.getElementById('plaintext').value;


  const ciphertext = encryptMessage(publicKey, plaintext);

  document.getElementById('ciphertext').value = ciphertext;
});

//buat func untuk Decrypt
const decryptForm = document.getElementById('decrypt-form');
decryptForm.addEventListener('submit', (event) => {

  event.preventDefault();

  const privateKey = document.getElementById('private-key').value;
  const ciphertext = document.getElementById('ciphertext2').value;

  const plaintext = decryptMessage(privateKey, ciphertext);

  document.getElementById('plaintext2').value = plaintext;
});
