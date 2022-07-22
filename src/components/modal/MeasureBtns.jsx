const measureBtns = [
  { id: 1, value: 2 },
  { id: 2, value: 3 },
  { id: 3, value: 4 },
  { id: 4, value: 5 },
  { id: 5, value: 6 },
  { id: 6, value: 7 },
  { id: 7, value: 8 },
  { id: 8, value: 9 },
];
function MeasureBtns({ setMeasure }) {
  return (
    <>
      {measureBtns.map((btn) => (
        <button key={btn.id} onClick={() => setMeasure(btn.value)}>
          {btn.value}
        </button>
      ))}
    </>
  );
}

export default MeasureBtns;
