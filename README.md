### Grace HOPs E-commerce Site

Grace HOPs is an ecommerce site developed with NodeJS, React, Express, Redux, PostgreSQL, Sequelize, and Material UI. This was developed as a project in Fullstack Academy's immersive software engineering bootcamp. The autors of the project are Tim Schwichtenberg, Diego Rivera, Dillon Castelluccio, and Harry Huang.

## Start Instructions
We assume you already have node.js and postgresql installed. If not, please install them prior to running this repository.

1. Start postgresql service using: sudo service postgresql start
2. npm run seed
3. npm start
4. Open http://localhost:8080/ on browser

## Landing/store page
Without logging in, all users are able to view all items available for sale. 
![image](https://user-images.githubusercontent.com/59670286/212410475-8e645371-1dcc-4f41-9381-345a49baeff0.png)

The store page can be sorted by price, default being high --> low. Below is the view from low --> high
![image](https://user-images.githubusercontent.com/59670286/212410590-67b149a5-e71c-4cc5-a655-acf5230d4a0d.png)

## Single product view
Clicking on a product opens a single product view where you can see details about the product. There is also a button to add the item to your cart. Unfortunately, the cart functionality is incomplete and users are only able to add to cart if they are logged in. 
![image](https://user-images.githubusercontent.com/59670286/212410827-a037812c-0fa5-4c0d-82e2-4f3e6e5f778a.png)

## Sign up
The sign up page is a form. When submitted, the data goes to the postgresql database where it can be used to log in. 
![image](https://user-images.githubusercontent.com/59670286/212411147-8f2f90d5-e8b0-409b-b3a2-9ab92f268a20.png)
![image](https://user-images.githubusercontent.com/59670286/212411352-0e96361a-1033-42fb-acc3-04f44dcf3789.png)

## Login
Credentials entered into the sign up page can be used to login. 
![image](https://user-images.githubusercontent.com/59670286/212411477-10be1de7-20aa-499a-8234-09c6bb2b529a.png)





