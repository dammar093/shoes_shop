let icon=document.getElementById('icon');
let ul=document.querySelector('ul');
let cancel=document.getElementById('cancel');
icon.addEventListener('click',()=>{
  ul.style.display='block';
  icon.style.display='none';
  cancel.style.display='block';
});
cancel.addEventListener('click',()=>{
    ul.style.display='none';
    cancel.style.display='none';
    icon.style.display='block';
})

