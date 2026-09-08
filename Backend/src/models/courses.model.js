import mongoose, {Schema, model} from "mongoose";

const coursesSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        subTitle: {
            type: String
        },
        description: {
            type: String
        },
        category: {
            type: String,
            required: true
        },
        level: {
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced"]
        },
        price: {
            type: Number
        },
        thumbnail: {
            type: String
        },
        enrollStudents: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        lectures: {
            type: Schema.Types.ObjectId,
            ref: "Lecture"
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        isPublished: {
            type: Boolean,
            default: false
        },
        review: {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }


    }, 
    {
        timestamps: true
    }
)

export const Courses = model("Courses", coursesSchema);