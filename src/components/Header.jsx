import Github from '../assets/github.png';

function Header() {
    return ( 
        <header className="header">
            <div className="header-text">
                <h2>Food Recipe App</h2>
            </div>
            <div className="github-div">
                <button className="btn-github">
                    Get the Docs <img src={Github} alt='github' style={{ height: '20px', verticalAlign: 'middle' }} /> 
                </button>
            </div>
        </header>
    );
}

export default Header;