Atributos Actuales

# id: Identificador único del producto.

# name: Nombre del producto.

# brand: Marca del producto.

# description: Descripción detallada del producto.

# category: Categoría a la que pertenece el producto (zapatillas, ropa, accesorios, etc.).

# gender: Género para el cual está dirigido el producto (unisex, male, female).

# state: Estado del producto en una escala (por ejemplo, del 1 al 10).

// condicion diferente de estado eh...

# condition: (En lugar de o además de state) Podrías tener un atributo que describa el estado del producto de manera más específica, como new, used, refurbished, etc.

-> const conditionFilter = [
'Nuevo',
'Perfecto estado',
'Semi nuevo',
'Usado'
]

# stockQuantity: Cantidad de stock disponible para el producto. Es importante para controlar las ventas y evitar que los usuarios compren productos que ya no están disponibles.

# size: Talla o dimensiones del producto. Es crucial para productos como ropa y zapatos.

# color: Color principal del producto. Esto puede ser útil si tienes un filtro de colores en tu página.

# material: Material principal del producto (algodón, cuero, sintético, etc.), que puede ser importante para algunos compradores.

# shippingInfo: Información sobre las opciones y costos de envío, o si el producto incluye envío gratuito.

# views: Contador de cuántas veces el producto ha sido visto. Esto puede ayudarte a medir el interés en el producto.

# itsOnSale: Indica si el producto está en oferta.

# price: Precio original del producto.

# discountedPrice: Precio con descuento, si aplica.

# seller: Nombre del vendedor.

# returnPolicy: Política de devoluciones específica para el producto.

# imageUrl: URL de la imagen del producto.

# imageAlt: Texto alternativo para la imagen del producto.

##### Atributos Adicionales Recomendados

# condition: (En lugar de o además de state) Podrías tener un atributo que describa el estado del producto de manera más específica, como new, used, refurbished, etc.

Condicion reemplaza ItsDeadStock.

# stockQuantity: Cantidad de stock disponible para el producto. Es importante para controlar las ventas y evitar que los usuarios compren productos que ya no están disponibles.

Cantidad si solo es nuevo.

# dateAdded: Fecha en la que el producto fue añadido a la plataforma. Puede ser útil para ordenar productos por fecha o para promociones.

CreatedAt & UpdatedAt

# sellerContactInfo: Información de contacto del vendedor, en caso de que otros usuarios necesiten comunicarse con él para preguntas o negociaciones.

Seller

# tags: Palabras clave relacionadas con el producto que faciliten la búsqueda (por ejemplo, vintage, running, summer).

No incluyo tags pues solo tendre productos casi unicos cuando son de segunda mano.

# color: Color principal del producto. Esto puede ser útil si tienes un filtro de colores en tu página.

Color OPCIONAL

# size: Talla o dimensiones del producto. Es crucial para productos como ropa y zapatos.

Size del producto, dependiendo si es ropa, zapatilla o accesorio.

# material: Material principal del producto (algodón, cuero, sintético, etc.), que puede ser importante para algunos compradores.

Material OPCIONAL

# shippingInfo: Información sobre las opciones y costos de envío, o si el producto incluye envío gratuito.

Info sobre envio como : Lugar de envio, se envia a cualquier lugar del peru? Envio gratuito

# views: Contador de cuántas veces el producto ha sido visto. Esto puede ayudarte a medir el interés en el producto.

Contador de vistas me sirve, siguiendo la conexion entre sesion de usuario y entrar a ver el producto.

# reviews: Un arreglo o subcolección de reseñas de otros usuarios, incluyendo calificaciones y comentarios sobre el producto.

No la hago con el review. Muy largo el alcance e igualmente no me sirve para productos unicos.

# location: Ubicación del producto, especialmente relevante si tienes opciones de entrega local o recogida en persona.

LOCACION LO TENGO POR PARTE DEL USUARIO. DONDE ESTE EL USUARIO ES DONDE SE VENDE EL PRODUCTO.

# returnPolicy: Política de devoluciones específica para el producto.

# referenceURL : enlazar un producto a una url de la web. Referencia para poder visitar el producto y verlo mejor en otra pagina, comparar los precios y que el usuario vea el verdadero descuento.
