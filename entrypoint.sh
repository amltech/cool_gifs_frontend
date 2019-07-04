#!/bin/bash
echo "window.appConfig = { API_URL: '${API_URL}'} " > /usr/share/nginx/html/config.js
cat /usr/share/nginx/html/config.js
nginx -g "daemon off;"
