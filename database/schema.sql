-- creating a database to hold API (get/posts requests, etc.)
CREATE DATABASE IF NOT EXISTS baseball_players;

-- use baseball_players database
USE baseball_players;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS baseball_players;

CREATE TABLE baseball_players (
    id int NOT NULL AUTO_INCREMENT,
    player_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
