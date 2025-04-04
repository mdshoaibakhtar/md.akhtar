import { useEffect, useState, ReactNode } from "react";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import { lime, red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Fab,
  Zoom,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Hidden,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import ForumIcon from "@material-ui/icons/Forum";
import BuildIcon from "@material-ui/icons/Build";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { DarkModeProvider, useDarkMode } from "../context/themeContext";
import DarkModeIcon from "../components/Header/DarkModeIcon";
interface Props {
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    })
  );
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function MyAppWithTheme(props: AppProps) {
  const darkMode = useDarkMode();
  const paletteType = darkMode ? "dark" : "light";
  const theme = createMuiTheme({
    palette: {
      // primary: deepPurple,
      secondary: paletteType === "dark" ? lime : red,
      // error: {
      //   main: red.A400,
      // },
      // background: {
      //   default: "#fff",
      // },
      type: paletteType,
      background: {
        default: paletteType === "dark" ? "#161625" : "#fafafa",
        paper: paletteType === "dark" ? "#161625" : "#fff",
      },
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: paletteType === "dark" ? "#091c34" : "#ccff90",
          color: paletteType === "light" ? "rgba(0, 0, 0, 0.87)" : "#fafafa",
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <MyApp {...props} />
    </ThemeProvider>
  );
}

export default function MyAppWithDarkModeAndTheme(props: AppProps) {
  return (
    <DarkModeProvider>
      <MyAppWithTheme {...props} />
    </DarkModeProvider>
  );
}

const SideBarButton = ({
  text,
  name,
  children,
}: {
  text: string;
  name: string;
  children: ReactNode;
}) => {
  const router = useRouter();
  return (
    <ListItem
      button
      onClick={() => {
        if (router.pathname === "/") {
          scroller.scrollTo(name, {
            smooth: "easeInOutQuad",
          });
        } else {
          router.push("/").then(() => {
            scroller.scrollTo(name, {
              delay: 300,
              smooth: "easeInOutQuad",
            });
          });
        }
      }}
    >
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        overflow: "hidden",
      },
      logo: { textDecoration: "none", cursor: "pointer" },
      navbarRight: {
        marginLeft: "auto",
        marginRight: theme.spacing(0),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      drawer: {
        width: "240px",
      },
      navbarRightButtons: {
        marginRight: theme.spacing(4),
      },
      chevronIcon: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    })
  );
  const classes = useStyles();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const handleMenuButton = () => {
    setDrawerOpen(true);
  };

  const renderDrawer: () => ReactNode = () => (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={() => {
        setDrawerOpen(false);
      }}
      onKeyDown={() => {
        setDrawerOpen(false);
      }}
    >
      <IconButton
        className={classes.chevronIcon}
        onClick={() => {
          setDrawerOpen(false);
        }}
      >
        <ChevronRightIcon />
      </IconButton>
      <Divider />
      <List>
        <SideBarButton text="Home" name="home">
          <HomeIcon />
        </SideBarButton>
        <SideBarButton text="My Toolbelt" name="skills">
          <BuildIcon />
        </SideBarButton>
        <SideBarButton text="Featured Projects" name="projects">
          <CodeIcon />
        </SideBarButton>
        <Link href="/projects" passHref>
          <ListItem button component="a" href="/projects">
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="All Projects" />
          </ListItem>
        </Link>
        <SideBarButton text="Contact" name="contact">
          <ForumIcon />
        </SideBarButton>
      </List>
    </div>
  );

  const NavBarButton = (text: string, name: string) => {
    return (
      <Button
        className={classes.navbarRightButtons}
        onClick={() => {
          if (router.pathname === "/") {
            scroller.scrollTo(name, {
              smooth: "easeInOutQuad",
            });
          } else {
            router.push("/").then(() => {
              scroller.scrollTo(name, {
                delay: 300,
                smooth: "easeInOutQuad",
              });
            });
          }
        }}
        color="inherit"
      >
        {text}
      </Button>
    );
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* <title>Md Shoaib Akhtar</title> */}
        {/* PWA primary color */}
        <meta name="theme-color" content="#161625" />
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Md Shoaib Akhtar" />
        <meta
          name="description"
          content="Hi, I am Md Shoaib Akhtar, an adventurer in web development."
          key="description"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`}
        />
        <meta property="og:title" content="Md Shoaib Akhtar" />
        <meta
          property="og:description"
          content="Hi, I am Md Shoaib Akhtar, an adventurer in web development."
          key="og-description"
        />
        <meta
          property="og:image"
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/assets/programmer-meta.png`}
        />

        {/* <!-- Twitter --> */}
        <meta
          property="twitter:card"
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/assets/programmer-meta.png`}
        />
        <meta
          property="twitter:url"
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`}
        />
        <meta property="twitter:title" content="Md Shoaib Akhtar" />
        <meta
          property="twitter:description"
          content="Hi, I am Md Shoaib Akhtar, an adventurer in web development."
          key="twitter-description"
        />
        <meta
          property="twitter:image"
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/assets/programmer-meta.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
      </Head>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          {/* <Link href="/" passHref> */}
          <Typography
            onClick={() => {
              if (router.pathname === "/") {
                scroller.scrollTo("home", {
                  smooth: "easeInOutQuad",
                });
              } else {
                router.push("/").then(() => {
                  scroller.scrollTo("home", {
                    delay: 300,
                    smooth: "easeInOutQuad",
                  });
                });
              }
            }}
            // color="inherit"
            className={classes.logo}
            // component="a"
            // href="/#"
            variant="h6"
          >{`< Md Shoaib Akhtar />`}</Typography>
          {/* </Link> */}
          <div className={classes.navbarRight}>
            <Hidden mdDown>
              <Box mr={2}>
                {NavBarButton("Home", "home")}
                {NavBarButton("Tools and skills", "skills")}
                {NavBarButton("Featured Projects", "projects")}
                <Link href="/projects" passHref>
                  <Button
                    className={classes.navbarRightButtons}
                    component="a"
                    href="/projects"
                    color="inherit"
                  >
                    all projects
                  </Button>
                </Link>
                {NavBarButton("Contact me", "contact")}
              </Box>
            </Hidden>
            <DarkModeIcon />
            <Hidden lgUp>
              <IconButton
                color="inherit"
                aria-label="navigation menu"
                onClick={handleMenuButton}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <Hidden lgUp>
        <Drawer
          open={drawerOpen}
          anchor="right"
          onClose={() => {
            setDrawerOpen(false);
          }}
        >
          {renderDrawer()}
        </Drawer>
      </Hidden>
      <div id="back-to-top-anchor" />
      <AnimatePresence initial={false}>
        <div className={classes.root}>
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
      <ScrollTop>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
