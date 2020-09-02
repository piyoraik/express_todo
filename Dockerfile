FROM node:lts-buster

## Gitのアンイストール
RUN apt -y remove git \
    && apt -y update \
    && apt -y install \
    make \
    libssl-dev \
    libghc-zlib-dev \
    libcurl4-gnutls-dev \
    libexpat1-dev \
    gettext \
    unzip

## Git最新版の導入
WORKDIR /usr/local/src
RUN wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.28.0.tar.gz && \
tar zxvf git-2.28.0.tar.gz && \
cd git-2.28.0 && \
./configure --prefix=/usr/local && \
make prefix=/usr/local all && \
make prefix=/usr/local install

## アプリケーションフォルダの作成
RUN mkdir /app
WORKDIR /app

## 必要モジュールインストール
RUN npm install -g express \
    && npm install -g ejs \
    && npm install -g express-generator
