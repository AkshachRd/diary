import "./styles.scss";
import profile_icon from "./img/profile_icon.svg";

export const Header = () => {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return (
        <div className="header">
            <div className="header__container">
                <input type="image" src={profile_icon} className="profile__button" alt="Profile Icon"/>
            </div>
            <div className="days-of-week">
                {
                    daysOfWeek.map((dayName, i) => (
                        <span key={i}>{dayName}</span>
                    ))
                }
            </div>
        </div>
    );
};