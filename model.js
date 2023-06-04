// const connection = require("./database")
// class User{
//     constructor(){
        
//     }
//     save = ()=> {
//         return new Promise((resolve, reject)=> {
            
//             connection.query("select  *  from   (select user_order.*, JSON_OBJECT('address_id' , address_id, 'street1', street1, 'street2', street2, 'city', city, 'zipcode', zipcode) as address from user_order NATURAL JOIN address) as A  NATURAL jOIN  (select order_id, JSON_ARRAYAGG( JSON_OBJECT('product_id', product_id, 'product_name', product_name, 'images', images, 'quantity', quantity, 'price', order_product.price) ) as products  from order_product INNER JOIN product using(product_id) GROUP BY order_id) as B LIMIT 0,10", (err, result)=> {
//                 if(err) reject(err)
//                 resolve(result)
//             })
//         })
//     }
// }
// module.exports = User;