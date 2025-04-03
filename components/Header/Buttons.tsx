import { scroller } from "react-scroll";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import ForumIcon from "@material-ui/icons/Forum";
import CodeIcon from "@material-ui/icons/CloudDownloadRounded";
import { Box, IconButton, Link, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// '../../public/Md_Shoaib_Akhtar.pdf'

const filePath = '../../public/Md_Shoaib_Akhtar.pdf'; // Ensure this matches the file in `public/`
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

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Md_Shoaib_Akhtar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        {/* <NextLink href="/projects"> */}
          <Button
          component="a"
          variant="outlined"
          color="secondary"
          className={classes.bigButton}
          startIcon={<CodeIcon />}
          onClick={() => downloadPDF()}
            // href="/projects"
          >
            My Resume
          </Button>
        {/* </NextLink> */}
      </Box>
    </>
  );
}

export default Buttons;
