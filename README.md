# laravue
Laravel dengan vite dan vue.js

## Kebutuhan
- php v8.2
- composer v2
- npm v10.*
- node v18.*

## Cara Pakai
### Clone repository
```
git clone https://github.com/randy-ar/laravue.git
```
### Masuk ke direktori project
```
cd laravue
```
### Install paket php
```
composer install
```
### Install paket node
```
npm install
```
### ubah .env dengan informasi database yang digunakan
```
DB_CONNECTION=mariadb
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravue
DB_USERNAME=root
DB_PASSWORD=password
```

## Jalankan 
### Migrasi database
```
php artisan migrate
```
### Compile vue.js
```
npm run dev
```
atau untuk versi produksinya
```
npm run build
```
### Jalankan laravel 
```
php artisan serve
```
