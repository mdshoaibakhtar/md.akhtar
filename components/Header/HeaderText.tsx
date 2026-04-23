import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Buttons from "./Buttons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(6),
      },
    },
    title: {
      paddingRight: "20%",
    },
    hi: {
      color: "red",
    },
    paragraph: {
      paddingRight: "20%",
    },
  })
);

function HeaderText() {
  const classes = useStyles();
  return (
    <Box
      component="main"
      role="main"
      itemScope
      itemType="https://schema.org/Person"
      className={classes.root}
    >
      <meta itemProp="familyName" content="Akhtar" />
      <meta itemProp="gender" content="https://schema.org/Male" />
      <meta itemProp="name" content="Md Shoaib Akhtar" />
      <Typography
        className={classes.title}
        variant="h4"
        component="h1"
        gutterBottom
      >
        <span className={classes.hi}>Hi, </span>I'm{" "}
        <span itemProp="givenName">Md Shoaib Akhtar</span>
      </Typography>
      <Typography
        variant="h5"
        itemProp="disambiguatingDescription"
        component="h2"
        gutterBottom
      >
        A Software developer 
      </Typography>
      <Typography itemProp="knowsAbout" className={classes.paragraph}>
        with 3+ years of experience building scalable and efficient applications. I enjoy solving complex problems and turning ideas into reliable products. Known for my attention to detail, I focus on writing clean, maintainable code that helps businesses grow.
      </Typography>
      <Buttons />
    </Box>
  );
}

export default HeaderText;
