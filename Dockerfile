# Use code-server base image
FROM codercom/code-server:4.96.4

# Install Node.js
USER root
RUN apt-get update \
    && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Revert to default user
USER coder

# Create a workspace directory
WORKDIR /home/coder/workspace

# Expose code-server's default port
EXPOSE 8080

# Start code-server on container launch
CMD ["code-server", "--auth", "none", "--bind-addr", "0.0.0.0:8080", "/home/coder/workspace"]
