const e="bhrat-info",t="bhrat-info",s="MIT",i="2.0.0",n="https://thirstybrain.github.io/bharat-info",r="module",a={dev:"vite",start:"vite preview",predeploy:"npm run build",deploy:"gh-pages -d build",build:"tsc && vite build",lint:'eslint "src/**/*.{js,jsx,ts,tsx}"',"lint:fix":'eslint --fix "src/**/*.{js,jsx,ts,tsx}"',"fm:check":'prettier --check "src/**/*.{js,jsx,ts,tsx}"',"fm:fix":'prettier --write "src/**/*.{js,jsx,ts,tsx}"',"rm:all":"rm -rf node_modules .next out dist build","re:start":"yarn rm:all && yarn install && yarn dev","re:build":"yarn rm:all && yarn install && yarn build","re:build-npm":"npm run rm:all && npm install && npm run build","dev:host":"vite --host"},c={node:"18.20.4"},l="yarn@1.22.22",p={"@emotion/cache":"^11.13.1","@emotion/react":"^11.13.3","@emotion/styled":"^11.13.0","@fontsource-variable/dm-sans":"^5.0.7","@fontsource/barlow":"^5.0.14","@iconify/react":"^5.0.2","@mui/lab":"^5.0.0-alpha.173","@mui/material":"^5.16.7",apexcharts:"^3.52.0",dayjs:"^1.11.13","gh-pages":"^6.1.1",history:"^5.3.0",react:"^18.3.1","react-apexcharts":"^1.4.1","react-dom":"^18.3.1","react-helmet-async":"^2.0.5","react-router-dom":"^6.26.1","simplebar-react":"^3.2.6"},o={"@types/node":"^22.5.0","@types/react":"^18.3.4","@types/react-dom":"^18.3.0","@typescript-eslint/eslint-plugin":"^7.18.0","@typescript-eslint/parser":"^7.18.0","@vitejs/plugin-react-swc":"^3.7.0",eslint:"^8.57.0","eslint-config-airbnb":"^19.0.4","eslint-config-airbnb-typescript":"^18.0.0","eslint-config-prettier":"^9.1.0","eslint-import-resolver-typescript":"^3.6.1","eslint-plugin-import":"^2.29.1","eslint-plugin-jsx-a11y":"^6.9.0","eslint-plugin-perfectionist":"^2.11.0","eslint-plugin-prettier":"^5.2.1","eslint-plugin-react":"^7.35.0","eslint-plugin-react-hooks":"^4.6.2","eslint-plugin-unused-imports":"^3.2.0",prettier:"^3.3.3",typescript:"^5.5.4",vite:"^5.4.2","vite-plugin-checker":"^0.7.2"},d={name:e,author:t,licence:s,version:i,private:!1,homepage:n,type:r,scripts:a,engines:c,packageManager:l,dependencies:p,devDependencies:o},u={appName:"BharatInfo",appVersion:d.version};export{u as C};
