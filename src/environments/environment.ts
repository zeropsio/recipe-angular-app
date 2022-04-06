export const environment = {
  production: false,
  recipeConfig: `{
  "guiEndpoint": "https://app-20109.app.zerops.io",
  "apiEndpoint": "https://app-20109.app.zerops.io",
  "intro": "👋👋👋",
  "description": "This Zerops recipe demonstrates how to run and best integrate Angular application with a basic CRUD backend using Nest.js API and a PostgreSQL database into Zerops. Play around with and follow the TODO app below to get deeper into Zerops and how to best integrate it with this type of tech stack.",
  "knowledgeBaseLink": "https://zerops.io/article/how-we-use-zerops-to-build-deploy-and-run-zerops-io",
  "projectName": "foobar-dev",
  "services": [
    {
      "hostname": "api",
      "port": 3000,
      "description": "Zerops Node.js 16 service running in high availability, starting with three containers. Running Nest.js application built on Zerops from GitHub repository https://github.com/zeropsio/recipe-nestjs-postgres-api), publicly available under Zerops subdomain https://api-20109-5000.app.zerops.io",
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
      "description": "Zerops Nginx static server service running in high availability, starting with three containers. Serving Angular application built on Zerops from GitHub repository https://github.com/zeropsio/recipe-angular-app), publicly available under Zerops subdomain https://app-20109.app.zerops.io",
      "routings": ["https://app-20109.app.zerops.io"],
      "repository": "https://github.com/fxck/zerops-recipe-base",
      "type": "nginx",
      "version": "v1.0",
      "containers": 3,
      "isEntryApp": 1
    },
    {
      "hostname": "db",
      "description": "Zerops PostgreSQL service in high availability setup with two Zerops managed HAproxy proxies.",
      "type": "postgres",
      "mode": "HA"
    }
  ]
}`
};
