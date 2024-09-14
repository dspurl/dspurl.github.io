# Deploy
## API deployment
1. Package and upload the API project to the server
2. After the decompression, modify the `.env`information

## Background deployment
1. Go to the background directory and modify the configuration information `prod.env.js`
2. Execute the package `npm run build:prod`
3. Then upload the generated file to the server, or send it to others for direct access (requires the other party to have a local environment, double-click to access index.html is invalid)
   
## uniapp deployment
1. Open Huilder X, select release, release to the desired terminal can be, please modify the configuration information `config.js` before release