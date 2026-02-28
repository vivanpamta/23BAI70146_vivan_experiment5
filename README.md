Experiment 5 – Advanced React Application

Objective :Enhance the existing Experiment 4 React project by implementing:
React Router (Multi-page navigation)
useContext (Global Theme Management)
Redux Toolkit (Structured State Management)
useMemo (Performance Optimization)
New Page integrated with Router

🛠 Technologies Used : 
React (Vite)
React Router DOM
Redux Toolkit
React Redux
useContext API
useMemo Hook
Modern CSS (Responsive Design)

✨ Features Implemented : 
1️⃣ React Router :
Home Page
Projects Page
Reports Page (New – Experiment 5)
Navbar navigation with active route highlighting

2️⃣ useContext (Theme Management) : 
Global Theme Context
Light / Dark Mode Toggle
Context used in multiple components

3️⃣ Redux Toolkit (Cart Management) : 
Configured Redux Store using configureStore
Created cartSlice using createSlice
Implemented actions:
addItem
removeItem
updateQty
clearCart

Used useDispatch and useSelector
Redux used in multiple components

4️⃣ useMemo Optimization :
Filtered product search
Cart summary calculation
Derived state recalculates only when dependencies change

5️⃣ New Page – Reports : 
Displays cart statistics
Shows subtotal, total quantity, unique items
Demonstrates Redux + useMemo + Context together

experiment5/
│
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── store/
│   ├── App.jsx
│   └── main.jsx
│
├── screenshots/
├── package.json
└── README.md
