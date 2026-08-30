import type { Reference, TimelineEvent } from "./types";
import { timelineData } from "./data";

function EventItem({ event }: { event: TimelineEvent }) {
  const isLeft = event.side === "left";
  return (
    <div className={`ev ${isLeft ? "ev-left" : "ev-right"}`}>
      <span className="ev-year">{event.year}</span>
      <h3 className="ev-title">{event.title}</h3>
      <p className="ev-desc" dangerouslySetInnerHTML={{ __html: event.description }} />
      <span className={`ev-dot ${isLeft ? "ev-dot-left" : "ev-dot-right"}`} />
    </div>
  );
}

function ReferenceItem({ reference }: { reference: Reference }) {
  const { authors, year, title, source, detail, url } = reference;
  return (
    <li className="ref-item">
      {authors} ({year}). <em>{title}</em>.{" "}
      {source && <>{source}. </>}
      {detail && <>{detail} </>}
      {url && (
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      )}
    </li>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="timeline">
        <div className="timeline-line" />

        {timelineData.events.map((event, i) => (
          <EventItem key={i} event={event} />
        ))}

        <div className="refs">
          <h2 className="refs-title">Referencias</h2>
          <ul className="refs-list">
            {timelineData.references.map((reference, i) => (
              <ReferenceItem key={i} reference={reference} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
