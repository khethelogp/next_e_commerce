import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/favicon.png";
import { FC } from "react";
import theme from "../../src/theme";
import { useCommerce } from "../../context/CommerceContext";
import Link from "next/link";

type Props = {
  totalItems?: number;
};

const Navbar: FC<Props> = () => {
  const { totalCartItems } = useCommerce();
  const location = useRouter();
  const drawerWidth = 0;

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          [theme.breakpoints?.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
          },
        }}
      >
        <Toolbar>
          <Image src={logo} alt="commerce.js" height={25} width={25} />

          <Link href="/" passHref>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                alignItems: "center",
                display: "flex",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              E-Store
            </Typography>
          </Link>

          <div style={{ flexGrow: "1" }} />

          {location.pathname === "/" && (
            <div>
              <IconButton aria-label="Show cart items" color="inherit">
                <Link href="/cart" passHref>
                  <Badge
                    badgeContent={totalCartItems?.toString()}
                    color="secondary"
                  >
                    <ShoppingCart />
                  </Badge>
                </Link>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
