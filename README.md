# node-ffmpeg-splitter
Splits a video file into 30 second files.

The aim was to take a long video and split it into chucks that can be uploaded on ones WhatsApp Status. Saves the output as an mp4 file

## Requirements
- This scripts assumes that you already have [ffmpeg](https://www.ffmpeg.org/) installed and the executables are available in $PATH
- This script assumes that you have node installed

## ASSUMPTIONS
- Assumes that the video file you are splitting is in the same folder as the main script is

## USAGE
```sh
$ node main.js 'Rick Astley - Never Gonna Give You Up.mkv'

```
