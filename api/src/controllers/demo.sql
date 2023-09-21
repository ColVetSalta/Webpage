 SELECT o.nombre AS organismo, c.nombre AS 'organismo.cargo', m.mp AS 'organismo.cargo.mp', m.nombre AS 'organismo.cargo.nombre', m.apellido AS 'organismo.cargo.apellido', p.fecha_inicio AS 'organismo.cargo.inicio', p.fecha_final AS 'organismo.cargo.finaliza' 
 FROM organismo o
 JOIN cargo c
 ON o.nombre = c.orgid
 JOIN periodo p
 ON c.id = p.cargoid
 JOIN matriculado m
 ON p.mp = m.mp
WHERE o.nombre = 'Mesa Directiva'
AND p.fecha_inicio <= '2023-09-19T23:52:35.418Z'
AND p.fecha_final >= '2023-09-19T23:52:35.418Z';


Ejemplo:
   organismo    |     cargo      | mp | nombre  | apellido
----------------+----------------+----+---------+----------
 Mesa Directiva | Vocal Suplente |  2 | Pedro   | Samanasa
 Mesa Directiva | Secretario     |  1 | Gustavo | Peretti
(2 rows)