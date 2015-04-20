FROM ruby:2.2.2

RUN apt-get update -qq && apt-get install -y build-essential nodejs npm nodejs-legacy vim
RUN npm install -g webpack

RUN mkdir /app

WORKDIR /tmp
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install

ADD . /app
WORKDIR /app