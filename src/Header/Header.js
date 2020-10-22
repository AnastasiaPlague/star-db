import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<header className="navbar align-items-sm-center flex-sm-column flex-md-row header">
			<Link className="navbar-brand" to="/">
				<span className="h1">StarWars DB</span>
			</Link>
			<nav className="navbar navbar-expand-sm">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/people/">
							People
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/planets/">
							Planets
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/starships/">
							Starships
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/secret">
							Secret
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/login">
							Login
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
