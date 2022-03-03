const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const cors=require("cors")

const postRoutes=require("./routes/posts.js")

var todoRouter = express.Router();
// app.use('/postRoutes', todoRouter);

todoRouter.get('/',postRoutes.getPosts);
todoRouter.post('/cretePost', postRoutes.createPost);
todoRouter.get('/:id', postRoutes.getPost);
todoRouter.patch(':id', postRoutes.updatePost);

todoRouter.delete('/:id', postRoutes.deletePost);
todoRouter.patch('/:id', postRoutes.likePost);


const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// app.use('/posts', postRoutes);


//  const CONNECTION_URL='mongodb+srv://youtube-merial:youtube-merial@cluster0.xay3y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
// .then((result)=>
//     console.log("connected to mongoose"))
//     .catch((err)=> console.log(err))
// app.listen(3000,()=>{
//     console.log("Server Started");
// })

const CONNECTION_URL='mongodb+srv://youtube-merial:youtube-merial@cluster0.xay3y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// const CONNECTION_URL = 'mongodb+srv://:123123123@practice.jto9p.mongodb.net/test';
const PORT = process.env.PORT|| 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(" did not connect"));

// mongoose.set('useFindAndModify', false);
