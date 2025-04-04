import { scroller } from "react-scroll";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import ForumIcon from "@material-ui/icons/Forum";
import CodeIcon from "@material-ui/icons/CloudDownloadRounded";
import { Box, IconButton, Link, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bigButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        width: "48%",
        marginRight: theme.spacing(0),
      },
    },
    bigButtonsContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
  })
);

function Buttons() {
  const classes = useStyles();
  const openPDFInNewTab = (driveLink: string) => {
    if (!driveLink) {
      console.error("Invalid link provided");
      return;
    }

    const newTab = window.open(driveLink, "_blank");
    if (!newTab) {
      alert("Popup blocked! Please allow popups for this site.");
    }
  };

  return (
    <>
      <Box mx={-1}>
        <Link
          href="https://github.com/mdshoaibakhtar"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          itemProp="sameAs"
        >
          <IconButton
            aria-label="Github profile"
            aria-haspopup="true"
            color="inherit"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://www.linkedin.com/in/mdshoaibakhtar/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          itemProp="sameAs"
        >
          <IconButton
            aria-label="Github repository link"
            aria-haspopup="true"
            color="inherit"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://twitter.com/imdshoaibakhtar"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          itemProp="sameAs"
        >
          <IconButton
            aria-label="Github repository link"
            aria-haspopup="true"
            color="inherit"
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>
      <Box className={classes.bigButtonsContainer} mt={2}>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.bigButton}
          startIcon={<ForumIcon />}
          onClick={() => {
            scroller.scrollTo("contact", {
              smooth: "easeInOutQuad",
            });
          }}
        >
          Get in touch
        </Button>
          <Button
          component="a"
          variant="outlined"
          color="secondary"
            className={classes.bigButton}
          onClick={() => openPDFInNewTab("https://drive.google.com/file/d/13jdZANqq8T2mNq5YTHHi9jVM_7TOc6Ow/view")}
          startIcon={<CodeIcon />}
          >
            My Resume
          </Button>
      </Box>
    </>
  );
}

export default Buttons;
