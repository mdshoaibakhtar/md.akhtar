type logoNames =
  | "apollo"
  | "graphql"
  | "nestjs"
  | "react"
  | "bootstrap"
  | "chartjs"
  | "expressjs"
  | "git"
  | "github"
  | "materialui"
  | "mongodb"
  | "nextjs"
  | "s3"
  | "socketio"
  | "typescript"
  | "vercel"
  | "ejs"
  | "nodejs"
  | "javascript"
  | "postgresql"
  | "redux"
  | "sass"
  | "bash"
  | "reactSpring"
  | "framerMotion"
  | "trpc"
  | "cypress"
  | "reactQuery"
  | "confluence"
  | "django"
  | "java"
  | "jira"
  | "python"
  | "aws"
  | "tailwind"
  | "vscode"
  | "lambda"
  | "apiGateway"
  | "appflow"
  | "appsync"
  | "cognito"
  | "gluejob"
  | "iam"
  | "rds"
  | "pinpoint"
  | "secretsManager"
  | "sqs"
  | "vpc"
  | "spark"
  | "dynamodb"
  | "ec2"

type Logos = {
  [k in logoNames]: {
    label: string;
    logo: string;
    spin?: boolean;
    invert?: boolean;
  };
};

const logos: Logos = {
  apollo: {
    label: "Apollo",
    logo: "/assets/icons/apollo.svg",
    spin: false,
    invert: true,
  },
  graphql: {
    label: "GraphQl",
    logo: "/assets/icons/graphql.svg",
    spin: false,
  },
  nestjs: {
    label: "Nest.js",
    logo: "/assets/icons/nestjs.svg",
    spin: false,
  },
  react: {
    label: "React",
    logo: "/assets/icons/react.png",
    spin: true,
  },
  bootstrap: {
    label: "Bootstrap",
    logo: "/assets/icons/bootstrap.svg",
  },
  chartjs: {
    label: "Chart.js",
    logo: "/assets/icons/chartjs.svg",
  },
  expressjs: {
    label: "Express.js",
    logo: "/assets/icons/expressjs.png",
  },
  git: {
    label: "Git",
    logo: "/assets/icons/git.svg",
  },
  github: {
    label: "GitHub",
    logo: "/assets/icons/github.svg",
    invert: true,
  },
  materialui: {
    label: "Material-UI",
    logo: "/assets/icons/materialui.svg",
  },
  mongodb: {
    label: "MongoDB",
    logo: "/assets/icons/mongodb.svg",
  },
  nextjs: {
    label: "Next.js",
    logo: "/assets/icons/nextjs.svg",
    invert: true,
  },
  socketio: {
    label: "Socket.IO",
    logo: "/assets/icons/socketio.svg",
  },
  typescript: {
    label: "TypeScript",
    logo: "/assets/icons/typescript.svg",
  },
  vercel: {
    label: "Vercel",
    logo: "/assets/icons/vercel.svg",
    invert: true,
  },
  ejs: {
    label: "EJS",
    logo: "/assets/icons/ejs.svg",
    invert: true,
  },
  nodejs: {
    label: "Node.js",
    logo: "/assets/icons/nodejs.svg",
  },
  javascript: {
    label: "JavaScript",
    logo: "/assets/icons/javascript.svg",
  },
  postgresql: {
    label: "PostgreSQL",
    logo: "/assets/icons/postgresql.svg",
  },
  redux: {
    label: "Redux",
    logo: "/assets/icons/redux.svg",
  },
  sass: {
    label: "Sass",
    logo: "/assets/icons/sass.svg",
  },
  bash: {
    label: "Bash",
    logo: "/assets/icons/bash.svg",
  },
  reactSpring: {
    label: "react-spring",
    logo: "/assets/icons/react-spring.svg",
  },
  framerMotion: {
    label: "Framer Motion",
    logo: "/assets/icons/framer.png",
  },
  trpc: {
    label: "tRPC",
    logo: "/assets/icons/trpc.svg",
  },
  cypress: {
    label: "Cypress",
    logo: "/assets/icons/cypress.svg",
  },
  reactQuery: {
    label: "React Query",
    logo: "/assets/icons/react-query.svg",
  },
  confluence: {
    label: "Confluence",
    logo: "/assets/icons/confluence.svg",
  },
  django: {
    label: "Django",
    logo: "/assets/icons/django.svg",
  },
  java: {
    label: "Java",
    logo: "/assets/icons/java.svg",
  },
  jira: {
    label: "Jira",
    logo: "/assets/icons/jira.svg",
  },
  python: {
    label: "Python",
    logo: "/assets/icons/python.svg",
  },
  tailwind: {
    label: "Tailwind",
    logo: "/assets/icons/tailwind.svg",
  },
  vscode: {
    label: "VS Code",
    logo: "/assets/icons/vscode.svg",
  },
  aws: {
    label: "AWS",
    logo: "/assets/icons/aws.svg",
  },
  lambda: {
    label: "Lambda",
    logo: "/assets/icons/aws/lambda.svg",
  },
  apiGateway: {
    label: "API Gateway",
    logo: "/assets/icons/aws/apigateway.svg",
  },
  appflow: {
    label: "AppFlow",
    logo: "/assets/icons/aws/appflow.svg",
  },
  appsync: {
    label: "AppSync",
    logo: "/assets/icons/aws/appsync.svg",
  },
  cognito: {
    label: "Cognito",
    logo: "/assets/icons/aws/cognito.svg",
  },
  gluejob: {
    label: "Glue",
    logo: "/assets/icons/aws/gluejob.svg",
  },
  iam: {
    label: "IAM",
    logo: "/assets/icons/aws/iam.svg",
  },
  pinpoint: {
    label: "Pinpoint",
    logo: "/assets/icons/aws/pinpoint.svg",
  },
  rds: {
    label: "RDS",
    logo: "/assets/icons/aws/rds.svg",
  },
  secretsManager: {
    label: "Secrets Manager",
    logo: "/assets/icons/aws/secrets.svg",
  },
  sqs: {
    label: "SQS",
    logo: "/assets/icons/aws/sqs.svg",
  },
  vpc: {
    label: "VPC",
    logo: "/assets/icons/aws/vpc.svg",
  },
  spark: {
    label: "spark",
    logo: "/assets/icons/spark.svg",
  },
  dynamodb: {
    label: "DynamoDb",
    logo: "/assets/icons/aws/dynamodb.svg",
  },
  ec2: {
    label: "Ec2",
    logo: "/assets/icons/aws/ec2.svg",
  },
  s3: {
    label: "S3",
    logo: "/assets/icons/aws/s3.svg",
  },
};

export default logos;
