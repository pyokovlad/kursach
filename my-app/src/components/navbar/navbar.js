import './navbar.css'
import logo from '/workspaces/kursach/my-app/src/components/img/Fusion PC.png'
function Navbar() {
    return (
        <div class='header'>
            <a href="#" class='logo'><img src={logo}></img></a>
            <div class='navbar'>
                <a href='#'>Сборки</a>
                <a href='#'>Гарантии</a>
                <a href='#'>Периферия</a>
                <a href='#'>Комплектующие</a>
                <a href='#'>Контакты</a>
            </div>
        </div>
    );
  }
  
  export default Navbar;