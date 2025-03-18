# Code Server Automation

Was experimenting with a feature after giving a prompt, different files in the code editor come into focus, and you can see the code appearing live.

## Technical Stack
- Docker container running code-server (v4.96.4)
- Node.js for backend automation
- File System (fs) module for file operations
- Volume mounting for real-time code updates

## Setup
```bash
# Build the Docker image
docker build -t my-code-server .

# Run the container with volume mounting
docker run -d --name my-code-container -p 8080:8080 -v ${PWD}/workspace:/home/coder/workspace my-code-server
```

## Features
- Real-time code updates through volume mounting
- Automated file focus and code display
- Interactive development environment
## Video Explanation -
https://drive.google.com/file/d/1Ay4J6eX_CVM0i5VB3tguQU2C_Xt59iWS/view?usp=sharing
