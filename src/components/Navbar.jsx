import { Badge, styled } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavBar = ({ totalCount }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar bg-body-tertiary" bg="primary" data-bs-theme="dark">
      <div className="container-fluid">
        <span
          style={{
            cursor: "pointer",
          }}
          className="navbar-brand mb-0 h1"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          E-Commerce App
        </span>
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/cart");
          }}
          className="badge bg-secondary ms-2"
        >
          <StyledBadge badgeContent={totalCount} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
