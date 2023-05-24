module.exports.getBrandsController = {
    getBrand: (req, res) => {
        res.json('Бренд продукта')
    },
    postBrand:(req, res)=>{
        res.json('Изменение бренда')
    },
    deleteBrand:(req,res)=>{
        res.json('Удаление бренда')
    }
}