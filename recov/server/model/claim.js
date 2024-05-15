import mongoose from "mongoose";

const claimSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "lostItem",
        },
        description: {
            type: String,
            required: [true, "Please Add A Description"],
        },
        additionalInfo: {
            type: String,
            required: [true, "Please Add Additional Information"],
        },
    },
    {
        timestamps: true,
    }
);
const claim = mongoose.model("claim", claimSchema);
export default claim;