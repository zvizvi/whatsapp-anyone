const iconElement = document.createElement('div');
iconElement.setAttribute('class', '_2n-zq');
iconElement.innerHTML = `<div aria-disabled="false" role="button" tabindex="0"><span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"></path></svg></span></div>`;
setTimeout(() => {
  document.querySelector('#side header .pnYZD > span').prepend(iconElement);
}, 10000);
