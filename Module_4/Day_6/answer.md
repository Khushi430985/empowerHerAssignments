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
