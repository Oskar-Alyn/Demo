FROM php:7.2-apache

# OS/Apache Dependencies
RUN apt-get update \
	&& apt-get install -y \
	libicu-dev \
	&& apt-get clean \
	&& a2enmod rewrite

# PHP Dependencies
RUN docker-php-ext-configure \
	intl \
	&& docker-php-ext-install -j$(nproc) \
	intl \
	mysqli \
	pdo_mysql \
	&& php --version \
	&& php -m
