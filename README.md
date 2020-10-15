Creamos un nuevo proyecto en el que instalaremos en node, 
para ello:
    npm install --yes

Instalamos el typescript a nivel de desarrollador, no global, para ello:
    npm install typescript -D

Instalamos el compilador de typescript:
    npx tsc --init
(Esto genera es tsconfig.json en el que haremos las modificaciones siguientes:
    - target: es6
    - ourdir:./dist
    - En la línea 69 añadimos: "exclude":["node_modules"])

Creamos el archivo .gitignore 
    (dist
    node_modules)

Ahora instalamos mongoose:
    npm install mongoose

Y los tipos de mongoose:
    npm install @types/mongoose

Creamos la carpeta src, dentro de la cual irá el archivo index.ts donde irán los programas.

Compilamos con:
    npx tsc -w

    