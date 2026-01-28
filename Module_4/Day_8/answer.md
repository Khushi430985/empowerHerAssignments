# Schema Design in Relational Databases

## 1. What is schema design and what does a database schema represent?

Schema design is the process of planning and structuring how data will be stored in a relational database. It decides what tables will exist, what columns each table will have, what data types those columns will use, and how tables will be related to each other.  

A database schema represents the complete blueprint of the database. It defines the structure of the database before any actual data is inserted.  

For example, in a college management system, the schema may contain tables like `students`, `courses`, and `enrollments`, each with a fixed structure.

---

## 2. Why schema design is required before writing backend code?

Schema design is required before writing backend code because the backend logic depends completely on how data is stored in the database. APIs, queries, and business logic are all written according to the table structure.  

If the schema is not planned properly, developers will need to change both the database and backend code again and again. A well-designed schema makes the backend code cleaner, more stable, and easier to maintain. Just like a building needs a blueprint before construction, software needs a schema before backend development.

---

## 3. How poor schema design impacts data consistency, maintenance, and scalability?

Poor schema design creates many serious problems.  

First, it causes data inconsistency. The same data may be stored in multiple places, and when one copy is updated and another is not, the database contains wrong or conflicting information.  

Second, it makes maintenance difficult. The database becomes hard to understand, bugs become harder to fix, and even small changes require changes in many places.  

Third, it affects scalability. As data grows, badly designed tables become slow, queries take more time, and the system becomes difficult to extend.  

So, poor schema design makes the system slow, unreliable, and hard to manage.

---

## 4. What are validations in schema design and why databases enforce them?

Validations are rules applied on table columns to ensure that only correct and meaningful data is stored in the database.  

Some common validations are:
- NOT NULL: The column cannot be empty  
- UNIQUE: The value must be different for every row  
- PRIMARY KEY: Uniquely identifies each record  
- DEFAULT: Sets a default value if no value is provided  
- FOREIGN KEY: Maintains a valid relationship between tables  

Databases enforce these validations to protect data integrity, prevent wrong data, avoid logical errors, and keep the data clean and reliable. For example, if an email column is marked as UNIQUE and NOT NULL, the database will never allow duplicate or empty email values.

---

## 5. Difference between a database schema and a database table

A database schema is the overall design or structure of the database. It contains the definitions of all tables, relationships, and rules.  

A database table is only one part of the schema. It is used to actually store data in rows and columns.  

In simple words, the schema is the plan of the whole database, and a table is one object inside that plan.

---

## 6. Why a table should represent only one entity?

Each table should represent only one real-world entity such as a user, product, student, or order.  

If one table tries to store data of multiple entities, the data becomes mixed, many columns remain empty, and the structure becomes confusing. This increases errors and makes the database difficult to manage.  

For example, students and teachers should be stored in separate tables, not in a single combined table.

---

## 7. Why redundant or derived data should be avoided in table design?

Redundant data means storing the same data in multiple places, and derived data means storing data that can be calculated from other data.  

Both should be avoided because they waste storage and can cause data mismatch. If one value is updated and the other is not, the database becomes incorrect.  

For example, if total_price can be calculated using quantity and price, then storing total_price separately is unnecessary and risky.

---

## 8. Importance of choosing correct data types while designing tables

Choosing the correct data type is very important because it improves performance, saves memory, and prevents invalid data from being stored.  

For example:
- Age should be stored as INT, not TEXT  
- Date should be stored as DATE, not STRING  
- True or false values should be stored as BOOLEAN  

Using wrong data types can make queries slow and allow incorrect data to enter the system.

---

## 9. Conclusion

Schema design is the foundation of a good database system. A well-designed schema keeps data clean, avoids duplication, improves performance, and makes backend development easier. It also makes the system scalable and easy to maintain in the long run. A bad schema design can cause serious problems even if the application code is good.
