import { Badge,styled } from '@mui/material';
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px'
    },
  }));

const NavBar = ({ totalCount, onTogglePage, showCart }) => {
    return (
      <nav
        className="navbar bg-body-tertiary"
        bg="primary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">E-Commerce App</span>
          <span onClick={onTogglePage} className="badge bg-secondary ms-2">
          {showCart? <HomeIcon /> : 
              <StyledBadge badgeContent={totalCount} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>}
          </span>
        </div>
      </nav>
    );
  };

export default NavBar;