
function sv(id, vi){
    document.getElementById(id).style.display = vi;
}
const navlink = document.querySelectorAll('.navlink');
navlink.forEach(dothis => {
    dothis.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        dothis.classList.add('active');
    })
})