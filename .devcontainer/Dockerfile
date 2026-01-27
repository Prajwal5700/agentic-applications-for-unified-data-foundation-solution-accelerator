# Start from the same base image you used
FROM mcr.microsoft.com/devcontainers/python:3.11-bullseye

# Remove the Yarn APT source that is causing GPG failures (if present)
# Do this BEFORE devcontainer Features run so that any apt-get update works.
RUN rm -f /etc/apt/sources.list.d/yarn.list || true \
    && rm -f /usr/share/keyrings/yarn.gpg || true \
    && apt-get update
