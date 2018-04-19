import CryptoJS from 'crypto-js';

const SECRET_KEY = 'THIS IS A LOG';

const encrypt = (data, isKept)=>{
  let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY);

  if (isKept) {
    return ciphertext;
  } else {
    return ciphertext.toString();
  }
};

const decrypt = (str, isKept)=>{
  let bytes = CryptoJS.AES.decrypt(str, SECRET_KEY);;
  if (isKept) {
    return bytes;
  } else {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
};

export default {
  encrypt,
  decrypt,
  CryptoJS,
}
