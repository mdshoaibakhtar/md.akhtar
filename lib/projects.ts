import logos from "./logos";

type ProjectName =
  | "jobdotjs"
  | "middlewaredev"
  | "covid19"
  | "swiftpaydocs"
  | "datamigration"

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {
  jobdotjs: {
    title: "JobdotJs",
    description: [
      "Created a **Job web application** with separate access for **companies/HR (admin)** and **employees** to manage job applications and postings.",
      "Implemented features for job seekers to **Easy apply** for job roles and for admins to **Post job openings**, streamlining the hiring process.",
      "The project is **actively in development**, with continuous improvements and optimizations to **enhance user experience** and **platform functionality**.",
    ],
    images: {
      main: {
        link: "/project/jobdotjs/JobPage.png",
        width: 1182,
        height: 732,
      },
    },
    stack: [
      logos.nextjs,
      logos.postgresql,
      logos.tailwind,
      logos.django,
      logos.typescript,
      logos.materialui,
    ],
    links: {
      live: "https://jobdotjs.vercel.app",
      github: "https://github.com/mdshoaibakhtar/Job.js",
    },
  },

  middlewaredev: {
    title: "Middleware Development",
    description: [
      "**Led a 4-member team** for the implementation of middleware development for an **ERP system** using private **GraphQL APIs**.",
      "Utilized **AWS services** including **AppSync, API Gateway, Lambda, RDS**, and **Secrets Manager** to ensure a **scalable & secure architecture**.",
      "Gained high-level knowledge of large-scale **ERP business** processes and system functionalities.",
      "Collaborated with multiple stakeholders and successfully completed the development before the deadline.",
    ],
    images: {
      main: {
        link: "/project/middlewaredev/middlewaredev.png",
        width: 1903,
        height: 894,
      },
    },
    stack: [
      logos.python,
      logos.graphql,
      logos.aws,
      logos.s3,
      logos.lambda,
      logos.apiGateway,
      logos.secretsManager,
      logos.appsync,
      logos.rds,
    ],
    links: {
      live: "",
    },
  },
  covid19: {
    title: "Covid-19 India tracker",
    description: [
      "Covid-19 tracker for India made using **React.**",
      "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector **map of India**, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
      "There is also a state-wise table of covid data which can be sorted by any column.",
      "The app also features historical data using **charts** made using **[chartjs](https://www.chartjs.com)**, user may view data of any state and also choose the time frame and option between **daily** and **cumulative** data.",
      "The application is styled using **material-ui** and is fully responsive for all screen sizes and has a **dark mode** toggle. ",
    ],
    images: {
      webm: "/project/covid-19/c4.webm",
      mp4: "/project/covid-19/c4.mp4",
      poster: "/project/covid-19/poster.png",
      vidHeight: 676,
      vidWidth: 963,
    },
    stack: [
      logos.chartjs,
      logos.react,
      logos.materialui],
    links: {
      github: "",
      live: "",
    },
  },
  swiftpaydocs: {
    title: "SwiftPayDocs",
    description: [
      "Engineered **high-performance**, **scalable web applications** using **ReactJS**, **Django REST Framework**, and **AWS services**, ensuring seamless front-end and back-end integration.",
      "Designed and optimized efficient database architectures using **PostgreSQL** and **DynamoDB**, improving query performance and data retrieval speeds.",
      "Developed highly responsive and interactive UIs with ReactJS and **Tailwind CSS**, **Enhancing user experience** and increasing engagement rates.",
      "Implemented **server-side rendering (SSR) with Next.js** to optimize SEO and improve **page load speeds by 40%**, leading to better user retention.",
      // "Babu listen, no one love you. every one here is temporary fix there should be you should be like ",
      "Result: Improved overall application efficiency, increased product **performance by 86%**, and enhanced user engagement metrics."
    ],
    stack: [
      logos.chartjs, 
      logos.react,      
      logos.postgresql,    
      logos.materialui,
      logos.aws,   
      logos.lambda,     
      logos.apiGateway,
      logos.dynamodb,
      logos.tailwind
    ],
    links: {
      github: "",
      live: "",
    },
    images: {
      main:{
        link: "/project/easyapp/easyapp.png",
          width: 1903,
          height: 800,
      }
    }
  },
  datamigration: {
    title: "Data Migration with AWS",
    description: [
      "**Extracted** data from **Salesforce** using **AWS AppFlow** and stored it in **S3** for further processing.",
      "**Utilized AWS Glue Crawlers** to catalog the data and **AWS Glue Jobs (PySpark)** to perform **data transformation** and cleansing.",
      "**Implemented ETL pipeline** to process structured/unstructured data and load it into PostgreSQL RDS for analytics and reporting.",
      "**Optimized data processing** by leveraging **AWS Glue's distributed processing**, ensuring efficiency and scalability.",
    ],
    stack: [
      logos.spark,
      logos.react,
      logos.postgresql,
      logos.materialui
    ],
    links: {
      github: "",
      live: "",
    },
    images: {
      main: {
        link: "/project/datamigration/datamigration.png",
        width: 1903,
        height: 800,
      }
    }
  },
};

export default projects;
