git push
yarn deploy
git checkout gh-pages
git pull
git checkout deploy-gh-pages
git merge gh-pages
git push -u deploy deploy-gh-pages:gh-pages
git checkout master
