CREATE TABLE students (
  ID SERIAL PRIMARY KEY,
  fname VARCHAR(40) NOT NULL,
  lname VARCHAR(40) NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO students (fname, lname, password)
VALUES  ('Harry', ' Potter', '123456');