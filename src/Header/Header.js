import React from 'react';
import './Header.css';

const Header = () => {
  return (
		<header className="header d-flex">
			<a className="navbar-brand" href="#">
				<span className="h1">StarWars DB</span>
			</a>
			<nav className="navbar navbar-expand-sm">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link" href="#">
							People
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Planets
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Starships
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
 
export default Header;