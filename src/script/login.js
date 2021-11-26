const axios = require('axios').default;


const refs = {
  modalLog: document.querySelector('#modal-log'),
  logSbmtBtn: document.querySelector('#log-sbmt-btn'),
  logLoginInput: document.querySelector('#log-login-input'),
  logPassInput: document.querySelector('#log-pass-input'),
  logEmailInput: document.querySelector('#log-email-input'),
}

refs.logSbmtBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(refs.regLoginInput.value, refs.regPassInput.value, refs.regEmailInput.value);
  const login = refs.logLoginInput.value;
  const pass = refs.logPassInput.value;

  check(login, pass ).then((res) => {
  let keys = Object.keys(res.data)
  keys.forEach(e => {
    let loginDB = res.data[e].login;
    let passDB = res.data[e].pass;
    if (login === loginDB && pass === passDB) {
      return alert(`hello ${login}`);
      
    }
    })
})
  refs.modalLog.classList.remove('visible');
})

const  check = async (login, pass) => {
  let response = await axios.get(`https://kinoteka-hd-default-rtdb.europe-west1.firebasedatabase.app/registr.json`)
  return response
}

const clear = function () {
  logLoginInput.value = '';
  logPassInput.value = '';
}