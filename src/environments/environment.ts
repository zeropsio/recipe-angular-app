export const environment = {
  production: false,
  zeropsRecipeConfig: `{
  "guiEndpoint": "https://app-20109.app.zerops.io",
  "apiEndpoint": "https://api-2014b-3000.app.zerops.io",
  "intro": "👋👋👋",
  "description": "This Zerops recipe demonstrates how to run and best integrate Angular application with a basic CRUD backend using Nest.js API and a PostgreSQL database into Zerops. Play around with and follow the TODO app below to get deeper into Zerops and how to best integrate it with this type of tech stack.",
  "knowledgeBaseLink": "https://zerops.io/article/how-we-use-zerops-to-build-deploy-and-run-zerops-io",
  "projectName": "foobar-prod",
  "services": [
    {
      "hostname": "api",
      "port": 3000,
      "routings": ["https://api-2014b-3000.app.zerops.io"],
      "repository": "https://github.com/fxck/todos-backend-nestjs",
      "type": "nodejs",
      "version": "v16.12",
      "readwrite": ["db"],
      "containers": 3
    },
    {
      "hostname": "app",
      "port": 80,
      "routings": ["https://app-20109.app.zerops.io"],
      "repository": "https://github.com/fxck/zerops-recipe-base",
      "type": "nginx",
      "isEntryApp": 1,
      "version": "v1.0",
      "containers": 3
    },
    {
      "hostname": "db",
      "type": "postgres",
      "version": "v12",
      "mode": "HA"
    }
  ]
}`
};

// export const environment = {
//   production: false,
//   recipeConfig: `{
//   "guiEndpoint": "https://app-20109.app.zerops.io",
//   "apiEndpoint": "https://api-2014b-3000.app.zerops.io",
//   "intro": "👋👋👋",
//   "description": "This Zerops recipe demonstrates how to run and best integrate Angular application with a basic CRUD backend using Nest.js API and a PostgreSQL database into Zerops. Play around with and follow the TODO app below to get deeper into Zerops and how to best integrate it with this type of tech stack.",
//   "knowledgeBaseLink": "https://zerops.io/article/how-we-use-zerops-to-build-deploy-and-run-zerops-io",
//   "projectName": "foobar-dev",
//   "services": [
//     {
//       "hostname": "api",
//       "port": 3000,
//       "routings": ["https://api-2014b-3000.app.zerops.io"],
//       "repository": "https://github.com/fxck/todos-backend-nestjs",
//       "type": "nodejs",
//       "version": "v16.12",
//       "readwrite": ["db", "cache"],
//       "containers": 3
//     },
//     {
//       "hostname": "billing",
//       "port": 1137,
//       "routings": ["https://billing-20109-5000.app.zerops.io"],
//       "repository": "https://github.com/fxck/todos-backend-nestjs",
//       "type": "nodejs",
//       "version": "v16.12",
//       "readwrite": ["db"],
//       "containers": 3
//     },
//     {
//       "hostname": "app",
//       "port": 80,
//       "routings": ["https://app-20109.app.zerops.io"],
//       "repository": "https://github.com/fxck/zerops-recipe-base",
//       "type": "nginx",
//       "isEntryApp": 1,
//       "version": "v1.0",
//       "containers": 3
//     },
//     {
//       "hostname": "cache",
//       "type": "keydb",
//       "version": "v2.4",
//       "mode": "HA"
//     },
//     {
//       "hostname": "db",
//       "type": "postgres",
//       "version": "v12",
//       "mode": "HA"
//     }
//   ]
// }`
// };
