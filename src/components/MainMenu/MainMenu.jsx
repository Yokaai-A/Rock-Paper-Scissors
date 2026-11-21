import title from '../../assets/Title.png';
import rock from '../../assets/Rock.png'
import scissors from '../../assets/Scissors.png'
import './MainMenu.css';

function MainMenu({ onPlay }) {
    return (
        <div className="mainmenu">
            <img className="hand rock" src={rock} alt="" />
            <div className="mainmenu-middle">
                <img className="title-img" src={title} alt="title" />
                <button className="play-btn" onClick={onPlay}>Play!</button>
            </div>
            <img className="hand scissors" src={scissors} alt="" />
            
        </div>
    )
}

export default MainMenu;