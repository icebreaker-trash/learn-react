require('dotenv').config()
const {
  TENCENT_SECRET_ID,
  TENCENT_SECRET_KEY,
  TENCENT_COS_CDN_BUCKET,
  TENCENT_COS_CDN_REGION
} = process.env

// const tencentcloud = require('tencentcloud-sdk-nodejs')
// const CdnClient = tencentcloud.cdn.v20180606.Client
const COS = require('cos-nodejs-sdk-v5')
// const { nanoid } = require('nanoid')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
// const dayjs = require('dayjs')
const klaw = require('klaw')

const distPath = path.resolve(__dirname, '..', 'dist')
// const cdn = new CdnClient({
//   credential: {
//     secretId: TENCENT_SECRET_ID,
//     secretKey: TENCENT_SECRET_KEY
//   },
//   region: TENCENT_COS_CDN_REGION
// })
// 创建实例
const cos = new COS({
  SecretId: TENCENT_SECRET_ID,
  SecretKey: TENCENT_SECRET_KEY
})
// 分片上传
const prefix = fs.readFileSync(path.resolve(__dirname, '..', '.base'))

console.log(chalk.black.bgGreenBright(prefix))
;(async () => {
  try {
    const allFile = []
    for await (const { path: filepath, stats } of klaw(distPath)) {
      const key = filepath.replace(distPath, '').replace(/\\/g, '/')
      if (stats.isFile()) {
        allFile.push({
          Bucket: TENCENT_COS_CDN_BUCKET,
          Region: TENCENT_COS_CDN_REGION,
          Key: prefix + key,
          FilePath: filepath
        })
      }
    }
    for (const filename of fs.readdirSync(distPath)) {
      const filepath = path.resolve(distPath, filename)
      const stat = fs.statSync(filepath)
      if (stat.isFile()) {
        allFile.push({
          Bucket: TENCENT_COS_CDN_BUCKET,
          Region: TENCENT_COS_CDN_REGION,
          Key: filename,
          FilePath: filepath
        })
      }
    }
    await cos.uploadFiles({
      files: allFile,
      SliceSize: 1024 * 1024,
      onProgress (info) {
        const percent = parseInt(info.percent * 10000) / 100
        const speed = parseInt((info.speed / 1024 / 1024) * 100) / 100
        console.log('进度：' + percent + '%; 速度：' + speed + 'Mb/s;')
      }
    })

    // await cos.putBucketWebsite({
    //   Bucket: TENCENT_COS_CDN_BUCKET /* 必须 */,
    //   Region: TENCENT_COS_CDN_REGION /* 必须 */,
    //   WebsiteConfiguration: {
    //     IndexDocument: {
    //       Suffix: prefix + '/index.html'
    //     },
    //     ErrorDocument: {
    //       Key: prefix + '/index.html'
    //     }
    //     // RedirectAllRequestsTo: {
    //     //   Protocol: 'https'
    //     // }
    //   }
    // })
  } catch (err) {
    console.log(err)
  }
})()
