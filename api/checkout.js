const{st,wrap}=require('./_s');
module.exports=wrap(async(b,req)=>{const o='https://'+req.headers.host;
 const s=await st('checkout/sessions',{mode:'subscription',locale:'pt-BR',line_items:[{price:process.env.STRIPE_PRICE_ID,quantity:1}],success_url:o+'/?sid={CHECKOUT_SESSION_ID}',cancel_url:o+'/',allow_promotion_codes:'true'});
 return{url:s.url}});
