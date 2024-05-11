# Supabase, Next 시작하기

## install 

```
yarn add react-spinners@^0.13.8  
yarn add react-icons@^5.0.1  

yarn add @supabase/supabase-js@^2.42.0  
yarn add @supabase/ssr@^0.1.0  
yarn add @supabase/auth-ui-react@^0.4.7  
yarn add @supabase/auth-ui-shared@^0.1.8  

yarn add cookies-next@^4.1.1  
```

npx supabase gen types typescript --project-id "rirtnceyccxjlupupgxi" --schema public > types/supabase.ts

## 구글 로그인 구현 3단계

1.Google Cloud API Oauth 셋팅  
2.Auth UI  
3.Callback 처리 (PKCE)  

