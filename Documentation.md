## In this project, I use JSON for data interchange medium to REST API
## You can see the full code in backend.js file inside models folder


1. Create local storage for register user.
    '''
    let users = JSON.parse(localStorage.getItem('users')) || [];
    '''

2. Wrap in timeout to simulate server api call.
    
    In this phase, I use keyword setTimeout()


3. After receive API call, we set the authentication and get the users using POST and GET method.
    
    url.endsWith('/users/authenticate') && opts.method === 'POST'
    
    url.endsWith('/users') && opts.method === 'GET'
    
    
4. Next, we getting the user id and check the token in header if return user is valid.
    
    opts.headers && opts.headers.Authorization === 'Bearer token'

   --this security is implemented server side in a real application
   
   
5. Then we can register user with POST method and save the new user.
    
    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
   
   --If you want to validate if user has been taken, you can use reject keyword.
    
    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
      if (duplicateUser) {
          reject('Username "' + newUser.username + '" is already taken');
          return;
      }

6. For delete user, we use DELETE method and 'splice' keyword  
    
    url.match(/\/users\/\d+$/) && opts.method === 'DELETE'
    
    users.splice(i, 1);
    localStorage.setItem('users', JSON.stringify(users));
    break;
    
    
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
