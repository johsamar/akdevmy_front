export class Classes {
  // Constructor
  constructor() {
    this.get_id = "";
    this.name = "";
    this.type = "";
    this.description = "";
    this.duration = 0;
    this.url = "";
    this.image = "";
    this.video = "";
    this.audio = "";
    this.article = "";
    this.document = "";
    this.position = 0;
  }

  setGet_id(id) {
    this.get_id = id;
    return this;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  setType(type) {
    this.type = type;
    return this;
  }
  setDescription(description) {
    this.description = description;
    return this;
  }
  setDuration(duration) {
    this.duration = duration;
    return this;
  }
  setUrl(url) {
    this.url = url;
    return this;
  }
  setImage(image) {
    this.image = image;
    return this;
  }
  setVideo(video) {
    this.video = video;
    return this;
  }
  setAudio(audio) {
    this.audio = audio;
    return this;
  }
  setArticle(article) {
    this.article = article;
    return this;
  }
  setDocument(document) {
    this.document = document;
    return this;
  }
  setPosition(position) {
    this.position = position;
    return this;
  }
  build() {
    return {
      get_id: this.get_id,
      type: this.type,
      name: this.name,
      description: this.description,
      duration: this.duration,
      url: this.url,
      image: this.image,
      video: this.video,
      audio: this.audio,
      article: this.article,
      document: this.document,
      position: this.position,
    };
  }
}
