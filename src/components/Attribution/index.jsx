import "./attribution.css";

export default function Attribution({ name, url }) {
  return (
    <footer className="attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href={url}>{name}</a>.
    </footer>
  );
}
