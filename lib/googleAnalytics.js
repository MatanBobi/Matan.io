export const pageview = (url) => {
  !isInDevEnvironment() &&
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
};

// log specific events happening.
export const event = ({ action, params }) => {
  !isInDevEnvironment() && window.gtag("event", action, params);
};

export const isInDevEnvironment = () => {
  return process && process.env.NODE_ENV === "development";
};
