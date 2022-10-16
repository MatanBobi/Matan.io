import Giscus from "@giscus/react";
import { useContext } from "react";
import { Theme, ThemeContext } from "../hooks/useThemeMode";

export const GiscusComments = () => {
  const theme = useContext(ThemeContext);
  return (
    <Giscus
      id="comments"
      repo="MatanBobi/Matan.io-posts-discussions"
      repoId="R_kgDOIOr8dQ"
      category="Posts"
      categoryId="DIC_kwDOIOr8dc4CSAmc"
      mapping="og:title"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === Theme.Dark ? "dark_dimmed" : "light"}
      lang="en"
      loading="lazy"
    />
  );
};
