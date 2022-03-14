import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/router";
import useStyles from "./styles";
import logo from "../../public/favicon.png";
import Link from "next/link";

const Navbar = () => {
  const location = useRouter();
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Image
            src={logo}
            alt="commerce.js"
            height={25}
            width={25}
            className={classes.image}
          />
          <Link href="/">
            <a>
              <Typography
                variant="h6"
                className={classes.title}
                color="inherit"
              >
                E-Store
              </Typography>
            </a>
          </Link>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div>
              <IconButton
                href="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent="2" color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
