import mongoose from 'mongoose';

const claimSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'lostItem',
    },
    descriptiom: {
      type: String,
      required: [true, 'Please Add A Description'],
    },
  },
  {
    timestamps: true,
  }
);
const claim = mongoose.model('claim', claimSchema);
export default claim;
