const burger = () => {
    const burger = document.querySelector('.humburger-menu')
    const menuElem = document.querySelector('.menu')
    const linksHead = document.querySelectorAll('.menu-list__link')


    const toggleMenu = () => {
        menuElem.classList.toggle('menu-active')
        burger.classList.toggle('humburger-menu-active')
    }
    burger.addEventListener('click', () => {
        toggleMenu()

    })
    linksHead.forEach(link => {
        link.addEventListener('click', () => {
            menuElem.classList.remove('menu-active')
            burger.classList.remove('humburger-menu-active')
        })
    })
}
export default burger;
