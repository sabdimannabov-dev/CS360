import * as express from 'express'
import * as db from './TranscriptManager'

db.initialize()

const app: express.Application = express()
const PORT: number = 4001

app.post('/students',
    (req, res) => {
        db.addStudent(req.body.studentName)
        res.status(201).json({message: "student added"})
    }
)

app.listen(PORT, () => {
    console.log("Express server now listening on localhost:4001")
})