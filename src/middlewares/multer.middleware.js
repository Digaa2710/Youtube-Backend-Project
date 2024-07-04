import multer from "multer"

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        //destination
        cb(null,"./public/temp")
        //cb =callback function
    },
    filename:function(req,file,cb){
        
        cb(null,file.originalname)
    }
})

export const upload=multer({storage:storage})