/* eslint-disable global-require */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const twitterWidgetJs = "https://platform.twitter.com/widgets.js";

declare global {
  interface Window {
    twttr: any;
  }
}

interface JSONObject {
  [k: string]: any;
}

export interface TwitterTweetEmbedProps {
  /**
   * Tweet id that needs to be shown
   */
  tweetId: string;
  /**
   * Additional options to pass to twitter widget plugin
   */
  options?: JSONObject;
  /**
   * Placeholder while tweet is loading
   */
  placeholder?: string | React.ReactNode;
  /**
   * Function to execute after load, return html element
   */
  onLoad?: (element: any) => void;
}

const methodName = "createTweet";

const TwitterTweetEmbed = (props: TwitterTweetEmbedProps): any => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let isComponentMounted = true;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const script = require("scriptjs");
    script(twitterWidgetJs, "twitter-embed", () => {
      if (!window.twttr) {
        console.error("Failure to load window.twttr, aborting load");
        return;
      }
      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName]) {
          console.error(
            `Method ${methodName} is not present anymore in twttr.widget api`
          );
          return;
        }

        window.twttr.widgets[methodName](
          props.tweetId,
          ref?.current,
          props.options
        ).then((element: any) => {
          setLoading(false);
          if (props.onLoad) {
            props.onLoad(element);
          }
        });
      }
    });

    // cleaning up
    return () => {
      isComponentMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.tweetId]);

  return (
    <>
      {loading && <>{props.placeholder}</>}
      <div ref={ref} />
    </>
  );
};

export default TwitterTweetEmbed;
