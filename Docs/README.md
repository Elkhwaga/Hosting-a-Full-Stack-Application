# Udagram

- [Udagram](#udagram)
- [Description](#description)
- [Dependencies](#dependencies)
- [AWS Cloud Setup](#aws-cloud-setup)
- [Environment Variables](#environment-variables)
- [Pipeline](#pipeline)
- [CircleCi](#circleci)
- [Testing](#testing)
- [Unit Tests:](#unit-tests)
- [End to End Tests:](#end-to-end-tests)
- [Built With](#built-with)

## Description

More in-depth documentation of the application.

## Dependencies

- Node v16 (LTS) or more recent.

- npm 5.5.1 (LTS) or more recent.

- AWS CLI v2, v1 can work but were not tested for this project

- AWS EB CLI

- AWS RDS database running Postgres.

- AWS S3 bucket for Frontend.

- AWS Elastic Beanstalk for Backend.

## AWS Cloud Setup

### RDS Postgres

The application server uses AWS RDS Postgres as a database for storing and retrieving information.

- RDS - Database Host: project.cqg1cl7skyby.us-east-1.rds.amazonaws.com
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

### Environment Variables

Setup the following variables in the .env file or in the cloud environments:

```
- PORT                = 8080
- POSTGRES_HOST       = <Database_IP_Address>
- POSTGRES_PORT       = <Database_Port>
- POSTGRES_DB         = <Database_Name>
- POSTGRES_USERNAME   = <Database_Username>
- POSTGRES_PASSWORD   = <Database_Password>
- URL                 = <Url>
- JWT_SECRET          = <Any_PassPhrase>
- AWS_REGION          = <us-east-1>
- AWS_PROFILE         = <Profile>
- AWS_BUCKET          = <Bucket_Name>
```

### Pipeline Process

The pipeline is set up and connected with this GitHub repository in CircleCI.

### Order of commands

1. The pipeline uses orbs to install Node, the AWS CLI, and the EB CLI.
2. It checks out the code from the repo
3. FrontEnd & BackEnd install
4. FrontEnd & BackEnd build
5. FrontEnd & BackEnd deploy
