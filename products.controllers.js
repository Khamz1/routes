module.exports.getProductsController={
    getProduct: (req, res)=>{
        res.json("hello")
    },
    getProductById: (req, res)=>{
        res.json(`продук под ID - ${req.params.id} - выведен`)
    },
    postProduct: (req, res)=>{
        res.json('Внесение изменений в список продуктов ')
    },
    deleteProduct:(req, res)=>{
        res.json(`Удаление продукта ${req.params.id} `)
    }
}