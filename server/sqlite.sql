DROP TABLE IF EXISTS users;

CREATE TABLE users
(
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  email       VARCHAR(255) NOT NULL UNIQUE,
  first_name   VARCHAR(255) NOT NULL,
  last_name    VARCHAR(255) NOT NULL,
   password    VARCHAR(255) NOT NULL
);