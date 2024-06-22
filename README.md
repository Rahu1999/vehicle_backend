# Vehicle Transfer System

This project is a Vehicle Transfer System designed to manage a catalog of drivers and vehicles, allowing the transfer of vehicles from one driver to another while maintaining a history of all transfers. The system is built using Node.js, TypeScript, TypeORM, MySQL, and React.js.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Future Expansion](#future-expansion)
- [License](#license)

## Features

- **Driver Catalog**: Store and manage information about multiple drivers.
- **Vehicle Catalog**: Store and manage information about multiple vehicles.
- **Vehicle Transfer Module**: Transfer vehicles between drivers and maintain a history of all transfers.
- **File Handling**: Upload and manage profile photos, PUC certificates, and insurance certificates.


## Prerequisites

- Node.js (v12 or later)
- MySQL
- TypeScript
- TypeORM
- React.js

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Rahu1999/vehicle_backend.git
    cd ecommerce-api
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root of your project directory and add the following environment variables:

    ```sh
    touch .env
    ```

    ```env
    DB_HOST = localhost
    DB_PORT= 3306
    DB_USER = root
    DB_PASSWORD = root
    DB_NAME = vehicle_db
    PORT=5000

    ```

## Scripts

- **Run in development mode**:

    ```sh
    npm run dev
    ```

- **Build the project**:

    ```sh
    npm run build
    ```

- **Run the compiled project**:

    ```sh
    npm start
    ```

## Running the Project

1. **Development Mode**:

    ```sh
    npm run dev
    ```

    This will start the server using `ts-node` and automatically reload the server when any file is saved.

2. **Build and Run**:

    ```sh
    npm run build
    npm start
    ```

    This will compile the TypeScript files into JavaScript and then run the compiled files from the `dist` directory.

## Postman Collection

To test the API endpoints, you can use the provided Postman collection.

1. Import the Postman collection:

    - Download the [Postman Collection](./postman_collection.json) file.
    - Open Postman, click on `Import` in the top left corner.
    - Select the downloaded JSON file and click `Import`.

2. Use the collection to test various API endpoints with example requests.

## Example Environment Variables

Here is an example of what your `.env` file should look like:

```env
DB_HOST = localhost
DB_PORT= 3306
DB_USER = root
DB_PASSWORD = root
DB_NAME = vehicle_db
PORT=5000

