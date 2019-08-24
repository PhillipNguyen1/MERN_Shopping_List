import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
	};
	
	render() {
		return(
			<div>
				<Navbar color="dark" dark expand="sm" className="mb-5">
					<Container>	{/*Centers Components in navbar*/}
						<NavbarBrand href="/">Shopping list</NavbarBrand> {/*Navbar brand name*/}
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="https://github.com/phillipnguyen1">
										Github
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		)
	}
}

export default AppNavbar;
