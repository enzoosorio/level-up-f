
export const ROPA = [
    { label: "Casacas y abrigos", opt: 'casacas-y-abrigos' },
    { label: "Poleras", opt: 'poleras' },
    { label: "Chompas", opt: 'chompas' },
    { label: "Blazers", opt: 'blazers' },
    { label: "Polos", opt: 'polos' },
    { label: "Tops", opt: 'tops' },
    { label: "Vestidos", opt: 'vestidos' },
    { label: "Pantalones", opt: 'pantalones' },
    { label: "Jeans", opt: 'jeans' },
    { label: "Joggers y Cargos", opt: 'joggers-y-cargos' },
    { label: "Camisas", opt: 'camisas' },
    { label: "Blusas", opt: 'blusas' },
    { label: "Faldas", opt: 'faldas' },
    { label: "Ropa deportiva", opt: 'ropa-deportiva' },
    { label: "Accesorios", opt: 'accesorios' },
    { label: "Ropa formal", opt: 'ropa-formal' },
    { label: "Shorts", opt: 'shorts' },
    { label: "Shorts de baño", opt: 'shorts-de-baño' }
];

export const SNEAKERS = [
    { label: "Zapatillas urbanas", opt: 'zapatillas-urbanas' },
    { label: "Zapatillas deportivas", opt: 'zapatillas-deportivas' },
    { label: "Sandalias", opt: 'sandalias' },
    { label: "Zapatos", opt: 'zapatos' },
    { label: "Suecos", opt: 'suecos' },
];

export const ACCESORIES = [
    { label: "Medias", opt: 'medias' },
    { label: "Boxers / Calzoncillos", opt: 'boxers-calzoncillos' },
    { label: "Collares", opt: 'collares' },
    { label: "Gorras", opt: 'gorras' },
    { label: "Pasamontañas", opt: 'pasamontañas' },
    { label: "Relojes", opt: 'relojes' },
    { label: "Perfumes", opt: 'perfumes' },
    { label: "Toallas", opt: 'toallas' },
    { label: "Pulseras", opt: 'pulseras' },
];

export const SIZES = [
    { label: "XS", opt: 'xs' },
    { label: "S", opt: 's' },
    { label: "M", opt: 'm' },
    { label: "L", opt: 'l' },
    { label: "XL", opt: 'xl' },
    { label: "XXL", opt: 'xxl' },
    { label: "4us", opt: '4us' },
    { label: "4.5us", opt: '4.5us' },
    { label: "5us", opt: '5us' },
    { label: "5.5us", opt: '5.5us' },
    { label: "6us", opt: '6us' },
    { label: "6.5us", opt: '6.5us' },
    { label: "7us", opt: '7us' },
    { label: "7.5us", opt: '7.5us' },
    { label: "8us", opt: '8us' },
    { label: "8.5us", opt: '8.5us' },
    { label: "9us", opt: '9us' },
    { label: "9.5us", opt: '9.5us' },
    { label: "10us", opt: '10us' },
    { label: "10.5us", opt: '10.5us' },
    { label: "11us", opt: '11us' },
    { label: "11.5us", opt: '11.5us' },
    { label: "12us", opt: '12us' },
    { label: "12.5us", opt: '12.5us' },
    { label: "13us", opt: '13us' }
]

export const MARCAS = [
    { label: "Nike", opt: 'nike' },
    { label: "Adidas", opt: 'adidas' },
    { label: "Under Armour", opt: 'under-armour' },
    { label: "Puma", opt: 'puma' },
    { label: "Reebok", opt: 'reebok' },
    { label: "Asics", opt: 'asics' },
    { label: "New Balance", opt: 'new-balance' }
]

export const TAGS = [
    { label: "Verano", opt: 'summer' },
    { label: "Running", opt: 'running' },
    { label: "Trekking", opt: 'trekking' },
    { label: "Invierno", opt: 'winter' },
    { label: "Casual", opt: 'casual' },
    { label: "Vintage", opt: 'vintage' },
    { label: "Lujuria", opt: 'luxury' }
]

export const ORDER_METHOD = [
    { label: "Precios (menor a mayor)", opt: 'price-low-to-high' },
    { label: "Precios (mayor a menor)", opt: 'price-high-to-low' },
    { label: "Nombre, creciente", opt: 'name-low-to-high' },
    { label: "Nombre, decreciente", opt: 'name-high-to-low' },
    { label: "Más reciente", opt: 'recent' },
    { label: "Relevancia", opt: 'relevance' },
]

export const GENDER = [
    { label: "Hombre", opt: 'male' },
    { label: "Mujer", opt: 'female' }
]

export const CONDITION = [
    { label: "Nuevo", opt: 'new' },
    { label: "Perfecto estado", opt: 'perfect' },
    { label: "Semi nuevo", opt: 'semi-new' },
    { label: "Usado", opt: 'used' },
]

export const FILTERS = [
    {
        nameFilter: "ORDENAR POR",
        subFilterMethods: ORDER_METHOD
    },
    {
        nameFilter: "TIPO DE PRODUCTO",
        subFilterMethods: [
            { label: "Ropa", categories: ROPA, opt: 1 },
            { label: "Zapatillas", categories: SNEAKERS, opt: 2 },
            { label: "Accesorios", categories: ACCESORIES, opt: 3 },
        ],
    },
    {
        nameFilter: 'GENERO',
        subFilterMethods: [
            { label: "Hombre", opt: 1 },
            { label: "Mujer", opt: 2 },
        ]
    },
    {
        nameFilter: 'TALLA',
        subFilterMethods: SIZES
    },
    {
        nameFilter: 'CONDICION',
        subFilterMethods: CONDITION
    },
    {
        nameFilter: 'TAGS',
        subFilterMethods: TAGS
    },
    {
        nameFilter: 'MARCAS',
        subFilterMethods: MARCAS
    }
];
