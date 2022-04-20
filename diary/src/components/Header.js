import profile_icon from "./profile_icon.svg";
import './Header.css';

function Header()
{
    return (
        <div className="header">
            <div className="header__container">
                <input type="image" src={profile_icon} className="profile__button" alt="Profile Icon"/>
            </div>
            <div className="days-of-week">
                <span className="days-of-week__day">Monday</span>
                <span className="days-of-week__day">Tuesday</span>
                <span className="days-of-week__day">Wednesday</span>
                <span className="days-of-week__day">Thursday</span>
                <span className="days-of-week__day">Friday</span>
                <span className="days-of-week__day">Saturday</span>
                <span className="days-of-week__day">Sunday</span>
            </div>
        </div>
    )
}

export default Header;