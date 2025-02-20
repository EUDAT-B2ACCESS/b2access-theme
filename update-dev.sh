#!/bin/bash
rsync -r -l --delete /home/marvin/workspace/b2access-theme/* mwinkens@zam10064.zam.kfa-juelich.de:/home/mwinkens/webContents/b2access
# ssh mwinkens@zam10064.zam.kfa-juelich.de 'cd webContents && sudo -u unity ./build.sh /usr/local/unity/unity-3.16.1 b2access'
ssh mwinkens@zam10064.zam.kfa-juelich.de 'sudo cp -r /home/mwinkens/webContents/b2access /usr/local/unity/unity-4.0.2/webContents && sudo chown -R unity:unity /usr/local/unity/unity-4.0.2/webContents/b2access'
