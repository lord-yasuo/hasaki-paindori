npm run build
cd dist

git init
git add .
git commit -m 'New Deployment'
git push -f https://github.com/lord-yasuo/hasaki-paindori.git main:prod