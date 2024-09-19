
/*
models//public//stylesheets SHARED main css(alone)
//routes//views//partials(works with main)//layouts folder with 1 partial(this is main html)
//const router = express.Router() 
*/ 




/*example of author route
const express = require('express'); 
const router = express.Router(); 
const Author = require('../models/author')
const Book = require('../models/book')

//all authors route
router.get('/', async (req,res)=>{
let searchOptions = {}
if(req.query.name != null && req.query.name !== ''){
searchOptions.name = new RegExp(req.query.name, 'i')
}
try{
  const authors = await Author.find(searchOptions)
   res.render('authors/index',{
    authors:authors, 
    searchOptions:req.query
  }); 
  }catch{
  res.redirect('/')
  }
})


// new author route 
router.get('/new', (req,res)=>{
    res.render('authors/new', {author: new Author()})
})


//create author route
router.post('/', async (req, res) => {
  const author = new Author({
    name: req.body.name
  })
  try {
    const newAuthor = await author.save()
    res.redirect(`authors/${newAuthor.id}`)
  } catch {
    res.render('authors/new', {
      author: author,
      errorMessage: 'Error creating Author'
    })
  }
})


router.get('/:id', async (req, res) => {
  try{
    const author = await Author.findById(req.params.id)
    const books = await Book.find({ author: author.id}).limit(6).exec()
    res.render('authors/show', {
      author: author, 
      booksByAuthor: books
    })
  }catch{
    res.redirect('/')    
  }
})


router.get('/:id/edit', async (req, res) => {
  try {
      const author = await Author.findById(req.params.id)
       res.render('authors/edit', { author: author })
    } catch {  
      res.redirect('/authors')      
    }   
  })


  router.put('/:id', async (req, res) => {
    let author
    try {
      author = await Author.findById(req.params.id)
      author.name = req.body.name
      await author.save()
      res.redirect(`/authors/${author.id}`)
    } catch {
      if (author == null) {
        res.redirect('/')
      } else {
        res.render('authors/edit', {
          author: author,
          errorMessage: 'Error updating Author'
        })
      }
    }
  })
  

  router.delete('/:id', async (req, res) => {
    let author
    try {
      const response = await Author.deleteOne({_id: req.params.id})
      await author.remove()
      res.redirect('/authors')
    } catch {
      if (author == null) {
        res.redirect('/')
      } else {
        res.redirect(`/authors/${author.id}`)
      }
    }
  })
  

  module.exports = router; 








----------example index route

const express = require('express'); 
const router = express.Router(); 
const Book = require('../models/book')

router.get('/', async(req, res) =>{
    let books 
    try{
     books = await Book.find().sort({createAt:'desc'}).limit(10).exec()
    }catch{
        books = []
    }
    res.render('index', {books:books})
})


module.exports = router; 

const mongoose = require('mongoose'); 


/*Example of book model 
const bookSchema =  new mongoose.Schema({
    title:{
        type:String, 
        required: true
    },
    description:{
        type:String, 
    }, 
    publishDate:{
        type:Date, 
        required:true
    }, 
    pageCount:{
        type:Number, 
        required:true 
    }, 
    createdAt:{
        type:Date, 
        required:true, 
        default:Date.now
    }, 
    coverImage:{
        type:Buffer,
        required:true
    }, 
    coverImageType:{
        type:String, 
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        required:true, 
        ref:'Author'
    }
})


bookSchema.virtual('coverImagePath').get(function(){
    if (this.coverImage != null && this.coverImageType != null) {
        return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    
    }
    }
)

if(process.env.NODE_ENV !== 'production'){
require("dotenv").config()
}

*/ 





/*Example of model 
const mongoose = require('mongoose'); 


const bookSchema =  new mongoose.Schema({
    title:{
        type:String, 
        required: true
    },
    description:{
        type:String, 
    }, 
    publishDate:{
        type:Date, 
        required:true
    }, 
    pageCount:{
        type:Number, 
        required:true 
    }, 
    createdAt:{
        type:Date, 
        required:true, 
        default:Date.now
    }, 
    coverImage:{
        type:Buffer,
        required:true
    }, 
    coverImageType:{
        type:String, 
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        required:true, 
        ref:'Author'
    }
})


bookSchema.virtual('coverImagePath').get(function(){
    if (this.coverImage != null && this.coverImageType != null) {
        return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    
    }
    }
)


module.exports = mongoose.model('Book', bookSchema); 




*/ 