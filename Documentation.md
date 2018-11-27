# Using the API

1. The API is written in JavaScript for NodeJS and requires MongoDB to be running. Mongoose is used to connect to MongoDB, define the database schema and read/write data. Express is used as the web server.

2. Install NodeJS, NPM, and MongoDB Community Server. After that, run the MongoDB and install all required npm packages by running ```npm install``` from the command line in the project root folder (where the package.json is located).

3. Start the application by running ```npm start``` from the command line in the project root folder, this will launch a browser displaying the application and it should be hooked up with the NodeJS + MongoDB API that already have running.

4. The project is structured into "feature folders" (users) "non-feature / shared component folders" (_helpers). Shared component folders contain code that can be used by multiple features and other parts of the application, and are prefixed with an underscore to group them together so it's easier to see anything at a glance.



# Using the application

1. First, we'll see the login page after open the app. We can insert our username and password to login. If we haven't registered our
   account yet, click register text link besides Login button and it will redirect to registration page.
   
2. In registration page you'll have to fill firstname, lastname, username, and password. You cannot fill username that already exist 
   or registered. After finish, you can click Register button and it will redirect to login page again. If you want to cancel, just
   click the cancel text besides Register button and it'll redirect to login page. 
   
3. To login, just enter the username and password you've registered and it will log to home page. In home page, you can see list of 
   account that have been registered. There is update and delete text link besides each of account's name(firstname and lastname). 
   Below account's list, there is logout text link.
   
4. If you want to delete accounts, just click the delete text and it will be deleted. Once you logout and login again, the account that 
   has been deleted won't be displayed in list.
   
5. If you want to update accounts, just click the update text and it will redirect to update page. In update page, you can change user's
   firstname, lastname, username, and password. You have to make changes at least in one of the textfield. Once you finish, you can
   click update button and it will redirect to home page again with changes you've made in update page. If you want to cancel, just
   click the cancel text link and it will redirect to home page.
   
6. After you're done and want to logout, click the logout text link below account's list. It will redirect to login page.
