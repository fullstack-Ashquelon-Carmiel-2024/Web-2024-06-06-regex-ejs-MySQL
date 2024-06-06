module.exports = {
  
  getSampleHomePage: (req,res) => {

    res.render('small-index.ejs',
      {title: 'Yummy'})

  },

  getSmallHomePage: (req,res) => {

    res.render('small-index.ejs',
      {title: 'Yummy'})

  }

}