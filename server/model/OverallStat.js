import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema(
  {
    totalCustomers: Number,
    yearlySalestotal: Number,
    yearlyTotalSoldUnit: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        data: String,
        totalsales: Number,
        totalUnits: Number,
      },
    ],

    salesBycategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);
const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
export default OverallStat;
