import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    productId: String,
    yearlySalestotal: Number,
    yearlyTotalSoldUnit: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        taotalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: {
      data: String,
      totalsales: Number,
      totalUnits: Number,
    },
  },
  { timeStamps: true }
);
const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;
