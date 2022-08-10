-- Write a script that displays the average temperature (Fahrenheit) by city ordered by temperature (descending).
--
SELECT city, AVG('temperature') FROM weather GROUP BY city ORDER BY AVG('temperature') DESC;