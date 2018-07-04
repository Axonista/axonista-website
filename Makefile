.PHONY: jekyll
jekyll: 
	docker-compose up -d && docker-compose exec jekyll jekyll build --watch --incremental