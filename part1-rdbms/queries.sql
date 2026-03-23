-- Q1:
SELECT name, city
FROM customers
WHERE city = 'Mumbai';

-- Q2:
SELECT product_id, SUM(quantity) AS total_sold
FROM order_items
GROUP BY product_id
ORDER BY total_sold DESC
LIMIT 3;

-- Q3:
SELECT customer_id, COUNT(order_id) AS total_orders
FROM orders
GROUP BY customer_id;

-- Q4:
SELECT order_id, SUM(quantity) AS total_quantity
FROM order_items
GROUP BY order_id
HAVING total_quantity > 10;

-- Q5:
SELECT product_id
FROM products
WHERE product_id NOT IN (
    SELECT product_id FROM order_items
);
