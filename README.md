# vocal-hub
VocalHub is a fullstack web application for live audio chat, similar to Clubhouse. This project uses React with TypeScript for the frontend and Node.js for the backend.

# Features
- Real-time audio chat
- User authentication
- Room management
- React Hook Form for form handling
- Yup for schema validation
- Stream.io for video and audio streaming
- Universal Cookie for cookie management
- React Router DOM for client-side routing
- Express.js for backend routing and API handling
- CORS for handling cross-origin requests

# Tech Stack

Frontend:React (with TypeScript), react-hook-form, yup, @stream-io/video-react-sdk, universal-cookie, react-router-dom

Backend: Node.js, express, cors, stream-io/node-sdk, 

# Try Hands On It
Follow these steps to set up and run the project locally.

# Prerequisites
Ensure you have the following installed on your machine: Node.js, npm (Node Package Manager)

# Clone the repository:
`git clone https://github.com/Ajithpmdwaraka/vocal-hub.git`

Navigate to the project directory:

`cd vocalhub`

Install the dependencies for both the frontend and backend:

`npm install`

To run the project locally, use the following command:

`npm run dev`

# Frontend Setup
Navigate to the frontend directory and install dependencies:

`cd client` 
`npm install`

Start the React development server:

`npm start`

# Backend Setup
Navigate to the backend directory and install dependencies:

`cd server`
`npm install`

Start the Express server:

`npm start`

# Configuration
Ensure you have all necessary environment variables configured. Create a .env file in the root of your backend directory with the necessary variables, such as:
`PORT=5000
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret`

# Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

# License
This project is licensed under the MIT License. See the LICENSE file for more details.

# Acknowledgements
Special thanks to Stream.io for their awesome SDKs.

# Contact
For any questions or feedback, please reach out at ajithpmdwaraka@gmail.com
