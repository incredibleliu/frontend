# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


#############################################################################################################################################################


before everything, please execute following commands to install node_modules which is too big to share
   a. cd frontend
   b. npm install 

1. only 2 user can login
   which is name:john/password:nhoj/role:admin
   and name:tom/password:mot/role:user
   tom/john both in small case

2. Because data file "account_number.csv" inside project,
   please run backend project in folder mode, not in war file mode.
   Or the file won't be modified by program.

2. run spring boot backend, execute following command:
   a. cd backend
   b. mvn clean install spring-boot:run -DskipTests -Dflyway.outOfOrder=true flyway:migrate
   
3. run angular frontend, execute following command:
   a. cd frontend
   b. ng serve
   
4. After both backend and frontend startup without error, 
   open "http://localhost:4200" in browser
   
5. After login, can click logout link in left corner of the page to switch user to login
   
6. first login with tom/tom, the account_number are read from relative path
   .\backend\src\main\resources\db\migration\account_number.csv
   tom can remove any account_number he'd like, but "remove" button won't submit to backend,
   tom can add any account_number he'd like, but "add" button won't submit to backend, 
   then can click "Submit Accounts to Pending Requests" to submit for approval in batch mode.
   Before or after submit, Tom can click 'List Pending Request' to see only pending requests.
   Tom can cancel pending request.
   
7. second login with john/nhoj, will bring john directly to "all requests" page which list user requests in any status, 
   john can approve/reject request,
   when approve request, the account_number will be deleted from .\backend\src\main\resources\db\migration\account_number.csv,
   and at the same time the account_number will be inserted into table exclusion_account
   
8. log will output to 1. console and 2. ./backend/backend.log

9. h2 run in file mode, file is ./backend/db1.mv.db,
   if you'd like to run in fresh data, please stop backend spring boot, delete ./backend/db1.mv.db and restart backend
   
10. Sorry no time to clean lots of comment or useless code most from my personal project.

11. Thanks everyone.

