# bsmart

## How to run this project step-by-step
1. Download the repository.
2. Before anything else, be sure to have a PHP version 7.4 or higher. Also make sure you have Nodejs and npm intalled in your machine.
3. Next use a database or a software that runs databases: say mysql, sql server, xampp, wamp, mamp, phpmyadmin, etc. In my case I used xampp.
4. Run the database and create a new database called bsmart_db with no password, and user root.
5. Optionally install a db client such as tablePlus, DBeaver, etc.
6. Now, open the project in the bsmart-server file location in the terminal and run the following commands:
7. composer install.
8. php artisan migrate --seed.
9. php artisan serve.
10. That's it with the API, now you have it running.
11. Next go to the bsmart-client file location and open a terminal. Run the following commands:
12. npm install.
13. npm run dev.
14. And that's it. Now you can access the web app by clicking on the url given in terminal.
