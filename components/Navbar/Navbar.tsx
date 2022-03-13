import logo from "../../public/favicon.png";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/router";
import useStyles from "./styles";

const Navbar = () => {
  const location = useRouter();
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <Image
              src={logo}
              alt="commerce.js"
              height={25}
              width={25}
              className={classes.image}
            />
            {"  "}
            e_Store
          </Typography>
          {/* <div style={{flexGrow: 1}} /> */}
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div>
              <IconButton
                // component={Link}
                // href='/cart'
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
