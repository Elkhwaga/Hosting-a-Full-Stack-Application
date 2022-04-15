# Infrastructure

This application, Udagram, is composed of a frontend and backend: udagram-frontend and
udagram-api.
udagram-frontend is an Angular application hosted in an S3 bucket by Amazon Web Services.
udagram-api is an Express application that lives inside an Elastic Beanstalk environment by
Amazon Web Services.
There is also a PostgreSQL database that lives inside RDS by Amazon Web Services.

## AWS Cloud Setup

### RDS Postgres

The application server uses AWS RDS Postgres as a database for storing and retrieving information.

- RDS - Database Host: database-3.crvcmn82t7hj.us-east-1.rds.amazonaws.com
- RDS - Database Port: 5432
- RDS - Database Name: postgres

### S3 Bucket

The frontend application is deployed using AWS S3 Bucket. The bundled assets are uploaded to an S3 bucket and that
the bucket is made publicly readable.

- S3 Endpoint - Frontend: <http://mohammed-udagram.s3-website-us-east-1.amazonaws.com>

End-users can access the application from the Bucket URL.

### Elastic Beanstalk

The application server is deployed on the AWS Elastic Beanstalk service. The application is built, archived, and uploaded
to and S3 bucket from where Elastic Beanstalk extracts and runs the application on an endpoint.

- Elastic Beanstalk URL - Backend: <http://udagram-server-env.eba-tjppuvab.us-east-1.elasticbeanstalk.com>
