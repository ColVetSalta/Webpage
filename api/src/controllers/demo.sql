 SELECT organismo.nombre, cargo.nombre
 FROM organismo
 JOIN cargo
 ON organismo.nombre = cargo.orgid
WHERE organismo.nombre = 'Mesa Directiva';