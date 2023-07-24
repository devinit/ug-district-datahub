# UG District DataHub
The Public Home of Uganda's District Data

## Environment Variables

To smoothly run the site, add the environment variables below to your `.env` file - with your own values of course.

| Name         | Default     |
|--------------|-----------|
| DATABASE_URL |       |
| EMAIL_BACKEND| django.core.mail.backends.console.EmailBackend  |
| EMAIL_HOST | smtp.gmail.com |
| EMAIL_HOST_USER | devinitautomailer@gmail.com |
| EMAIL_HOST_PASSWORD |                  |
| DEFAULT_FROM_EMAIL | devinitautomailer@gmail.com |
| DJANGO_SECRET_KEY |                   |

## Deployment

Deployment is done everytime changes are pushed (merged) into the `dev` branch by Github actions.
For first time deployment, set up a user on the server that will be used by Github Actions to deploy. We also advise to look at the `deploy_script.sh` script to see the process of deployment. You can run it from the server after cloning the repo. Make sure the directory where the repo is cloned into has the `.env` file set up with the values shown in the previous section. 

Also, make sure the following secrets are set up in Github under the repo for continuous deployment to be effected;

| Name         | Description     |
|--------------|-----------|
| DEV_HOST | IP address of server where the dashboard will be deployed |
| DEV_USER| Username that will be used to log into the server |
| KEY | SSH Key to be used - preferably RSA format as it's supported by most Linux distros out of the box |
| PORT | SSH port |

We advise against using the root user to run the deployment. Set up a second user that will be used to run the update. Make sure the second user has permissions to spin up docker containers. Refer to the third option listed here - https://phoenixnap.com/kb/docker-permission-denied. Also, use nvm to install node `>=16 <17`.

## Analytics
This was setup for the dashboard pages. Nextcloud does not work with google analytics out of the box. The account information can be found on Edwin's APHRC handover notes.
