# To create the backend I used the following commands:

1. `npm init -y`   
    This command initializes a new npm project with default settings. The -y flag automatically answers "yes" to all the prompts, creating a package.json file in your project directory.
2. `npm install --save-dev typescript`   
    This command  installs the TypeScript package as a development dependency in your project. It allows you to compile TypeScript code into JavaScript.
3. `npm install --save-dev nodemon ts-node`   
    ts-node allows you to run TypeScript code directly in Node.js without the need for manual transpilation to JavaScript. It handles type-checking and on-the-fly compilation for Node apps. nodemon uses ts-node to auto-run servers in development
4. `npx tsc --init` 
5. `mv tsconfig.json config/`  
    This command initializes a TypeScript configuration file named tsconfig.json in your project. The tsconfig.json file contains compiler options and settings for your TypeScript project.
6. `npm install express cors dotenv`   
   This command installs express, cors, dotenv packages. Express is a backend framework, cors allows cross-origin resource requests in express apps
7. `npm install --save-dev @types/express @types/cors`
   This allows ts-nodes to identify correct types for objects from express and cors and perform typechecking when the server is run
8. `npx nodemon --watch 'src/**/*.ts' --exec 'ts-node' backend/server.ts`  
   nodemon uses ts-node to typecheck, compile, and run app on a port while auto-restarting as it detects changes in ts files.
9. `npm install --save-dev mongoose mongodb @types/mongodb`
    mongodb is the actual noSQL database service that needs to be configured with a URI: `mongodb+srv://<username>:<password>@cluster0.o7evhxf.mongodb.net/` in my case. mongoose is a dependency tat allows me to create schemas for data being stored in mongodb. @types again is used since we are using typescript
