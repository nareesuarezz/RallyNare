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
 CREATE TABLE Escuderias (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre_Escuderia VARCHAR(255),
    Pais VARCHAR(255),
    Year_Fundacion INT
);

CREATE TABLE Coches (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Marca VARCHAR(255),
    Modelo VARCHAR(255),
    Year INT,
    Potencia INT,
    Num_Chasis VARCHAR(255),
    Escuderia_ID INT,
    FOREIGN KEY (Escuderia_ID) REFERENCES Escuderias(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE Pilotos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255),
    Apellido VARCHAR(255),
    Fecha_Nacimiento DATE,
    Nacionalidad VARCHAR(255),
    Coche_ID INT,
    FOREIGN KEY (Coche_ID) REFERENCES Coches(ID)
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
