docker pull brandonbryant/fantasyfootballsv

docker kill fantasyfootballsv
docker rm fantasyfootballsv

docker run -d --restart=always -p 3000:3000 --name fantasyfootballsv --env-file=.env fantasyfootballsv

