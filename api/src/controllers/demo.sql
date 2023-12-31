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
  organismo o
 JOIN ON o.nombre = c.orgid

 SELECT c.nombre AS cargo, m.nombre, m.apellido, p.fecha_inicio, p.fecha_final 
 FROM cargo c
 LEFT JOIN periodo p ON c.id = p.cargoid
 LEFT JOIN matriculado m ON p.mp = m.mp
WHERE c.orgid = 'Mesa Directiva'
AND  m.mp IN (
   SELECT m.mp
   FROM matriculado AS m
   JOIN periodo AS p ON  m.mp = p.mp
   WHERE (p.fecha_inicio <= '2023-09-19T23:52:35.418Z'
   AND p.fecha_final >= '2023-09-19T23:52:35.418Z'))
   OR p.id IS NULL
ORDER BY c.nombre;

SELECT *
FROM matriculado
JOIN telefono ON  matriculado.mp = telefono.mp
JOIN otrodato ON  matriculado.mp = otrodato.mp

SELECT c.nombre AS cargo, m.mp, m.nombre, m.apellido, p.fecha_inicio, p.fecha_final, t.numero, t.principal
    FROM cargo c
    LEFT JOIN periodo p ON c.id = p.cargoid
    LEFT JOIN matriculado m ON p.mp = m.mp
    LEFT JOIN telefono t ON m.mp = t.mp
    WHERE c.orgid = 'Mesa Directiva'
    AND t.principal = true
    AND  m.mp IN (
      SELECT m.mp
      FROM matriculado AS m
      JOIN periodo AS p ON  m.mp = p.mp
      LEFT JOIN telefono AS t ON m.mp = t.mp
      WHERE (p.fecha_inicio <= '2021-12-10T03:00:00.000Z'
      AND p.fecha_final >= '2024-12-10T03:00:00.000Z'))
      OR p.id IS NULL 
    ORDER BY c.nombre;

    SELECT r.num, r.year, r.fecha, r.visto, r.considerando, r.resuelve, r.orgid, p.mp, m.nombre, m.apellido, c.nombre AS cargo
    FROM resolucion r
    JOIN firma f ON r.id = f.resid
    JOIN periodo p ON f.perid = p.id
    JOIN matriculado m ON p.mp = m.mp
    JOIN cargo c ON p.cargoid = c.id
    WHERE r.id = '${id}'

