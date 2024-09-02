const { pgTable, text, jsonb } = require('drizzle-orm/pg-core');

const workoutPlans = pgTable("workoutPlans", {
    xata_id: text("xata_id").primaryKey(),
    xata_id: text("xata_id"),
    userID: text("userID"),
    name: text("name"),
    planData: jsonb("planData"),
});

module.exports = { workoutPlans}