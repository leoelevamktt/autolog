const enc=(o,p='',a=[])=>{for(const k in o){const key=p?`${p}[${k}]`:k;typeof o[k]==='object'?enc(o[k],key,a):a.push(encodeURIComponent(key)+'='+encodeURIComponent(o[k]))}return a};
module.exports={
 st:async(path,body)=>{const r=await fetch('https://api.stripe.com/v1/'+path,{method:body?'POST':'GET',headers:{Authorization:'Bearer '+process.env.STRIPE_SECRET_KEY,'Content-Type':'application/x-www-form-urlencoded'},body:body?enc(body).join('&'):undefined});const j=await r.json();if(!r.ok)throw Error(j.error?.message||'Erro no Stripe');return j},
 wrap:f=>async(req,res)=>{try{res.json(await f(req.body||{},req))}catch(e){res.status(400).json({error:e.message})}},
 sid:s=>{if(!/^cs_[\w]+$/.test(s||''))throw Error('Sessão inválida');return s}};
