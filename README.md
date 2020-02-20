# mern-selenium

1. Open terminal and run the following commands (Backend setup)
   ```
   # navigate into backend
   cd backend

   # Create .env file
   cp .env.example .env

   # Set environment variables
   nano .env
   
   # Install dependencies
   npm i chai@4.1.2 chai-as-promised@7.1.1 chromedriver@2.41.0 faker@4.1.0 mocha@5.2.0 mochawesome@3.0.3 selenium-webdriver@4.0.0-alpha.1 --save-dev --unsafe-perm=true --allow-root && npm install

   # Start backend application
   npm run watch
   ```

2. Open new terminal session and run following commands (Client):
   ```
   # Navigate to client
   cd client

   # Install dependencies
   npm install

   # Start client application
   npm start
   ```

3. Open another new terminal instance and run the following commands (Testing):
   ```
   # Navigate to backend
   cd backend

   # Start tests
   npm test
   ```

Notes:

- You need to have a MongoDB instance running. Set your MongoDB credential string in backend/.env
- Client makes API calls to http://localhost:5000 - so make sure your backend is running on this port
