# TetherSync

TetherSync is a modern, full-featured chat application built for secure, scalable, and seamless communication. It combines advanced real-time messaging capabilities with robust authentication, flexible infrastructure, and a polished user experience.

## Features

### Authentication & Authorization
- **JWT-based authentication** with refresh tokens for secure sessions.
- **Role-based access control:** user, admin, and super-admin roles.
- **Social login:** Google and GitHub OAuth integration.

### Real-Time Chat
- **One-to-one messaging, group chats, and channels.**
- **Typing indicators, read receipts, and message reactions.**
- **Message delivery states:** sent, delivered, seen.
- **Media sharing:** images, videos, and files.
- **Polls:** Create and participate in polls within chats.
- **Search functionality:** Full-text indexing in MongoDB for fast message and contact search.

### Scalability & Architecture
- **Native WebSocket server (`ws`)** with custom rooms/namespaces logic.
- **Efficient message storage:** MongoDB with indexing by userId and roomId.
- **Offline message queueing:** Redis for reliable delivery.
- **Rate limiting & IP throttling** to prevent abuse.

### Advanced Features
- **Push notifications:** Web and PWA support.
- **Presence indicators:** online, offline, and away statuses.
- **End-to-end encryption** for direct messages.
- **Admin dashboard:** Manage users, messages, and bans.
- **Bot integration:** AI chatbot auto-responds to specific keywords.

### Infrastructure & Deployment
- **Dockerized frontend and backend** for easy deployment.
- **CI/CD pipeline:** Automated builds and deployments with GitHub Actions.
- **Horizontal scaling:** Redis pub/sub synchronizes WebSocket events across multiple servers.
- **Environment configuration:** Uses `.env` files for sensitive variables.

### UI/UX
- **Modern, responsive UI:** Built with Tailwind CSS, supports dark/light themes.
- **Infinite scroll** for chat history.
- **Drag-and-drop file upload** with previews.

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/TetherSync.git
    ```
2. **Install dependencies:**
    ```bash
    cd TetherSync
    npm install
    ```
3. **Run the application:**
    ```bash
    npm start
    ```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License.

## Contact

For support or feedback, open an issue or contact the maintainer.
