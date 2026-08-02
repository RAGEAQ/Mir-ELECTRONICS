/* header interactions: category active + login dropdown click fallback */
(function(){
  const cats = document.querySelectorAll('.categories-row .cat-item');
  if(cats.length){
    cats.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        cats.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        // smooth center the clicked item
        btn.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
      });
    });
  }

  // login dropdown click fallback for mobile
  const login = Array.from(document.querySelectorAll('.header-actions .action-link')).find(a=>a.innerText && a.innerText.trim().toLowerCase().includes('login'));
  if(login){
    if(!login.querySelector('.login-dropdown')){
      const dd = document.createElement('div');
      dd.className = 'login-dropdown';
      dd.innerHTML = '<strong>Login</strong><div style="margin-top:6px;font-size:13px">Sign in to your account</div>';
      login.appendChild(dd);
    }
    login.addEventListener('click', (e)=>{
      if(window.innerWidth<=768){ e.preventDefault(); const dd=login.querySelector('.login-dropdown'); dd.style.display = dd.style.display==='block' ? 'none' : 'block'; }
    });
  }

  // location quick prompt (works if #select-location exists)
  const selectLocation = document.getElementById('select-location');
  if(selectLocation){
    selectLocation.addEventListener('click', (e)=>{
      e.preventDefault();
      const loc = prompt('Enter delivery location (city or PIN):','Ganderbal');
      if(loc) selectLocation.innerHTML = loc + ' &nbsp;›';
    });
  }
})();
