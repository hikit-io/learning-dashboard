
deploy:
	npm run build && cp ./docs/index.html ./docs/404.html && git add . && git commit -m "deploy" && git push && echo 'https://learning.hikit.io'