import markdownStyles from "./markdown-styles.module.css";


export function PostBody() {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
      />
    </div>
  );
}
