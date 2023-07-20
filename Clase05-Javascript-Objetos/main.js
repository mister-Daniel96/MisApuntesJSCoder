
//EJERCICIO 01
/*
    const persona={};
    persona.name='Juan';        //agrego un clave-valor
    persona.surname='Smith';    //agrego clave-valor
    persona.name='Pete';        //cambio el valor del name
    delete persona.name;        //elimino clave-valor
    persona.name='Juan';        //agrego un clave-valor
    console.log(persona);


//EJERCICIO 02

    let salaries={
        John:100,
        Ann:160,
        Pete:130
    }
    //Para objetos usaria el For-in
    let sum=0;
    for (const key in salaries){
        sum+=salaries[key];
    }
    
    console.log(sum);
    */
//EJERCICIO 03
/*
    const objeto1={
        id:1,
        nombreDelProducto:'polo',
        precio:50,
        color:'rojo',
        categoriaDelProducto:'prenda',
        oferta:true,
        descuentoEnCyberWeek:20,
        aplicarDescuento:function (){
            if(this.oferta){
                return this.precio-(this.precio*this.descuentoEnCyberWeek/100);
            }
            else return this.precio;
        },
        vendedor:'Alonso',
        reputacionVendedor:3,
        reputacionProducto:2,
        cantidadDisponible:15,
        cantidadVendida:4
    }
    console.log(objeto1.aplicarDescuento());

    const objeto2={
        id:1,
        nombreDelProducto:'short',
        precio:70,
        color:'verde',
        categoriaDelProducto:'prenda',
        oferta:false,
        descuentoEnCyberWeek:30,
        aplicarDescuento:function (){
            if(this.oferta){
                return this.precio-(this.precio*this.descuentoEnCyberWeek/100);
            }
            else return this.precio;
        },
        vendedor:'Alonso',
        reputacionVendedor:3,
        reputacionProducto:5,
        cantidadDisponible:60,
        cantidadVendida:12
        
    }
    const objeto3={
        id:1,
        nombreDelProducto:'camisa',
        precio:90,
        color:'verde',
        categoriaDelProducto:'prenda',
        oferta:true,
        descuentoEnCyberWeek:25,
        aplicarDescuento:function (){
            if(this.oferta){
                return this.precio-(this.precio*this.descuentoEnCyberWeek/100);
            }
            else return this.precio;
        },
        vendedor:'Alberto',
        reputacionVendedor:5,
        reputacionProducto:4,
        cantidadDisponible:11,
        cantidadVendida:8
        
    }
    */
//EJERCICIO 04
    /*
    class Cliente{
        constructor(nombre,apellido,direccion,calle,departamento,localidad,provincia,pais,dni,email){
            this.nombre=nombre;
            this.apellido=apellido;
            this.direccion=direccion;
            this.calle=calle;
            this.departamento=departamento;
            this.localidad=localidad;
            this.provincia=provincia;
            this.pais=pais;
            this.dni=dni;
            this.email=email;
        }
    }
    let cliente1=new Cliente('juan','ayala','lima','valle','lima','villa','lima','peru',7745621,'juan@gmail.com');
    let cliente2=new Cliente('daniel','quiñones','lima','valle','lima','villa','lima','peru',7745621,'daniel@gmail.com');
    let cliente3=new Cliente('Adrian','ayala','lima','valle','lima','villa','lima','peru',7745621,'adrian@gmail.com');
    console.log(cliente1);
    console.log(cliente2);
    console.log(cliente3);
*/

//EJERCICIO 05
        //Las claves son de tipo string de manera implicita, es decir es lo mismo id:  que un 'id':        

const discoSolido = { 
    "id": "MLA1410362542",
    "category_id": "MLA1672",
    "title": "Disco sólido interno Adata Ultimate SU650 ASU650SS-240GT-R 240GB negro",
    "url": "https://www.mercadolibre.com.ar/disco-solido-interno-adata-ultimate-su650-asu650ss-240gt-r-240gb-negro/p/MLA15749699#reco_item_pos=0&reco_backend=machinalis-pdp-pads-v2p-brothers&reco_backend_type=low_level&reco_client=pdp-pads-right&reco_id=14b8ec57-61a1-49f7-9d64-3c1ba4abf3f8",
    "price": {
        "currency_id": "ARS",
        "symbol": "$",
        "decimal_separator": ",",
        "fraction": "13.399"
    },
    "sale_price": {
        "amount": 13399,
        "currency_id": "ARS",
        "metadata": {},
        "fallback": false
    },
    "image": {
        "src": "https://http2.mlstatic.com/D_Q_NP_726919-MLA40462053410_012020-AB.webp",
        "src2x": "https://http2.mlstatic.com/D_Q_NP_2X_726919-MLA40462053410_012020-AB.webp",
        "size": "224px"
    },
    "product_id": "MLA15749699",
    "available_quantity": 12,
    "status": "active",
    "is_cart_enabled": false,
    "vertical": "CORE",
    "shipping": {
        "text": "Envío gratis",
        "freeShipping": true,
        "fullfilment": true
    }
}
//console.log(discoSolido.image.src);//En conclusion las claves pueden o no llevar comillas '' es irrelevante

const title=discoSolido.title;
const symbol=discoSolido.price.symbol;
const amount=discoSolido.sale_price.amount;
const freeShippin=discoSolido.shipping.freeShipping;

function info(titulo,simbolo,precio,envioGratis){
    if(envioGratis){
        return `El artículo: ${ titulo }, de precio: ${ simbolo }${ precio }, que se encuentra disponible , cuenta con envío gratis.`
    }else return `El artículo: ${ titulo }, de precio: ${ simbolo }${ precio }, que se encuentra disponible, no cuenta con envío gratis.`
}
console.log(info(title,symbol,amount,freeShippin));


