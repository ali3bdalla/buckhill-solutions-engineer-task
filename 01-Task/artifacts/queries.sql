-- create weekly orders view query --
CREATE VIEW orders_current_week_view AS
SELECT
    o.id AS order_id,
    o.uuid AS order_uuid,
    o.user_id,
    u.first_name AS client_first_name,
    u.last_name AS client_last_name,
    p.uuid AS product_uuid,
    p.title AS product_title,
    p.price AS product_price,
    os.title AS order_status,
    pm.type AS payment_type,
    pm.details AS payment_details
FROM
    petshop.orders o
JOIN
    petshop.users u ON o.user_id = u.id
JOIN
    petshop.order_statuses os ON o.order_status_id = os.id
JOIN
    petshop.payments pm ON o.payment_id = pm.id
JOIN
    petshop.products p ON JSON_CONTAINS(o.products, JSON_QUOTE(p.uuid)) = 1
WHERE
    YEARWEEK(o.created_at, 1) = YEARWEEK(CURDATE(), 1);
-- end of create weekly orders view query --
-- Path: tasks/01-Task/queries.sql