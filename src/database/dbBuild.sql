DROP TABLE IF EXISTS users, shops, items, carts, _items, shops_items, users_invitees CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  range_budget_currency VARCHAR(5),
  range_budget VARCHAR,
  location VARCHAR
);

CREATE TABLE shops (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_name VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  service VARCHAR NOT NULL,
  rating INTEGER NOT NULL,
  email VARCHAR NOT NULL,
  name VARCHAR NOT NULL
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR NOT NULL,
  price INTEGER NOT NULL,
  rating INTEGER NOT NULL,
  description TEXT NOT NULL,
  buy_count INTEGER NOT NULL,
  price_currency VARCHAR(5) NOT NULL
);

CREATE TABLE carts (
  id SERIAL PRIMARY KEY NOT NULL
);

CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY NOT NULL,
  cart_id INTEGER REFERENCES carts(id) NOT NULL,
  item_id INTEGER REFERENCES items(id) NOT NULL,
  quantity INTEGER DEFAULT 1
);

CREATE TABLE shop_items (
  id SERIAL PRIMARY KEY NOT NULL,
  shop_id INTEGER REFERENCES shops(id) NOT NULL,
  item_id INTEGER REFERENCES items(id) NOT NULL
);

CREATE TABLE users_invitees (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_user_id INTEGER REFERENCES users(id) NOT NULL,
  invited_user_id INTEGER REFERENCES users(id) NOT NULL
);
