import { Classes } from "./classes.class";
import { TYPES } from "./types.enum";

export const buildClassByType = (classes) => {
  switch (classes.privateState.type) {
    case TYPES.DOCUMENT:
      return buildClassTypeDocument(classes);
    case TYPES.MULTIMEDIA:
      return buildClassTypeMultimedia(classes);
    case TYPES.LINK:
      return buildClassTypeLink(classes);
    case TYPES.ARTICLE:
      return buildClassTypeArticle(classes);
  }
};

/**
 * These functions will serve as a kind of class factory, since when changing one type of class for another, 
 * it still retains the data from the previous one.
 */
export const buildClassTypeDocument = ( classes ) => {
  const data = classes.formData;
  const id = classes.privateState.id;
  const type = classes.privateState.type;
  const position = classes.privateState.position;

  const classTypeDocument = new Classes()
    .setGet_id(id)
    .setType(type)
    .setName(data.name)
    .setDescription(data.description)
    .setDuration(data.duration)
    .setDocument(data.document)
    .setPosition(position)
    .build();

  return classTypeDocument;
};

export const buildClassTypeMultimedia = (classes) => {
  const data = classes.formData;
  const id = classes.privateState.id;
  const type = classes.privateState.type;
  const position = classes.privateState.position;

  const classTypeMultimedia = new Classes()
    .setGet_id(id)
    .setType(type)
    .setName(data.name)
    .setDescription(data.description)
    .setDuration(data.duration)
    .setImage(data.multimedia)
    .setVideo(data.multimedia)
    .setPosition(position)
    .build();

  return classTypeMultimedia;
}

export const buildClassTypeLink = (classes) => {
  const data = classes.formData;
  const id = classes.privateState.id;
  const type = classes.privateState.type;
  const position = classes.privateState.position;

  const classTypeLink = new Classes()
    .setGet_id(id)
    .setType(type)
    .setName(data.name)
    .setDescription(data.description)
    .setDuration(data.duration)
    .setUrl(data.url)
    .setPosition(position)
    .build();

    return classTypeLink;
};

export const buildClassTypeArticle = ( classes ) => {
  const data = classes.formData;
  const id = classes.privateState.id;
  const type = classes.privateState.type;
  const article = classes.privateState.article;
  const position = classes.privateState.position;

  const classTypeArticle = new Classes()
    .setGet_id(id)
    .setType(type)
    .setName(data.name)
    .setDescription(data.description)
    .setDuration(data.duration)
    .setArticle(article)
    .setPosition(position)
    .build();

    return classTypeArticle;
};