--- Create User table
CREATE TABLE IF NOT EXISTS "user" (
  id SERIAL NOT NULL,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  PRIMARY KEY (id)
);