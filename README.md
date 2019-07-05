# Frontend for the cool.gifs API.

Cool gifs is a self hosted gif archive.

## Features
* Customizable home page and footer
* Image flagging (for review later)

## Setup
In the same directory as the docker-compose.yml create a file called `.env`

```
API_URL=http://address-of-api/api
```

## How to customize home page or footer

To override the default home.md or footer.md with your own content. Edit the docker-compose.yml file
to volume mount your own file into the app

```
  volumes:
   - ./my_home.md:/usr/share/nginx/html/home.md
   - ./my_footer.md:/usr/share/nginx/html/footer.md
```
