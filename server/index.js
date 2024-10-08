const express = require('express');
const db = require('./drizzle/db');
const {workoutPlans} = require('./drizzle/schema');
const {eq} = require('drizzle-orm');
const cors = require("cors")

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

app.get('/workoutPlans', async (req, res) => {
    try {
        const data = await db.select().from(workoutPlans);

        res.json(data)
    } catch (error) {
        res.status(500).json({message: 'Error fetching users', error});
    }
});

app.post("/get-plan", async (req, res) => {
    try {
        const {userID, workoutName} = req.body;
        //TODO: User id as string to uuid
        const data = await db.select().from(workoutPlans).where(eq(workoutPlans.userID, userID), eq(workoutPlans.name, workoutName));

        res.json(data)
    } catch (error) {
        res.status(500).json({message: 'Error fetching users', error});
    }
})

app.post("/update-plan", async (req, res) => {
    try {
        console.log(req.body)

        const data = await db.update(workoutPlans).set({
            planData: req.body.planData,
            name: req.body.name
        }).where(eq(workoutPlans.xata_id, req.body.xataID))

        res.json(data)
    } catch (error) {
        res.status(500).json({message: 'Cant update workout plan', error});
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
