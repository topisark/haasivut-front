#!/usr/bin/env bash

deploy_prod () {
    echo '** No prod yet! **'
}

deploy_dev () {
    npm run build
    aws s3 sync build/ s3://haasivut-front/ --profile personal
    #aws cloudfront create-invalidation --distribution-id E1ZE6IHJEWO71H --paths '/*' --profile personal
}

echo
echo 'This will build and deploy Haasivut to S3.'
echo 'You must have aws cli installed and configured with user that has write access.'
echo
echo -n "Environment? (dev/prod) "
read answer
echo

if [ "$answer" == "prod" ] ;then

    deploy_prod

    echo
    echo '** Uploaded to PROD! **'
    echo
elif [ "$answer" == "dev" ] ;then

    deploy_dev

    echo
    echo '** Uploaded to DEV! **'
    echo
else
    echo 'Wrong answer :('
fi

