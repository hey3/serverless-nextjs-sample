# serverless-nextjs-sample

![image](https://user-images.githubusercontent.com/38312611/100963266-5d6a0700-3569-11eb-8140-ccfdc3ae183f.png)

## Develop Next.js App

```bash
$ yarn dev
```

## Deploy

Set your AWS credentials as environment variables

```
AWS_ACCESS_KEY_ID=accesskey
AWS_SECRET_ACCESS_KEY=sshhh
```

or use AWS configure

Install dependencies

```bash
$ yarn
```

Create `env-{dev|staging|prod}` from `env-sample`  
(This sample provides an example of switching the name of S3 bucket and lambda for each environment)

1. To install a dev instance: `yarn deploy:dev`
2. To install a staging instance: `yarn deploy:staging`
3. To install a prod instance: `yarn deploy:prod`

## Remove Resources

```bash
$ yarn remove:{dev|staging|prod}
```

※ Some resources need to be deleted manually

## Use CI/CD

This sample provides an example using Github Actions

It is necessary to register the Credentials of IAM users for deployment in the Github repository Secrets

In this sample, Github Actions runs CI / CD process after merging into staging or main branch  
For example, when merged into a staging branch, deploy to the staging instance