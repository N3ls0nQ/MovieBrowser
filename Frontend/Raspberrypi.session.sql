-- @block
SELECT * FROM movies;

-- @block
INSERT INTO informatik.movies
(id,
name,
year,
image)
VALUES(
    5,
    "Avengers: Infinity War",
    2018,
    "https://www.lootchest.de/media/image/08/d3/2a/avengers-infinity-war-imax.jpg"
)

-- @block
SELECT * FROM movies
WHERE name LIKE '%in'

-------------------------------------------------------
-- @block
SELECT * FROM gfs.benutzer
WHERE name LIKE '%r%';

-- @block
DESCRIBE gfs.benutzer;

-- @block
CREATE TABLE gfs.benutzer(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    geburtsdatum DATE
)

-- @block
INSERT INTO gfs.benutzer(name, geburtsdatum)
VALUES(
    "Bernd",
    "1984-11-07"
)

























