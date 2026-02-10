# RETO 4: Reflexión sobre calidad y CI

## ¿qué tipo de error evita el CI?
El CI evita errores de regresión en el comportamiento del sistema, como cambios que rompen el contrato que esta escrito sin que el desarrollador lo note. 
E CI detecta automáticamente cuando una función deja de cumplir reglas de calidad como el uso de mayúsculas obligatorias o la estructura esperada del JSON.

## ¿qué tipo de error no evita el CI?
El CI no evita errores de diseño, ni malas decisiones de negocio o funcionalidades mal planteadas. El CI no puede detectar si el requerimiento original esta mal 
o si la solución implementada no resuelve las necesidades del usuario, el CI solo valida los casos que están cubiertos por pruebas, por lo que cualquier escenario 
no cubierto en las pruebas seguira fallando sin haber sido detectado.

## ¿qué pasaría si un equipo ignora el CI?
Si un equipo ignora el CI aumentaria el riesgo de introducir errores en producción, ya que no habrían verificaciones automática del comportamiento del sistema 
ocasionando fallos recurrentes y mayor costo de mantenimiento.  
