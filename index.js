const { addProposalSyntaxPlugins } = require('@babel/preset-env/lib/filter-items')
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World!')

})

app.listen(3000)
