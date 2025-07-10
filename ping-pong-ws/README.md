# PingPong

PingPong is a minimal React frontend that connects to a backend WebSocket server. It allows users to send messages and receive real-time responses, serving as a basic template for WebSocket-based applications.

## Features

- Connects to a WebSocket server (`ws://localhost:8000/ws`)
- Sends a message to the server on button click
- Displays server responses in an alert

## Getting Started

### Prerequisites

- Node.js and npm installed
- A running WebSocket server at `ws://localhost:8000/ws`

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/ping-pong-fe.git
    cd ping-pong-fe
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Type a message in the input box.
- Click the "Click Me!" button to send the message to the WebSocket server.
- The server's response will be shown in an alert.

## Folder Structure

```
ping-pong-fe/
├── src/
│   ├── App.tsx
│   └── App.css
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License.

---