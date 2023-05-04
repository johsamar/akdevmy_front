import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";

/**
 * 
 * @param addArticle:   This function, it's just a way to make the parent 
 *                      component receive the value of whatever is entered into the text editor.
 * @param initialValue: It is an optional property that is usually empty, in case of using it, 
 *                      it will simply show a start message in the editor as a kind of placeholder.
 *  
 * @returns A string with the value of the editor. 
 */
const InputArticleComponent = ({ addArticle, initialValue }) => {
  const [article, setArticle] = useState(initialValue ?? "");

  useEffect(() => setArticle(article ?? ""), [initialValue]);

  const handleEditor = (newArticle) => {
    setArticle(newArticle);
    addArticle(article);
  };

  return (
    <Editor
      apiKey="060bmtk3hs231s8vk9rw1k20c3bx7gjs2anymf4e3t99h794"
      initialValue={initialValue}
      value={article}
      init={{
        height: 400,
        language_url: "/src/config/langs/es.js",
        language: "es",
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        images_file_types: "jpg,jpeg,png",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      toolbar={
        "undo redo | blocks | " +
        "bold italic forecolor | alignleft aligncenter " +
        "alignright alignjustify | bullist numlist outdent indent | " +
        "removeformat | help"
      }
      onEditorChange={(newArticle, editor) => handleEditor(newArticle)}
    />
  );
};

InputArticleComponent.propTypes = {
  addArticle: PropTypes.func.isRequired,
  initialValue: PropTypes.string
};

export default InputArticleComponent;
