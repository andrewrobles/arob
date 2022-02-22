# pull official base image
FROM python:3

# set working directory
WORKDIR /code

# install app dependencies
COPY requirements.txt /code/
RUN pip install -r requirements.txt

# add app
COPY . /code/