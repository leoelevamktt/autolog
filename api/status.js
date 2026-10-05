const{st,wrap,sid}=require('./_s');
module.exports=wrap(async({sid:q})=>{const s=await st('checkout/sessions/'+sid(q));if(!s.customer)return{premium:false};
 const l=await st('subscriptions?status=all&limit=10&customer='+s.customer);
 return{premium:l.data.some(x=>['active','trialing'].includes(x.status))}});
