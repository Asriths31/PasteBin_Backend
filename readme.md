# Pastebin‐Lite App

Pastebin Lite is a lightweight web application that allows users to create and share text pastes easily.  
The project focuses on simplicity, fast performance.

---

## Tech Stack

- Frontend: React.js
- Backend: Node.js, Express
- Database: MongoDB Atlas
- Deployment: Render(backend),netlify(frontend)

---


---

### Deployed Backend URL
```
https://pastebin-backend-8cl7.onrender.com/

```
---

### Deployed Frontend URL

```
https://verdant-phoenix-c09c73.netlify.app/

```

---

### Frontend Repository Link

```
https://github.com/Asriths31/PasteBin_Frontend

```

---

## How to run the app locally

### Prerequisites
- Node.js (v18 or later)
- MongoDB (local instance or MongoDB Atlas)

### Load Environment variables
- PORT
- MONGO_URI
- DEPLOYED_URL(url of the backend)

### Persistent Layer
``` I Have Used MongoDB as its persistence layer. ```

- All paste data is stored in a MongoDB database

- The backend communicates with MongoDB using Mongoose

- Each paste is persisted as a document, allowing easy retrieval and optional expiration handling

- MongoDB was chosen for its flexibility, scalability, and suitability for document-based data such as text pastes.

### End points of server
```
post ("/api/pastes", createPaste);
get ("/api/healthz", healthCheck);
get("/api/pastes/:id", getContent);
```
---

### Steps

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install

#Run Server
npm start


