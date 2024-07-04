# Level-2 Assignment-2 

## Installation

To install the application, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/order-management-api.git
   cd order-management-api
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

## Running the Application

To run the application locally, follow these steps:

1. Ensure you are in the project directory.
2. Compile the TypeScript code:

```sh
   npm run build
```

3. Start the application:

```sh
   npm run start
```

4. Open your web browser and go to:

```sh
   http://localhost:8000
```

## Configuration

The application requires a configuration file to connect to the MongoDB database and set up other environment variables. Here’s how you can set up your configuration:

1. Create a .env file in the root directory.
2. Add the following environment variables in the .env file:

### .env

```sh
PORT=8000
DATABASE_URL="Add your connection string"
```

## API Endpoints

## Product Management

### **1. Create a New Product**

- **Endpoint**: **`/api/products`**
- **Method:** `POST`

### **2. Retrieve a List of All Products**

- **Endpoint**: **`/api/products`**
- **Method:** `GET`

### **3. Retrieve a Specific Product by ID**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `GET`**

### **4. Update Product Information**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `PUT`**

### **5. Delete a Product**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `DELETE`**

### **6. Search a product**

- **Endpoint**: `/api/products?searchTerm=iphone`
- **Method: GET**

## Order Management

### **Order Management API Endpoints**

### **1.Create a New Order**

- **Endpoint**: **`/api/orders`**
- **Method: `POST`**

### **2.Retrieve All Orders**

- **Endpoint**: **`/api/orders`**
- **Method: `GET`**

### **3. Retrieve Orders by User Email**

- **Endpoint**: `/api/orders?email=ragib@gmail.com`
- **Method:** `GET`

## **Inventory Update**:

When creating new order (**`/api/orders`** ) ,reduce the `quantity` of the ordered product in inventory and update the **`inStock`** property.

### **Inventory Management Logic**

- When a new order is created, the system should check the available quantity in inventory.
- If the ordered quantity exceeds the available quantity, return an error response indicating insufficient stock.
- Update the inventory quantity and **`inStock`** status based on the ordered quantity:
  - If the inventory quantity reaches zero, set **`inStock`** to **`false`**.
  - Otherwise, keep **`inStock`** as **`true`**.
