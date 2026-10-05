const{st,wrap,sid}=require('./_s');
module.exports=wrap(async({sid:q},req)=>{const s=await st('checkout/sessions/'+sid(q));
 const p=await st('billing_portal/sessions',{customer:s.customer,return_url:'https://'+req.headers.host});return{url:p.url}});
