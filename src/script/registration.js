import axios from "axios";

const refs = {
  modalReg: document.querySelector('#modal'),
  regLoginInput: document.querySelector('#reg-login-input'),
  regPassInput: document.querySelector('#reg-pass-input'),
  regEmailInput: document.querySelector('#reg-email-input'),
  regSbmtBtn: document.querySelector('#reg-sbmt-btn'),
}
// console.log(database);

refs.regSbmtBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(refs.regLoginInput.value, refs.regPassInput.value, refs.regEmailInput.value);
  create(refs.regLoginInput.value, refs.regPassInput.value, refs.regEmailInput.value)
  refs.modalReg.classList.remove('visible');
})


const create = function(login, pass, email) {
  return axios.post(`https://kinoteka-hd-default-rtdb.europe-west1.firebasedatabase.app/registr.json`, {
    login: login,
    pass: pass,
    email: email
  })
}


