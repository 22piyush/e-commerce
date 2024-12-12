import { model, Schema } from "mongoose";

const orderSchema = new Schema({
  userId: {
    type: Schema.type.ObjectId,
    ref: "user",
    required: true,
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalBill:{
    tyep:Number,
    required:true,
  },
  deliveryAddress:{
    type:String,
    required:true,
  },
  phone:{
    type:String,
    required:true,
  },
  paymentMode:{
    type:String,
    required:true,
  },
  paymentId:{
    type:String,
    required:true,
  },
  status:{
     type:String,
     default:"pending", 
  },
  timeLine:[
    {
        status:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            default:Date.now,
        },
    },
  ]
},{
    timestamps:true,
});

const Order = model("Order", orderSchema);
export default Order;
