run-redis:
	docker run -d -p 6379:6379 -e ALLOW_EMPTY_PASSWORD=yes bitnami/redis:latest