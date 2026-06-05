import React from "react";

/**
 * Renders a project title keeping the standalone "x" lowercase even when the
 * surrounding text is uppercased via CSS (e.g. "Datawise x HPE").
 */
export const renderProjectTitle = (title: string): React.ReactNode =>
  title.split(/(\sx\s)/i).map((part, i) =>
    /^\sx\s$/i.test(part) ? (
      <span key={i} className="lowercase">{part}</span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
