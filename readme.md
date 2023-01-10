## How to run the app

1. run `skaffold dev` to start the app
2. if you notice any error related to port :80 already in use, run `netstat -aon | findstr :80` to find the process id and then run `taskkill /PID <process id> /F` to kill the process
3. run `skaffold dev` again to start the app
