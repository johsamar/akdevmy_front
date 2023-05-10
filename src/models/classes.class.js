export class Classes {
  name = "";
  type = "";
  description = "";
  duration = 0;
  url = "";
  image = "";
  video = "";
  audio = "";
  article = "";
  document = "";
  position = 0;

  // Constructor
  constructor(
    name,
    type,
    description,
    duration,
    url,
    image,
    video,
    audio,
    article,
    document,
    position
  ) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.duration = duration;
    this.url = url;
    this.image = image;
    this.video = video;
    this.audio = audio;
    this.article = article;
    this.document = document;
    this.position = position;
  }
}
