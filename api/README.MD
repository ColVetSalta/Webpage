Creation Steps:
npm install express -E //-E exact version to conrol manualy

npm init
-> Create .gitignore
npm install typescript -D -E //-D only dev dependencies -E exact version to conrol manualy
->On in package.json "scripts" {"tsc": "tsc"}
npm run tsc -- --init
uncomment, set or check from tsconfig.json:
<>"target": "es2016", 
<>"module": "commonjs",
<>"outDir": "./build", //changed to have exclusive dir to compile
<>"strict": true, 
<>"noUnusedLocals": true,
<>"noUnusedParameters": true,
<>"noImplicitReturns": true, 

npm install ts-node-dev -D
->On in package.json "dev": "ts-node-dev src/index.ts",

npm install --save sequelize
npm install --save pg pg-hstore # Postgres

npm install @types/node -D 

npm install dotenv

npm install core

npm install sequelize-typescript -D
npm install @types/validator -D
npm install reflect-metadata -D


// como hacer objetos dinamicos en typescript
https://askjavascript.com/how-to-dynamically-assign-properties-to-an-object-in-typescript/

1- cambiar tipo de dato date para: 
<> nacimiento en modelo matriculado
<> tambien se puede agregar fecha de alta (que no necesariamente es la de creacion del registro)
<> Modelo Periodo fecha inicio y fin.

2- Revisar el proceso de creacion de un pedríodo, si es afectado por un put, no se registran periodos pasados. No se esta creando uno nuevo... PUT (ORGANISMO)-HANDLER-> FINDORCREATE INSTANCE OF PERIODO

3- delete de matriculado, primero hay que poner active = false.

