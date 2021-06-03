# echo $(python3 StaticCheck.py)
# if [ $(python3 StaticCheck.py) = 0 ]; then
# 	echo 'config not present!'
# 	exit 2
# fi
# echo 'config check passed!'
#npm install
echo $(npm run build)
if [$(npm run build) = 1]; then
    echo 'build failed'
    exit 2
fi
echo 'build ok'
# cd src/__tests__
# npm run test
# cd ../..
git add .
git commit -m $1
git push origin master
git status