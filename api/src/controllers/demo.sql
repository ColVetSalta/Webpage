 SELECT o.nombre AS organismo, c.nombre AS cargo, p.mp, m.nombre, m.apellido
 FROM organismo o
 JOIN cargo c
 ON o.nombre = c.orgid
 JOIN periodo p
 ON c.id = p.cargoid
 JOIN matriculado m
 ON p.mp = m.mp
WHERE o.nombre = 'Mesa Directiva';


Ejemplo:
   organismo    |     cargo      | mp | nombre  | apellido
----------------+----------------+----+---------+----------
 Mesa Directiva | Vocal Suplente |  2 | Pedro   | Samanasa
 Mesa Directiva | Secretario     |  1 | Gustavo | Peretti
(2 rows)