/* eslint-disable prettier/prettier */
import { Injectable, Req, Res } from '@nestjs/common';
import * as multer from 'multer';
import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';

const AWS_S3_BUCKET_NAME='myeartbucket';
const s3=new AWS.S3();
AWS.config.update({
    accessKeyId:process.env.Access_Key_ID,
    secretAccessKey:process.env.Secret_Access_Key
});

@Injectable()
export class AppService {

    async fileUpload(@Req() req, @Res() res){
        try{
            this.upload(req,res,(error)=>{
                if(error){
                    console.log(error);
                    return res.status(404).json(`Failed to upload:${error}`)
                }
                return res.status(201).json(req.files[0].location);
            });
        }
        catch(error){
            console.log(error);
            return res.status(500).json(`Failed to upload:${error}`);
        }
    }


    upload=multer({
       storage: multerS3({
        s3:s3,
        bucket:AWS_S3_BUCKET_NAME,
        acl:'public-read',
        key:function(req,file,cb){
            cb(null,`${Date.now().toString()}-${file.originalname}`);
        },
    })
    }).array('upload',1)
    
}


