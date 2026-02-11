Financial Transparency Platform
Overview
This is a Financial Transparency Platform designed to bridge the gap between government spending and citizen awareness. By providing easy-to-access, real-time, and trustworthy financial data, it empowers citizens to understand, monitor, and hold public projects accountable.
Repository Structure
commitNrun/
├── client/      # Frontend application (React)
├── server/      # Backend API and data pipeline
└── README.md
Client (Frontend)
The client directory contains the web interface built with React and Vite.
Key Directories
client/
├── public/          # Static assets served directly
├── src/
│   ├── Admin/       # Admin-specific pages, auth, and components
│   ├── Pages/       # Public-facing pages mapped to routes
│   ├── components/  # Reusable UI components grouped by feature
│   ├── api/         # API clients, axios config, queries, mutations
│   ├── assets/      # Frontend assets used by components
│   ├── constants/   # Shared constants
│   ├── App.jsx      # Application root
│   └── main.jsx     # Entry point
Notable Conventions

Feature-based grouping: Components are grouped by domain (Budget, Audit, Projects, RTI, etc.)
Admin vs Public separation: Admin functionality lives under src/Admin
API layer isolation: All API communication logic is centralized in src/api

Server (Backend)
The server directory contains the REST API, business logic, database schema, and data-processing pipeline.
Key Directories
server/
├── src/
│   ├── controllers/  # HTTP request handlers
│   ├── routes/       # Route definitions and API mapping
│   ├── services/     # Core business logic
│   ├── logic/        # Analytical and domain-specific computations
│   ├── middleware/   # Auth and error handling
│   ├── lib/          # Shared libraries (e.g., Prisma client)
│   ├── utils/        # Common helpers and response wrappers
│   └── app.js        # Express app configuration
Prisma (Database)
server/prisma/
├── migrations/    # Database migration history
└── schema.prisma  # Prisma data model
Data Pipeline
This is for future scalability
server/pipeline/
├── data/      # Input or mock data
├── engines/   # AI or analytical engines
├── scripts/   # Runnable pipeline scripts
├── services/  # Pipeline-specific logic
└── pipeline.js
Environment Configuration
Backend environment variables are documented in: server/env example.txt
Conclusion
This repository provides a scalable, modular, and maintainable foundation for the Financial Transparency Platform, enabling seamless integration of frontend, backend, and data pipelines while ensuring future growth, real-time insights, and citizen empowerment.
