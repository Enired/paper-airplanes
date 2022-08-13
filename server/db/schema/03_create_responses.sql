DROP TABLE IF EXISTS responses CASCADE;

CREATE TABLE responses (
  id SERIAL PRIMARY KEY,
  letter_id INT REFERENCES LETTERS(ID),
  responder_id INT REFERENCES USERS(ID),
  message TEXT NOT NULL,
  flag_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  active BOOLEAN DEFAULT TRUE,
  read BOOLEAN DEFAULT FALSE
);
