function show() {
  const icon = document.querySelector('.menu-bar');
  const hamber = document.querySelector('.btn');
  const xxx = document.querySelector('.x_close');
  icon.style.display = 'flex';
  hamber.style.display='none';
  xxx.style.display = 'flex';

}
function back() {
  const icon = document.querySelector('.menu-bar');
  const hamber = document.querySelector('.btn');
  const xxx = document.querySelector('.x_close');
  icon.style.display = 'none';
  hamber.style.display='block';
  xxx.style.display='none';


}