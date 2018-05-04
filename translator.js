const http = require('http')
const cheerio = require('cheerio')
const baseUrl = "http://www.iciba.com/"
function spider(word){
  return new Promise((resolve,reject)=>{
    http.get(encodeURI(baseUrl+word),res=>{
      let html=''
      res.on('data',data=>html+=data)
      res.on('end',()=>resolve(html))
    })
  })
}
function parse(html){
  const ch = cheerio.load(html)
  const res = []
  ch(".js-base-info .in-base .base-list p span").each((i,el)=>{
    res.push(ch(el).text())
  })
  return res
}

module.exports = function(word){
  return new Promise((resolve,reject)=>{
    spider(word).then(html=> resolve(parse(html)))
  })
}