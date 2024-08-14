import css from "./Options.module.css";

export default function Options({
  totalFeedback,
  updateFeedback,
  resetFeedback,
}) {
  return (
    <div className={css.options}>
      <div className={css.feedback}>
      <button onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      </div>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
