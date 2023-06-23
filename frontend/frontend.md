# To create the frontend I used the following commands:

1. `npm create-react-app <app_name> --template typescript`  
   This command creates a react directory <app_name> with typescript along with a tsconfig.json file.
2. `npm install -D tailwindcss`  
   This installs tailwind to the project. Need to make sure that index.css containing the tailwind directives (`@tailwind base; @tailwind components @tailwind utilities;`) is properly imported in index.ts 
3. `npx tailwindcss init`  
   This creates a tailwind.config.js file that ensures tailwindcss is accessible from any ts/tsx file in the src folder
4. `npm install react-bootstrap bootstrap`  
   This installs prebuilt react components built with bootstrap into the project. Make sure `'bootstrap/dist/css/bootstrap.min.css';` is correctly imported in index.ts.
5. `npm install @types/react-bootstrap`  
   typescript needs accesss to the type description of react-bootstrap to work as expected and provide intellisense/compilation
6. `npm install react-router-dom @types/react-router-dom`  
   Install client side routing with react-router. Wrap `<App />` with BrowserRouter in index.tsx. Additionally make sure to wrap



