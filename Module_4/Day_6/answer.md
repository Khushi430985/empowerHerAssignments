# Database Relationships

## 1. What is a Database Relationship?

A **database relationship** defines how two or more tables in a database are connected to each other.  
Relationships are used to **organize data efficiently**, **avoid duplication**, and **maintain data consistency**.

In real-world applications, data is not isolated. For example, in an e-commerce website:
- A customer can place many orders
- An order can contain many products
- A product belongs to a category

These connections are handled using database relationships.

---

## 2. Types of Database Relationships

There are mainly three types of database relationships:

1. One-to-One (1:1)
2. One-to-Many (1:N)
3. Many-to-Many (M:N)

---

## 3. One-to-One Relationship (1:1)

### Definition:
In a **one-to-one relationship**, one record in Table A is related to only one record in Table B, and vice versa.

### E-commerce Example:
**User and UserProfile**

- Each user has only one profile.
- Each profile belongs to only one user.

### Example Tables:
- `users` (user_id, name, email)
- `user_profiles` (profile_id, user_id, address, phone)

Here:
- One user → One profile

### Simple Diagram:
User 1 ───────── 1 UserProfile


### Real-world use:
- Login data stored in one table and personal details in another table.

---

## 4. One-to-Many Relationship (1:N)

### Definition:
In a **one-to-many relationship**, one record in Table A can be related to many records in Table B, but one record in Table B is related to only one record in Table A.

### E-commerce Example:
**Customer and Orders**

- One customer can place many orders.
- Each order belongs to only one customer.

### Example Tables:
- `customers (customer_id, name, email)`
- `orders (order_id, customer_id, order_date)`

### Diagram:
Orders >───< Order_Items >───< Products


### Real-world use:
- Shopping cart system where one order contains multiple products.

---

## 6. Why Database Relationships Are Important?

- Prevents data duplication  
- Maintains data integrity  
- Makes the database organized and scalable  
- Makes queries more meaningful and efficient  
- Accurately represents real-world systems  

---

## 7. Conclusion

Database relationships are the **foundation of relational databases**.  
In an e-commerce application, relationships are used to manage:

- Users and their profiles  
- Customers and their orders  
- Orders and products  
- Products and categories  

Without database relationships, it would not be possible to build reliable systems like Amazon, Flipkart, or any modern online shopping platform.

---

# End of Answer
