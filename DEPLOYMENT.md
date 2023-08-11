# Steps to run the service locally

1. Create a .env file (or if preferred pass all the params via command line to docker) with following content:
```
SHOPIFY_API_KEY=
SHOPIFY_API_SECRET=
SCOPES=write_products,read_orders
HOST=
BACKEND_PORT=8081
```

2. Execute following commands to pull the image and run it locally
```shell
export AWS_PROFILE=estafeta
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 471323616805.dkr.ecr.us-east-1.amazonaws.com
docker pull 471323616805.dkr.ecr.us-east-1.amazonaws.com/estafeta-plugin:main
docker run -d -p 8081:8081 --env-file .env 471323616805.dkr.ecr.us-east-1.amazonaws.com/estafeta-plugin:main
```
