-- Import in hbtn_0c_0 database this table dump: download (same as Temperatures #0)

-- Write a script that displays the top 3 of cities temperature during July and August ordered by temperature (descending)

SELECT city, MAX(temperature) FROM weather WHERE month = 7 OR month = 8 GROUP BY city ORDER BY MAX(temperature) DESC LIMIT 3;
