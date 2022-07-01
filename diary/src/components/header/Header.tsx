import profile_icon from "./profile_icon.svg";
import './Header.css';

function Header()
{
    return (
        <div className="header">
            <div className="header__container">
                <input type="image" src={profile_icon} className="profile__button" alt="Profile Icon"/>
            </div>
        </div>
    )
}

export default Header;