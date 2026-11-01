export const notFound = (req,res,next) =>{
    res.status(404).render('error/404.ejs',{url:req.originalUrl})
}


export const errorHandler = (err,req,res,next)=>{
    console.error(err)
    if(res.headerSent){return next(err)}

    const statusCode = err.statusCode || 500
    const message = err.message || "Something went wrong"

  res.status(statusCode).render("error/500.ejs", { statusCode, message })

}