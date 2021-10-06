let ffmpeg = require("fluent-ffmpeg");

let getDuration = (x) => {
  let file = `./${x}`;
  ffmpeg(file).ffprobe((err, data) => {
    if (err) throw err;

    let runtime = data.format.duration;
    let counter = 1;
    let startTime = 0;
    let splitDuration = 30;

    while (startTime <= runtime) {
      ffmpeg(file)
        .setStartTime(startTime)
        .setDuration(splitDuration)
        .output(`./${counter}-${x.substr(0,x.length - 3)}mp4`)
        .run();
      startTime += splitDuration;
      counter++
    }
  });
};

getDuration(process.argv[2]);
