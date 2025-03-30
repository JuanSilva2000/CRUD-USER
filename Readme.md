## INSTRUCCIONES:  

### Clonar Repositorio
Desde una terminal clonar el repositorio con:  
```bash
    git clone https://github.com/JuanSilva2000/CRUD-USER.git
```    


### En el Backend:  
I) Primero en una terminal de Mysql debes crear una base de datos, la plantilla de creación está en el archivo `init.sql`   
```sql
    CREATE DATABASE [name_DATABASE];
```  
donde:  
- `[name_DATABASE]`: Debes reemplazarlo con cualquier nombre para la base datos. (*)  


II) Segundo, se debe crear un archivo `.env` para las variables de entorno tal que asi:  

```javascript
    DB_NAME=[DB_NAME]
    DB_USER=[USER]
    DB_PASSWORD=[USER_PASSWORD]
    DB_HOST=localhost
    DB_DIALECT=mysql
```  
donde:  
- `[DB_NAME]`: Nombre de la base de datos creada.(*)  
- `[USER]`: Usuario asociado a la base de datos, puede ser root.  
- `[USER_PASSWORD]`: Contraseña del usuario. 
  
III) Luego instalar dependencias desde terminal  
```bash
    npm i
```  
  
IV) Finalmente ejecutar el backend con:  
```bash
    npm run dev
```  
Sin te aparece el mensaje `"Sincronizacion exitosa"` entonces el backend se inicializó correctamente.  
  
## En el Frontend  
  
No hay necesidad de agregar variables de entorno porque ya las he proveído.  
Simplemente se intala las dependencias:  
``` bash
    npm i
```  
  
Y se ejecuta con:  
```bash
    npm run dev
```  

Finalmente abrir en el navegador desde el puerto que se ejecuta el frontend. 
  
## TECNOLOGÍAS USADAS:  
En el backend se usó:  
- `Node` y `Express`: para la creación de APIs.
- `Zod`: para las validaciones de datos.  
- `Sequelize`: Para la gestión de la base de datos.  
  
En el frontend se usó:  
- `Vue`: Para la creación de las interfaces.  
- `Vuetify`: Para la implementacion de modals.  
- `Axios`: Para el consumo de las APIs. 

