/**
 * importo las dependencias
 */
import app from './app'
import './database'



/**
 * Inicio el servidor
 */
app.listen(app.get('port'))

console.log('Servidor activo', app.get('port'))
