import express from 'express'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/health",(_req,res)=>{
  res.json({
  "status": "ok",
  "service": "gateway",
  "ts": "2025-08-25T22:05:00.000Z"
}
)
})

app.listen(PORT,()=>{
  console.log(`Gateway listening on http://localhost:${PORT}`)
})
