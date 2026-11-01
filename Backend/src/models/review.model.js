import mongoose, {Schema, model} from "mongoose"

const reviewSchema = new Schema(
    {
        course: {
            type: Schema.Types.ObjectId,
            ref: "courses"
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user"
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        comment: {
            type: String,
            trim: true
        },
        reviewAt: {
            type: Date,
            default: Date.now
        }
    },
     {timestamps: true})


     export const Review = model("Review", reviewSchema)