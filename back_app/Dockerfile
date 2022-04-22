FROM python:3.10.4-bullseye
ENV PYTHONUNBUFFERED 1
RUN mkdir /usr/src/django/
RUN mkdir /usr/src/django/music_app
# Set the working directory to 
WORKDIR /usr/src/django/music_app
# Copy the current directory contents into the container at 
ADD . /usr/src/django/music_app
# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt