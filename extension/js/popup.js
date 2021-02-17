const phoneInput = document.querySelector('#phone');
const sendButton = document.querySelector('#send');
const messageTextarea = document.querySelector('#message');

window.intlTelInput(phoneInput, {
  // any initialisation options go here
  separateDialCode: true,
  utilsScript: '../node_modules/intl-tel-input/build/js/utils.js',
  initialCountry: 'auto',
  geoIpLookup: function (success, failure) {
    const savedCountryCode = localStorage.getItem('countryCode');
    if (savedCountryCode) {
      success(savedCountryCode);
      return;
    }
    window.axios({
      url: 'https://ipinfo.io',
      adapter: window.jsonpAdapter
    })
      .then((resp) => {
        localStorage.setItem('countryCode', resp?.data?.country || '');
        const countryCode = resp?.data?.country || 'us';

        success(countryCode);
      });
  }
});

phoneInput.addEventListener('countrychange', () => {
  if (!window.isCountrySet) {
    window.isCountrySet = true;
    return;
  }
  // const iti = window.intlTelInputGlobals.getInstance(input);
  // console.log(iti.getSelectedCountryData());
  localStorage.setItem('countryCode', '');
});

sendButton.addEventListener('click', () => {
  const phoneNumber = phoneInput.value;
  const message = messageTextarea.value;
  if (!phoneNumber || !/^\d+$/.test(phoneNumber)) { return; }
  const url = `https://web.whatsapp.com/send?phone=${phoneNumber}${message ? '&text=' + message : ''}`;
  window.open(url, '_blank');
});
