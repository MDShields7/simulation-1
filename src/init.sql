DROP TABLE IF EXISTS inventory;

CREATE TABLE IF NOT EXISTS inventory (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(40) NOT NULL,
price INTEGER NOT NULL,
image_url TEXT NOT NULL
);

INSERT INTO inventory
(name, price, image_url)
VALUES
('watch', 500, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5981/5981611ld.jpg;maxHeight=300;maxWidth=450');

SELECT * FROM inventory;