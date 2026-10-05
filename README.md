# AutoLog
SPA estática + 3 funções serverless (Stripe via REST, sem dependências).

## Deploy
1. No Stripe: crie um produto com preço recorrente mensal e ative o Customer Portal (Configurações > Billing > Portal do cliente).
2. `npx vercel link --token SEU_TOKEN`
3. `npx vercel env add STRIPE_SECRET_KEY production --token SEU_TOKEN`  (chave `sk_...`)
4. `npx vercel env add STRIPE_PRICE_ID production --token SEU_TOKEN`    (`price_...`)
5. `npx vercel --prod --token SEU_TOKEN`

## Limitações desta versão
- Dados em localStorage (por aparelho); sem contas/login nem sincronização entre dispositivos.
- Vídeos: o feed é por aparelho e publica por URL; upload real exige Vercel Blob + banco.
- O status Premium é consultado no Stripe a cada abertura, usando o ID da sessão de checkout.
