import './navbar.css'
import logo from '/workspaces/kursach/my-app/src/components/img/Fusion PC.png'
import login from '/workspaces/kursach/my-app/src/components/img/login.png'
import basket from '/workspaces/kursach/my-app/src/components/img/basket.png'
function Navbar() {
    return (
        <nav class='header'>
            <a href="#" class='logo'><img src={logo}></img></a>
            <div class='navbar'>
                <a href='#'>Сборки</a>
                <a href='#'>Гарантии</a>
                <a href='#'>Периферия</a>
                <a href='#'>Комплектующие</a>
                <a href='#'>Контакты</a>
            </div>
            <div class='loginbasket'>
                <a href="#" class='login'><img src={login}></img></a>
                <a href="#" class='basket'><img src={basket}></img></a>
            </div>
        </nav>
    );
  }
  
  export default Navbar;