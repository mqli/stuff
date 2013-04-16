http = require 'http'
url = require 'url'
qs = require 'querystring'
crypto = require 'crypto'
http.createServer (req, res)->
  console.log req.method
  console.log qs.parse(req.url)
  res.writeHead 200, 'Content-Type': 'text/plain'
  if qs.parse(req.url)['hub.challenge']
    return res.end qs.parse(req.url)['hub.challenge']

  if req.method == 'GET'
    return res.end '''
      <head prefix=
       "og: http://ogp.me/ns# 
        fb: http://ogp.me/ns/fb# 
        product: http://ogp.me/ns/product#">
       <meta property="og:type"                   content="og:product" />
       <meta property="og:title"                  content="Test Product" />
       <meta property="og:image"                  content="http://static.payment.happyelements.com/images/facebook/actImg.png" />
       <meta property="og:description"            content="Your great japanese stamp!" />
       <meta property="og:url" content="http://tools.gip.happyelements.com/paymenttest" />
       <meta property="product:price:amount" content="9999999"/>
       <meta property="product:price:currency" content="USD"/>

      </head>
    '''
  req.on 'data', (data)->
    console.log qs.parse(data.toString())
    console.log parseSignedRequest(qs.parse(data.toString()).signed_request, 'b50ebd35f864f509de23295693f3ee51')
    res.end JSON.stringify {
      "content": {
        "product": "http://tools.gip.happyelements.com/paymenttest",
        "amount": 1.99,
        "currency": "CNY",
      },
      "method":"payments_get_item_price"
    }

.listen 9999, '10.130.136.219'

base64UrlDecode = (str) ->
  base64String = str.replace(/\-/g, "+").replace(/_/g, "/")
  buffer = new Buffer(base64String, "base64")
  buffer.toString "utf8"
has = (obj, key) ->
  Object::hasOwnProperty.call obj, key
parseSignedRequest = (signedRequest,appSecret)->
  split = undefined
  encodedSignature = undefined
  encodedEnvelope = undefined
  envelope = undefined
  hmac = undefined
  base64Digest = undefined
  base64UrlDigest = undefined
  return  unless signedRequest
  throw new Error("appSecret required")  unless appSecret
  split = signedRequest.split(".")

  return  if split.length isnt 2
  encodedSignature = split.shift()
  encodedEnvelope = split.shift()
  return  if not encodedSignature or not encodedEnvelope
  try
    envelope = JSON.parse(base64UrlDecode(encodedEnvelope))
  catch ex
    return
  return  unless envelope and has(envelope, "algorithm") and envelope.algorithm.toUpperCase() is "HMAC-SHA256"
  hmac = crypto.createHmac("sha256", appSecret)
  hmac.update encodedEnvelope
  base64Digest = hmac.digest("base64")
  
  # remove Base64 padding
  base64UrlDigest = base64Digest.replace(RegExp("={1,3}$"), "")
  
  # Replace illegal characters
  base64UrlDigest = base64UrlDigest.replace(/\+/g, "-").replace(/\//g, "_")
  return  if base64UrlDigest isnt encodedSignature
  envelope
return
signed_request =  '''
BPcuxtf_e9jLAAWFIngLMdq54KVNNQRPfurccxpzHrU.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImV4cGlyZXMiOjEzNjQ4MTQwMDAsImlzc3VlZF9hdCI6MTM2NDgwODExNywib2F1dGhfdG9rZW4iOiJBQUFCdktmMVVOWU1CQU16TDJ2Qmh2REZIa0MxV0NCVk13bjV6NGY4UFhTYjN5WkJUYlBrd25sTXl0cGxaQllpTThMa2QxUFNaQXV5TE5ZZWswcDE0RFpDQlNONEN5WkJnVW9hRm02Y0JMR252aElOY0ZhdnJ3IiwicGF5bWVudCI6eyJwcm9kdWN0IjoiaHR0cDpcL1wvdG9vbHMuZ2lwLmhhcHB5ZWxlbWVudHMuY29tXC9wYXltZW50dGVzdCIsInF1YW50aXR5IjoxLCJ1c2VyX2N1cnJlbmN5IjoiQ05ZIiwicmVxdWVzdF9pZCI6IiJ9LCJ1c2VyIjp7ImNvdW50cnkiOiJ0dyIsImxvY2FsZSI6InpoX0NOIiwiYWdlIjp7Im1pbiI6MjF9fSwidXNlcl9pZCI6IjEwMDAwMTAyMzAyNjk1MiJ9
'''
console.log parseSignedRequest(signed_request, 'b50ebd35f864f509de23295693f3ee51')