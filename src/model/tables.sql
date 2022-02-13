CREATE TABLE categories(
    category_id serial PRIMARY KEY,
    category_name VARCHAR(128)
);

CREATE TABLE products(
    product_id serial PRIMARY KEY,
    product_name VARCHAR(128),
    product_comment text,
    product_img text,
    product_persent bigint,
    product_cost bigint,
    category_id int REFERENCES categories(category_id)
);