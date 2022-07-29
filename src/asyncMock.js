const productos = [
    
    { id: '1', nombre: 'Buzo Deportivo', precio: 5000, categoria: 'Buzos', img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwae3386f7/products/AD_HA6609/AD_HA6609-1.JPG?sw=400&sh=400', stock: 30, descripcion:'Descripcion de Buzos'},
    { id: '2', nombre: 'Buzo Tivo', precio: 1299, categoria: 'Buzos', img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw298a06d1/products/UA_1370347-001/UA_1370347-001-1.JPG?sw=400&sh=400', stock: 12, descripcion:'Descripcion de Buzos'},
    { id: '3', nombre: 'Remera Old School', precio: 1100, categoria: 'Remeras', img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw7b742d28/products/UA_1354529-002/UA_1354529-002-1.JPG?sw=400&sh=400', stock: 50, descripcion:'Descripcion de Remeras'},
    { id: '4', nombre: 'Remera Verano', precio: 900, categoria: 'Remeras', img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw33653604/products/UA_1371214-001/UA_1371214-001-1.JPG?sw=400&sh=400', stock: 110, descripcion:'Descripcion de Remeras'},
    { id: '5', nombre: 'Zapas Optimas', precio: 12000, categoria: 'Zapatillas', img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw9f42f033/products/NI_DC5421-003/NI_DC5421-003-1.JPG?sw=400&sh=400', stock: 550, descripcion:'Descripcion de Zapatillas'},
    { id: '6', nombre: 'Zapas Next', precio: 13599, categoria: 'Zapatillas', img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwcafcbff7/products/NI_DM1187-103/NI_DM1187-103-1.JPG?sw=400&sh=400', stock: 124, descripcion:'Descripcion de Zapatillas'},
    
]

export const recuperarProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1500)
    })
}