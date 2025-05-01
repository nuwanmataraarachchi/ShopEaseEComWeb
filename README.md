
## Backend API Endpoints

### 1. **Authentication**

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login and get JWT token.

### 2. **Products**

- **GET /api/products**: Get all products.
- **GET /api/products/:id**: Get a single product.
- **POST /api/products**: Add a new product (admin-only).
- **PUT /api/products/:id**: Update product (admin-only).
- **DELETE /api/products/:id**: Delete product (admin-only).

### 3. **Orders**

- **GET /api/orders**: Get all orders (admin-only).
- **POST /api/orders**: Create a new order.
- **GET /api/orders/:id**: Get order details.

## Getting Started

### 1. Clone the repository:
```bash
git clone https://github.com/nuwanmataraarachchi/ShopEaseEComWeb.git
