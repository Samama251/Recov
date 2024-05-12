import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'Please Add A Names'],
    },
    itemName: {
      type: String,
      required: [true, 'Item Name is required'],
      unique: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    description: {
      type: String,
      required: [true, 'Please Add A Description'],
    },
    image: {
      type: String,
    },
    location: {
      type: String,
      required: [true, 'Please Add a Location'],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    email: {
      type: String,
      required: [true, 'Please Add a Email'],
    },
    status: {
      type: String,
      default: 'Pending',
    },
    adminApproval: {
      type: Boolean,
      default: false,
    },
    itemType: {
      type: String,
      default: 'lost',
      required: [true, 'Please Add a Item Type'],
    },
  },
  {
    timestamps: true,
  }
);

const item = mongoose.model('item', itemSchema);
export default item;