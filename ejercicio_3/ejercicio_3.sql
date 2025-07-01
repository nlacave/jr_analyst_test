-- Usuario que más tiempo total estuvo navegando:
-- Consulta más clara para validar los datos
SELECT usuario_id, SUM(tiempo_segundos) as tiempo_total 
FROM visitas_web
GROUP BY usuario_id
ORDER BY tiempo_total DESC
LIMIT 1;

-- Mostramos unicamente el usuario
SELECT usuario_id FROM visitas_web
GROUP BY usuario_id
ORDER BY SUM(tiempo_segundos) DESC
LIMIT 1;


-- Promedio de tiempo por página visitada:
SELECT pagina, AVG(tiempo_segundos) as tiempo_promedio
FROM visitas_web
GROUP BY pagina;