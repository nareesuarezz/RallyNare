# RallyNare
## Getting Started

To make this wonderful job work for you you must follow the following steps:


### Step 1: Clone my project

 To clone it you must use the following command:
   ```sh
   git clone https://github.com/nareesuarezz/RallyNare
   ```

## Step 2: Create the data base

You must create the database in mysql called **rallycars**, then once created you must insert these create table:
```sh
   CREATE TABLE Teams (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Team_Name VARCHAR(255),
    Country VARCHAR(255),
    Year_Fundación INT
);

CREATE TABLE Cars (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Mark VARCHAR(255),
    Model VARCHAR(255),
    Year INT,
    INT power,
    Chassis_Number VARCHAR(255),
    Team_ID INT,
    FOREIGN KEY (Escuderia_ID) REFERENCES Escuderias(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE Pilots (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Last name VARCHAR(255),
    Date_Birth DATE,
    VARCHAR Nationality(255),
    car_ID INT,
    FOREIGN KEY (Car_ID) REFERENCES Cars(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
   ```

## Step 3: Install all dependencies 

Go into visual studio code and install all dependencies with **npm install** in both frontend folder and backend folder

## Step 4: Running the backend

Open the backend folder **(rally)** with **eclipse** and run it as **Spring Boot App**

## Step 5: Running the frontend

 Open the **frontend** folder with **Visual Studio Code** and run **ionic serve** 

 ## Step 6: ENJOY :D
