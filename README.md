# **Booking GetAway**

**Visual Experience** for **Booking GetAway App**. 

## Technologies used to develop the Frontend Visual Experience

> React, Material UI, Framer Motion.

## Installation

- Download or clone this repository to your local machine: 
```
git clone https://github.com/mirlindm/Booking-GetAway.git
``` 
- Open it in your preferred code editor 
- Navigate to the Booking GetAway folder
- For installing the dependencies, run the command: 
```
npm install
``` 
-Before executing the command npm start to start the project you need to run this command 
in order to start up the mock database: json-server --wtch db.json.
This will be our mock database which stores the hotels used for this app. 
Also, we interact with this database through axios in order to perform the CRUD operations.
```
npm start
``` 
- You will be redirected to the browser, but nevertheless, you might as well navigate to: localhost:3000


## About the Application

A simple booking app called "Booking GetAway".It has a datepicker in the home page that after you select the dates you wanna book it takes you 
to the hotel results nearby. 
 

## Application Structure
    
    Booking GetAways
    .
    ├── public                  # Application <html> </html> and favicon
    ├── src                     # Source files 
        |── assets              # Images and screenshots used in the application and README.md file
        |── components          # Reusable components, such as custom styled Buttons and Modal 
        |── pages               # Application pages that carry on and showcase different application facets 
        |── services            # Application service to interact and consume the exposed APIs 
        |── styles              # Styled components that are reused in various other components 
        |── App.js              # Contains all other components used in the application
        |── index.js            # Rendering the whole application through the linked <html> </html>
    ├── .gitignore              # Application files to ignore when committing to the remote repository
    ├── package-lock.json       # Tracking installed packages version throughout the application
    ├── package.json            # Application dependencies/packages (install them through *npm install* ) 
    └── README.md               # Application thorough description

## Booking GetAway Screenshots
<img alt="house" src="src\assets\house.jpg">
<img alt="logo" src="src\assets\logo.png">
 
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Contact
@: vullnet.neziri96@gmail.com
