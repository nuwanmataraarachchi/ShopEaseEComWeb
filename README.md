# ShopEase ECom Web

ShopEase ECom Web is an e-commerce platform with a React frontend and Node.js/Express backend.

## Project Structure


## Setup Instructions

### Backend Setup

1. **Navigate to `backend` folder**:
    ```bash
    cd backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create `.env` file** with the following content:
    ```
    MONGODB_URI=mongodb://127.0.0.1:27017/ecom
    PORT=5001
    ```

4. **Run the server**:
    ```bash
    node server.js
    ```

    The backend will run on **port 5001** and connect to MongoDB.

### Frontend Setup

1. **Navigate to `frontend` folder**:
    ```bash
    cd frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the React app**:
    ```bash
    npm start
    ```

    The frontend will run on **http://localhost:3000**.

## Technologies Used

- **Frontend**: React, React Router DOM, Tailwind CSS, TypewriterEffect
- **Backend**: Node.js, Express.js, MongoDB
- **Development Tools**: npm, Git

## API Endpoints (Backend)

- `GET /api/products` - Get all products.
- `GET /api/products/:id` - Get product by ID.
- `POST /api/products` - Add a product (admin-only).
- `PUT /api/products/:id` - Update a product (admin-only).
- `DELETE /api/products/:id` - Delete a product (admin-only).

## Bonus Features Implemented

- **Static Pages**: 
  - About Page
  - Contact Page
  - Home Page with Hero Section

- **UI Features**:
  - Sticky Header and Footer
  - Responsive Grid Layout for Product Display
  - Product Search Feature
  - Pagination for Product Pages
  - Animations and Effects (e.g., Typewriter effect for dynamic text display)

## License

MIT License - see the [LICENSE](LICENSE) file for details.
