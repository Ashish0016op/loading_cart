const mongoose=require('mongoose');
const orderSchema=new Schema({
    products:[{
        productData:{type:Object,required:true},
        quantity:{type:Number,required:true}
    }],
    user:{
        name:{
            type:String,
            required:ture
        },
        userId:{
            type:Schema.Types.ObjectId,
            required:true,
            ref:'User'
        }
    }
});
module.exports=mongoose.model('Order',orderSchema);
