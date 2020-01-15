const dev = {
  STRIPE_KEY: "pk_test_2Y49jGOnAaADmSiKiBruh2j800ft3ntrMe",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1lylfbkk2gucb"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ctbfn36q6g.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_zlHzYwClw",
    APP_CLIENT_ID: "1tdn2fhou4qjnfdmqq6kv459f0",
    IDENTITY_POOL_ID: "us-east-1:62e6831f-3807-4854-a337-2aef1341d823"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_2Y49jGOnAaADmSiKiBruh2j800ft3ntrMe",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-kn7gax4g3s3f"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://vrdbdkux4d.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_I9laDaJoQ",
    APP_CLIENT_ID: "7aq8ch3t81qqanf1vlcg9nriie",
    IDENTITY_POOL_ID: "us-east-1:fd294ef5-f1f9-4546-ae3a-b7a52aed6f96"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
  };