An interactive, drag-and-drop pipeline editor built with React + ReactFlow and backed by a FastAPI validation engine. Built for the VectorShift frontend technical assessment, this full-stack project allows users to model computation flows using smart variable parsing and dynamic UI components.

🎯 Features
🧩 Drag-and-drop pipeline editor using ReactFlow

📝 Custom Nodes: Input, Output, LLM, Text, Math, Image, Audio

🔁 Smart Variable Parsing using {{inputName}} syntax

⚡ Live Validation via FastAPI backend (/validate endpoint)

🌗 Dark/Light Mode toggle with local state

📦 Deployed Full Stack (Frontend on Vercel, Backend on Render)

🧠 Architecture Overview:
React handles the canvas & node UI (via ReactFlow)

Zustand handles state

FastAPI validates DAG structure & edges

🛠 Tech Stack
Frontend	Backend	DevOps
React + ReactFlow	FastAPI	Vercel (FE)
Zustand (State)	Uvicorn (ASGI)	Render (BE)
Tailwind CSS	Python 3.9	GitHub Actions (optional)

🧪 How to Run Locally
🔧 Backend (FastAPI)
bash
Copy
Edit
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
Access docs: http://localhost:8000/docs
