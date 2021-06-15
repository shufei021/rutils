cd ..
# 终止一个错误
set -e
cd docs
# 生成静态资源
vuepress build
# 进入生成的构建文件夹
cd vuepress
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/shufei021/shufei021.github.io.git master