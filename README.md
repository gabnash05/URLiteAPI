# URLiteAPI

URLiteAPI is the backend service for the URLite application, a URL shortening service. It is built using Express and MongoDB and provides API endpoints for creating, retrieving, updating, and deleting shortened URLs.

## Features

- Create shortened URLs
- Retrieve all shortened URLs
- Redirect to the original URL using the shortened URL
- Update the name of a shortened URL
- Delete a shortened URL

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/URLiteAPI.git
   cd URLiteAPI

2. Install dependencies:

    ```sh
    npm install
    ```

### Configuration

1. Create a .env file in the URLiteAPI directory and add your MongoDB URI and port:

    ```
    MONGO_URI=your_mongodb_uri
    PORT=5000
    ```

### Running the Application

1. Start the backend server:

    ```sh
    npm run devServer
    ```

2. The server will start on the port specified in the .env file (default is 5000).

## API Endpoints

#### Get All Shortened URLs

- URL: `/`
- Method: `GET`
- Description: Retrieves all shortened URLs.

#### Create a Shortened URL

- URL: `/urlite`
- Method: `POST`
- Description: Creates a new shortened URL.
- Request Body:
    ```json
    {
      "full": "https://example.com"
    }

#### Redirect to Original URL

- URL: `/:shortUrl`
- Method: `GET`
- Description: Redirects to the original URL using the shortened URL.

#### Update URL Name

- URL: `/urlite/:id`
- Method: `PUT`
- Description: Updates the name of a shortened URL.
- Request Body:
    ```json
    {
      "name": "New Name"
    }
    ```

#### Delete a Shortened URL

- URL: `/urlite/:id`
- Method: `DELETE`
- Description: Deletes a shortened URL.