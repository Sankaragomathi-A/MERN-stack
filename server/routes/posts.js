const express =require("express")

const { getPosts, getPost, createPost, updatePost, likePost, deletePost }=require("../controllers/posts.js")
const router = express.Router();

// router.get('/', getPosts);
// router.post('/', createPost);
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

// module.exports= router;

module.exports ={
  getPosts: function(req, res){
    res.send('All todos');
  },
  createPost: function(req, res){
    res.send('Viewing '+req.params.id);
  },
  getPost: function(req, res){
    res.send('Todo created');
  },
  updatePost: function(req, res){
    res.send('Todo deleted');
  },
  deletePost: function(req, res){
    res.send('Todo '+req.params.id+' updated');
  },
  likePost: function(req, res){
    console.log('Todo '+req.params.id+' updated');
  }
};