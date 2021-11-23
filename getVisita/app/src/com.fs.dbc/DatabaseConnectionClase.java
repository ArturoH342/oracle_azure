package com.fs.dbc;
 
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Connection;
 
/**
   * Esta clase es específicamente responsable de la conexión y el cierre de la base de datos. Al crear instancias de objetos de esta clase, significa desarrollar la base de datos
   * Entonces, en el método de construcción de esta clase, se requiere la carga del controlador de la base de datos y la conexión de la base de datos
   * @autor      
   * Por lo tanto, debe proporcionar los métodos getConnection () y close ().
 */
public class DatabaseConnection {
	 Private static final String DBDRIVER = "com.jdbc.mysql.Driver"; // Nombre del controlador
	 Private static final String DBURL = "jdbc: mysql: // localhost: 3306 / test"; // La ruta de la base de datos
	 Private static final String DBUSER = "root"; // Nombre de usuario
	 Private static final String CONTRASEÑA = "*******"; // Contraseña
	 Conexión privada conn; // Declara el objeto Conexión
	/**
	  * Instanciar el objeto conn en el método de construcción, puede obtener directamente el objeto de conexión de la base de datos
	  * Debido a que algunas operaciones se realizan en base a la base de datos, si la conexión de la base de datos falla, entonces todas las operaciones posteriores no tendrán sentido
	 */
	public DatabaseConnection() {
		try {
			 Class.forName (DBDRIVER); // Cargar controlador
			 this.conn = DriverManager.getConnection (DBURL, DBUSER, PASSWORD); // Conéctese a la base de datos
		} catch (Exception e) {
			 e.printStackTrace (); // Esta excepción arroja poco significado
		} 
	}
	/**
	  * Obtener un objeto de conexión de datos
	  * @return Connection objetos instanciados
	 */
	public Connection getConnection() {
		 return this.conn; // Devuelve el objeto Connection en este objeto de clase
	}
	/**
	  * Cerrar la base de datos
	 */
	public void close() {
		 if (this.conn! = null) {// Indica que ahora hay un objeto de conexión
			try {
				this.conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}