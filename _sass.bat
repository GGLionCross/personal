@ECHO OFF
IF "%1" == "" sass --style=compressed --no-source-map src/scss/main.scss:dist/main.min.css
IF "%1" == "w" sass --watch --style=compressed --no-source-map src/scss/main.scss:dist/main.min.css
IF NOT "%2" == "" ECHO ONE ARG MAX