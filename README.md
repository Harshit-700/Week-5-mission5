 React Kanban Task Board

A modern, responsive Kanban-style task management web app built using React and Vite.
Organize your tasks efficiently across To Do, In Progress, and Done columns with a clean and interactive UI.

---

🔗 Live Demo  https://week-5-mission5.vercel.app/

---

📸 Screenshot

Add your project screenshot here

---

📁 Project Structure

react-kanban-board/

├── index.html         
├── package.json       
├── eslint.config.js   
├── src/
│   ├── main.jsx       
│   ├── App.jsx        
│   ├── components/    
│   └── styles/        
└── public/            

---

✨ Features

📌 Task Management

- Add new tasks dynamically
- Organize tasks into:
  - To Do
  - In Progress
  - Done

🎯 Interactive UI

- Smooth card-based layout
- Clean modern design with glassmorphism effect
- Hover animations for better UX

📱 Fully Responsive

- Desktop: 3-column layout
- Tablet: flexible spacing
- Mobile: stacked columns

🔄 Real-time Updates

- Tasks instantly appear without reload
- State managed using React

🎨 Priority-Based Styling

- Tasks visually highlighted based on priority
- Color-coded borders for quick identification

---

🚀 Getting Started

1. Clone the repository

git clone https://github.com/Harshit-700/Week-5-mission5.git
cd react-kanban-board

2. Install dependencies

npm install

3. Start development server

npm run dev

4. Open in browser

http://localhost:5173

---

🧩 Application Sections

Section| Description
Header| Displays app title
Input Area| Add new tasks
Columns| To Do, In Progress, Done
Task Cards| Individual task items
Buttons| Edit, Move, Delete actions

---

🎨 Design Tokens

Property| Value
Font| Segoe UI / System Sans-serif
Background| Dark Gradient (#0f172a → #020617)
Card Color| #020617
Primary Color| #22c55e
Border Radius| 10px – 16px
Shadow| Soft dark shadows

---

📱 Responsive Layout

Breakpoint| Layout
Desktop| 3-column grid
Tablet| Flexible columns
Mobile| Stacked layout

---

🔒 Validation Rules

Scenario| Behavior
Empty task| Prevent add
Long text| Auto wrap
Overflow| Handled via responsive CSS

---

⚙️ Tech Stack

- React 19 — UI Development
- Vite — Fast build tool
- CSS3 — Styling & responsiveness
- ESLint — Code quality

---

🧠 Core Logic

- React state ("useState") used for task management
- Component-based structure for scalability
- Dynamic rendering of task cards

---

💡 Future Improvements

- Drag & Drop functionality (like Trello)
- Local Storage / Database integration
- User authentication
- Dark/Light theme toggle
- Task deadlines & reminders

---

📄 License

This project is open-source and available under the MIT License.
