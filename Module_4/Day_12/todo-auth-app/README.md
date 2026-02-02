# Authorization-Based TODO App

## Tech Stack
- Node.js  
- Express.js  
- Supabase  
- JWT Authentication  
- Bcrypt  

## Setup

1. Clone repo  
2. Run:
   npm install

3. Create .env file:
   PORT=5000  
   SUPABASE_URL=your_url  
   SUPABASE_ANON_KEY=your_key  
   JWT_SECRET=your_secret  

4. Run:
   node src/server.js  

## Endpoints

POST /auth/signup  
POST /auth/login  

POST /todos  
GET /todos  
PUT /todos/:id  
DELETE /todos/:id  

All todos routes require:
Authorization: Bearer <token>
