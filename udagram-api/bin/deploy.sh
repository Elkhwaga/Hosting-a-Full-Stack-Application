# eb init udagram-api -r $AWS_DEFAULT_REGION -p node.js
# eb use Udagramapi-env
# eb deploy

eb init udagram-api --region us-east-1
eb use Udagramapi-env
eb deploy Udagramapi-env

# eb setenv AWS_REGION=$AWS_DEFAULT_REGION