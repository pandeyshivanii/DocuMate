# DocuMate

DocuMate is a real-time collaborative document editing application similar to Google Docs. Authenticated users can create and edit documents, while other users can only view the document in real-time. The app is built using **Socket.IO**, **React**, **NodeJs**, and **Docker**.

## Features

- **Authentication**: Users must authenticate to create and edit documents.
- **Real-time collaboration**: Authenticated users can write on the document, while others can view changes in real-time.
- **View-only mode**: Non-authenticated users can view the document without editing permissions.
- **Scalable with Docker**: The project is containerized using Docker for easy deployment and scaling.

## Tech Stack

- **Frontend**: React, JavaScript
- **Backend**: Node.js, Socket.IO
- **Deployment**: Docker

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **Docker**: Ensure Docker is installed. You can find the installation guide [here](https://docs.docker.com/get-docker/).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/codemaniac-sahil/documate.git
    ```

2. Navigate to the project directory:
    ```bash
    cd documate
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

### Running the Project

#### Running Locally

1. Start the backend server:
    ```bash
    cd documate-server
    npm start
    ```

2. Start the React app:
    ```bash
    cd documate-client
    npm start
    ```

#### Running with Docker

1. Run the server's Docker container:
    ```bash
    cd documate-server
    docker run
    ```

2. Run the client's Docker container:
    ```bash
    cd documate-client
    docker run
    ```

The application should now be running on `http://localhost:5173` with real-time collaboration enabled.

## Usage

1. Sign up or log in to authenticate yourself.
2. Create a new document.
3. As an authenticated user, you can write on the document.
4. Share the document link with others so they can view the document in real-time, but without editing rights.
