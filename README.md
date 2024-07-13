# portifolio

Simple Webpage Based on Figma Design
Overview
This project demonstrates a simple webpage developed from a Figma design. The project showcases the use of modern web development practices, including frontend development, backend integration, server deployment, and automated version control.

#Frontend
Technologies Used
HTML: For structuring the webpage.
CSS: For styling and layout.
JavaScript: For interactivity and client-side validation.
Features
Contact Form: A user-friendly contact form with client-side validation to ensure all fields are filled before submission.
#Backend
Technologies Used
Nodemailer: For handling email functionality.
Features
Email Handling: On form submission, the input is validated. If all fields are correctly filled out, the form data is sent directly to my personal email using Nodemailer.
Hosting and Domain
#Domain
NameCheap: Domain name purchased from NameCheap.
#Server
DigitalOcean VPS: Deployed on a DigitalOcean Virtual Private Server (VPS) with Ubuntu as the operating system.
Nginx: Installed on the VPS to handle HTTP requests and reverse proxy to the Node.js server.
Node.js Server: Handles backend logic and Nodemailer functionality.
Version Control and CI/CD
Version Control
GitHub: Used for version control to manage the project's source code.
Continuous Integration/Continuous Deployment (CI/CD)
Fake CI/CD: Created a bash script that runs every two minutes to pull the latest changes from the main branch.
bash
#Security
HTTPS
Certbot: Registered SSL/TLS certificates using Certbot to enable HTTPS for secure communication.


