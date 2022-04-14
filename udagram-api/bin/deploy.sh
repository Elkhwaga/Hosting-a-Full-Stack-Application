eb init udagram-api -r $AWS_DEFAULT_REGION -p node.js
eb use Udagramapi-env
eb deploy

eb setenv AWS_REGION=$AWS_DEFAULT_REGION